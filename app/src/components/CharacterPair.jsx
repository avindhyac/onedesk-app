import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import "./CharacterPair.css";

function getCharacterSrc(character, pose) {
  if (!character) return null;
  if (typeof character === "string") return character;
  return character[pose] || character.stand || character.sit || null;
}

function CharacterPair({ character, alt = "", className = "", imgClassName = "", loading = "lazy", bindHover = true }, ref) {
  const rootRef = useRef(null);
  const sitRef = useRef(null);
  const standRef = useRef(null);
  const activeRef = useRef(false);
  const touchArmedRef = useRef(false);
  const lastPointerTypeRef = useRef("mouse");

  const sit = getCharacterSrc(character, "sit");
  const stand = getCharacterSrc(character, "stand");
  const canSwap = Boolean(sit && stand && sit !== stand);

  const showStanding = useCallback(() => {
    if (!canSwap || activeRef.current) return;
    activeRef.current = true;
    gsap.killTweensOf([sitRef.current, standRef.current]);
    gsap.timeline({ defaults: { duration: 0.22, ease: "power3.out" } })
      .to(sitRef.current, { autoAlpha: 0, y: 8, scale: 0.98 }, 0)
      .fromTo(standRef.current, { autoAlpha: 0, y: 14, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1 }, 0.04);
  }, [canSwap]);

  const showSeated = useCallback(() => {
    if (!canSwap || !activeRef.current) return;
    activeRef.current = false;
    touchArmedRef.current = false;
    gsap.killTweensOf([sitRef.current, standRef.current]);
    gsap.timeline({ defaults: { duration: 0.18, ease: "power3.out" } })
      .to(standRef.current, { autoAlpha: 0, y: 10, scale: 0.98 }, 0)
      .to(sitRef.current, { autoAlpha: 1, y: 0, scale: 1 }, 0.03);
  }, [canSwap]);

  const handlePointerDown = useCallback((event) => {
    lastPointerTypeRef.current = event.pointerType || "mouse";
  }, []);

  const handleClickCapture = useCallback((event) => {
    if (!canSwap || lastPointerTypeRef.current === "mouse") return;
    if (!touchArmedRef.current) {
      event.preventDefault();
      touchArmedRef.current = true;
      showStanding();
    }
  }, [canSwap, showStanding]);

  useImperativeHandle(ref, () => ({
    showStanding,
    showSeated,
    handlePointerDown,
    handleClickCapture,
  }), [showStanding, showSeated, handlePointerDown, handleClickCapture]);

  if (!sit && !stand) return null;

  return (
    <span
      ref={rootRef}
      className={`char-pair ${className}`.trim()}
      onPointerEnter={bindHover ? showStanding : undefined}
      onPointerLeave={bindHover ? showSeated : undefined}
      onPointerDown={bindHover ? handlePointerDown : undefined}
      onFocus={bindHover ? showStanding : undefined}
      onBlur={bindHover ? showSeated : undefined}
      onClickCapture={bindHover ? handleClickCapture : undefined}
    >
      <img src={sit || stand} alt={alt} className={`char-pair__img char-pair__img--sit ${imgClassName}`.trim()} loading={loading} ref={sitRef} />
      {canSwap && (
        <img src={stand} alt="" className={`char-pair__img char-pair__img--stand ${imgClassName}`.trim()} loading={loading} ref={standRef} aria-hidden="true" />
      )}
    </span>
  );
}

export default forwardRef(CharacterPair);
