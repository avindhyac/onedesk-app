import "./Avatar.css";

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Avatar({ name, service = "sec", size = 48, photo }) {
  if (photo) {
    return (
      <img
        className="od-avatar od-avatar--photo"
        src={photo}
        alt={name}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <span
      className={`od-avatar od-avatar--${service}`}
      style={{ width: size, height: size, fontSize: size * 0.35 }}
      aria-label={name}
    >
      {initials(name)}
    </span>
  );
}
