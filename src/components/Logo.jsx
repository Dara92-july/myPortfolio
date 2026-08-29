export default function Logo({ className = 'h-9 w-auto' }) {
  return (
    <svg
      viewBox="0 0 400 100"
      fill="currentColor"
      className={className}
      role="img"
      aria-label="DaraDev Solutions"
    >
      <g>
        <circle cx="40" cy="50" r="35" stroke="currentColor" strokeWidth="8" fill="none" />
        <path d="M40 15 Q70 50 40 85" stroke="currentColor" strokeWidth="8" fill="none" />
      </g>
      <text x="100" y="55" fontFamily="Segoe UI, system-ui, sans-serif" fontSize="32" fontWeight="700">
        DaraDev
      </text>
      <text
        x="100"
        y="85"
        fontFamily="Segoe UI, system-ui, sans-serif"
        fontSize="18"
        fontWeight="400"
        opacity="0.8"
      >
        Solutions
      </text>
    </svg>
  );
}
