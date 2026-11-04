export default function BotanicalDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center text-sage ${className}`} aria-hidden="true">
      <svg viewBox="0 0 320 40" className="h-8 w-full max-w-sm" fill="none">
        <path
          d="M2 20c40-14 70 14 110 0s70-14 110 0 60 14 96 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <g fill="currentColor" opacity="0.85">
          <ellipse cx="56" cy="16" rx="7" ry="3.4" transform="rotate(-24 56 16)" />
          <ellipse cx="92" cy="24" rx="7" ry="3.4" transform="rotate(22 92 24)" />
          <ellipse cx="160" cy="16" rx="7" ry="3.4" transform="rotate(-24 160 16)" />
          <ellipse cx="228" cy="24" rx="7" ry="3.4" transform="rotate(22 228 24)" />
          <ellipse cx="264" cy="16" rx="7" ry="3.4" transform="rotate(-24 264 16)" />
        </g>
        <circle cx="160" cy="30" r="2.4" fill="currentColor" />
      </svg>
    </div>
  )
}
