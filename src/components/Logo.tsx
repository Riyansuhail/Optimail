export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="13" fill="url(#olg)" />
      <path
        d="M12 18L24 25.5L36 18"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <rect
        x="10.5"
        y="15.5"
        width="27"
        height="17"
        rx="3"
        stroke="#fff"
        strokeWidth="1.8"
        fill="none"
        opacity="0.85"
      />
      <circle cx="35" cy="15" r="7.5" fill="#fff" />
      <circle cx="35" cy="15" r="6" fill="url(#olg)" />
      <text
        x="35"
        y="18.2"
        textAnchor="middle"
        fill="#fff"
        fontSize="7.5"
        fontWeight="800"
        fontFamily="system-ui"
      >
        AI
      </text>
      <defs>
        <linearGradient id="olg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#FF6B6B" />
          <stop offset="1" stopColor="#C0392B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
