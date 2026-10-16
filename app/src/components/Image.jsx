import images from "virtual:optimized-images";
import "./Image.css";

// Vite-native equivalent of the responsive/static portion of next/image.
// The build plugin supplies resized WebP variants, never the full-size export.
// React 19 passes ref through to the real DOM image for existing GSAP hooks.
export default function Image({
  src,
  alt,
  sizes = "100vw",
  width,
  height,
  loading = "lazy",
  decoding = "async",
  priority = false,
  fetchPriority,
  className = "",
  ref,
  ...props
}) {
  const key = typeof src === "string" && /^https?:\/\//.test(src)
    ? new URL(src).pathname
    : src;
  const image = images[key];

  return (
    <img
      {...props}
      ref={ref}
      className={`od-image ${className}`.trim()}
      src={src}
      alt={alt}
      width={width ?? image?.width}
      height={height ?? image?.height}
      srcSet={props.srcSet ?? image?.srcSet}
      sizes={image ? sizes : undefined}
      loading={priority ? "eager" : loading}
      decoding={decoding}
      fetchPriority={priority ? "high" : fetchPriority}
    />
  );
}
