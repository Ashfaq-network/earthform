export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  children,
}) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${centered ? 'justify-center' : ''}`}>
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance font-display text-[clamp(2rem,4.5vw,3.4rem)] text-moss">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-pretty text-[1.02rem] leading-relaxed text-bark-soft ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
