// PropertyImage
// Renders an actual photo when `src` is provided. Until real MK Temple Inn
// photography is supplied, it falls back to a tasteful branded placeholder
// so every image slot in the site is easy to find and swap later.
// Just drop files into /public/images/... and pass the path as `src`.

export default function PropertyImage({ src, alt, label, className = '', imgClassName = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[var(--color-brown)] via-[var(--color-charcoal)] to-[var(--color-brown-light)] ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.14]"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 300 V150 Q0 40 200 40 Q400 40 400 150 V300"
          fill="none"
          stroke="#c9a15f"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}