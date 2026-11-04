function Sprig() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-sage" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="12" r="3" />
      <circle cx="12" cy="12" r="2.4" className="text-moss" fill="currentColor" />
    </svg>
  )
}

export default function Marquee({ items = [], className = '' }) {
  const doubled = [...items, ...items]

  return (
    <div className={`marquee overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 px-6 text-[0.68rem] font-semibold uppercase tracking-[0.26em] whitespace-nowrap sm:text-[0.72rem]"
          >
            {item}
            <Sprig />
          </span>
        ))}
      </div>
    </div>
  )
}
