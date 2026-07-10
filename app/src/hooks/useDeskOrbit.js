import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// The two rest points' POSITION is final - they must match the main Hero's
// static .hero__seat--left/--right centers exactly (top:4%, width:36%,
// aspect-ratio:1/0.96, left/right:4%, all in percent of .hero__desk-scene):
//   left  center: x = 4 + 36/2 = 22,  y = 4 + (36*0.96)/2 = 21.28
//   right center: x = 100 - 4 - 36/2 = 78, same y
// Both are equidistant from the box's horizontal middle, so they sit at
// angle 180 (left) and 0 (right) on an ellipse centered on (50, 21.28) with
// horizontal radius 28. RY is tuned by eye against the desk art - the seats
// aren't literally on the table's rim, so this is a visual fit, not exact
// geometry.
const CX = 50;
const CY = 30;
const RX = 29;
const RY = 30;

const LEFT_SEAT = 180; // degrees
const RIGHT_SEAT = 0; // degrees

// How far a character continues clockwise past a seat, off screen and
// invisible, before it's repositioned to approach the other seat.
const BUFFER = 32;

const HOLD = 2.2; // seconds both characters sit still at their seats
const SWEEP = 1.8; // seconds the "mover" takes to cross the whole table
const REFRESH = SWEEP * 0.42; // seconds each half (out/in) of the "refresher"'s hop takes

// Total invisible window at the sweep's midpoint (the arc's apex) during
// which the mover's mirror flips - a quick fade out, instant flip, fade back
// in, rather than animating scaleX through 0 (which visibly squashes the
// character to a sliver - tried, looked broken). Split evenly on either side
// of SWEEP/2 so the position (already mid-apex there) and the blink line up.
const BLINK = 0.28;

// No added rotation: both rest poses must render EXACTLY as the static main
// Hero does (0deg, correctly mirrored per-character - see signAt below), so
// there's nothing to ramp. A rotation flourish was tried and made the
// chair/legs visibly disconnect from the torso (this art is a fixed
// top-down "leaning on the desk" pose, not designed to rotate as a rigid
// body) - a horizontal mirror-flip crossing reads far more naturally and
// keeps every rest pose native.
function pointAt(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + RX * Math.cos(rad),
    y: CY - RY * Math.sin(rad),
  };
}

// `sign` is the signed horizontal scale: +1 renders the character's raw,
// unmirrored art (its native pose - reaches right for HERO_DESK_SEATS.left
// characters, reaches left for .right characters); -1 mirrors it. During the
// mover's sweep this is tweened continuously from +1 to -1 (or back), giving
// a smooth flip rather than a rotation.
function applyPose(el, angleDeg, opacity, scale, sign) {
  const { x, y } = pointAt(angleDeg);
  gsap.set(el, {
    left: `${x}%`,
    top: `${y}%`,
    xPercent: -50,
    yPercent: -50,
    rotate: 0,
    scaleX: scale * sign,
    scaleY: scale,
    opacity,
  });
}

// +1 (native/unmirrored) when the character is on its own home seat, -1
// (mirrored) when it's a guest on the other one - this is what makes BOTH
// rest poses match the main Hero's rendering exactly, for every character.
function signFor(character, seatLabel) {
  return character.home === seatLabel ? 1 : -1;
}

/**
 * Two "active" character images share one semicircular arc across the top
 * of the desk and always travel clockwise - left seat to right seat, over
 * the top - as if the whole table were spinning, using only 2 DOM elements.
 *
 * Each beat, whichever slot currently holds the LEFT seat is the "mover":
 * it sweeps the full arc to the right seat, mirror-flipping partway through
 * (synced to the same eased progress as its position, so both land exactly
 * at the arc's apex) if crossing takes it off its home seat. Whichever slot
 * holds the RIGHT seat is the "refresher": it continues clockwise past the
 * right seat, fading out off screen, then reappears (still invisible)
 * clockwise-before the left seat and fades back in - as a new character
 * from the queue, in that character's own native left/right sign, no flip
 * needed since it's a fresh appearance. Because mover/refresher are derived
 * from each slot's *current* seat (not an alternating index), the direction
 * never reverses.
 *
 * `characters` is the full roster in queue order, each tagged `home: "left"
 * | "right"` (length >= 2 - the first two seed the initial left/right
 * seats). Skips entirely when the user has requested reduced motion,
 * showing the first two characters seated still.
 */
export default function useDeskOrbit(scopeRef, slotRefs, characters) {
  useGSAP(
    () => {
      const [slotA, slotB] = slotRefs.map((r) => r.current);
      if (!slotA || !slotB || characters.length < 2) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let cursor = 2;
        const nextChar = () => characters[cursor++ % characters.length];

        const state = [
          { el: slotA, angle: LEFT_SEAT, seat: "left", home: characters[0].home },
          { el: slotB, angle: RIGHT_SEAT, seat: "right", home: characters[1].home },
        ];
        let cancelled = false;
        let activeTween;
        let pendingCall;

        slotA.src = characters[0].src;
        slotB.src = characters[1].src;
        applyPose(slotA, LEFT_SEAT, 1, 1, signFor(characters[0], "left"));
        applyPose(slotB, RIGHT_SEAT, 1, 1, signFor(characters[1], "right"));

        const runBeat = () => {
          if (cancelled) return;

          // Derived from current seats, not an alternating index - keeps the
          // travel direction consistently clockwise every beat.
          const mover = state.find((s) => s.seat === "left");
          const refresher = state.find((s) => s.seat === "right");
          const refresherExit = RIGHT_SEAT - BUFFER;
          const refresherEnter = LEFT_SEAT + BUFFER;
          const upcoming = nextChar();

          const tl = gsap.timeline({
            onComplete: () => {
              mover.angle = RIGHT_SEAT;
              mover.seat = "right";
              refresher.angle = LEFT_SEAT;
              refresher.seat = "left";
              refresher.home = upcoming.home;

              if (cancelled) return;
              pendingCall = gsap.delayedCall(HOLD, runBeat);
            },
          });

          // Mover: full clockwise sweep from left seat to right seat, over
          // the top of the desk. Position eases the whole way; the mirror
          // only flips (if crossing takes it off its home seat) in a brief
          // blink right at the apex - fades out, flips instantly while
          // invisible, fades back in - so the pose itself never visibly
          // squashes or distorts.
          const startSign = signFor({ home: mover.home }, "left");
          const moverState = { angle: LEFT_SEAT, opacity: 1, sign: startSign };
          const applyMover = () => applyPose(mover.el, moverState.angle, moverState.opacity, 1, moverState.sign);

          tl.to(moverState, { angle: RIGHT_SEAT, duration: SWEEP, ease: "power2.inOut", onUpdate: applyMover }, 0);

          tl.to(moverState, { opacity: 0, duration: BLINK / 2, ease: "power1.in", onUpdate: applyMover }, SWEEP / 2 - BLINK / 2)
            .call(
              () => {
                moverState.sign = -startSign;
                applyMover();
              },
              null,
              SWEEP / 2
            )
            .to(moverState, { opacity: 1, duration: BLINK / 2, ease: "power1.out", onUpdate: applyMover }, SWEEP / 2);

          // Refresher: keep going clockwise past the right seat, fading out
          // off screen (same sign throughout - it isn't crossing seats, just
          // leaving); reposition (still invisible) to just before the left
          // seat; fade back in as the next character in the queue, using
          // that character's own native/guest sign for the left seat (a
          // fresh appearance, not a continuation, so no flip needed here).
          const refresherSign = signFor({ home: refresher.home }, "right");
          const refState = { angle: RIGHT_SEAT, opacity: 1, scale: 1 };
          tl.to(
            refState,
            {
              angle: refresherExit,
              opacity: 0,
              scale: 0.7,
              duration: REFRESH,
              ease: "power1.in",
              onUpdate: () => applyPose(refresher.el, refState.angle, refState.opacity, refState.scale, refresherSign),
              onComplete: () => {
                refresher.el.src = upcoming.src;
              },
            },
            0
          )
            .set(refState, { angle: refresherEnter, opacity: 0, scale: 0.7 })
            .to(
              refState,
              {
                angle: LEFT_SEAT,
                opacity: 1,
                scale: 1,
                duration: REFRESH,
                ease: "power1.out",
                onUpdate: () =>
                  applyPose(refresher.el, refState.angle, refState.opacity, refState.scale, signFor(upcoming, "left")),
              },
              SWEEP - REFRESH
            );

          activeTween = tl;
        };

        pendingCall = gsap.delayedCall(HOLD, runBeat);

        return () => {
          cancelled = true;
          pendingCall?.kill();
          activeTween?.kill();
          gsap.killTweensOf([slotA, slotB]);
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        slotA.src = characters[0].src;
        slotB.src = characters[1].src;
        applyPose(slotA, LEFT_SEAT, 1, 1, signFor(characters[0], "left"));
        applyPose(slotB, RIGHT_SEAT, 1, 1, signFor(characters[1], "right"));
      });

      return () => mm.revert();
    },
    { scope: scopeRef, dependencies: [characters] }
  );
}
