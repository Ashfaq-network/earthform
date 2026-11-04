import { Link } from 'react-router-dom'

export default function Logo({ className = '', onClick, light = false }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="earthform home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <img
        src="/images/logo.png"
        alt=""
        width="380"
        height="380"
        decoding="async"
        className={`h-11 w-11 shrink-0 rounded-full object-cover shadow-sm transition-transform duration-500 group-hover:rotate-[-8deg] ${
          light ? 'ring-1 ring-cream/40' : 'ring-1 ring-moss/10'
        }`}
      />
      <span
        className={`font-display text-[1.45rem] leading-none tracking-tight ${
          light ? 'text-cream' : 'text-moss'
        }`}
      >
        earthform
      </span>
    </Link>
  )
}
