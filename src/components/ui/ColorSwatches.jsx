export const COLOURS = [
  { name: 'Black', value: '#2e2a26' },
  { name: 'White', value: '#faf6ec' },
  { name: 'Pink', value: '#e8b4be' },
  { name: 'Green', value: '#8fa07e' },
  { name: 'Yellow', value: '#e7cd84' },
  { name: 'Lavender', value: '#b8a7c9' },
]

export default function ColorSwatches({ showLabels = false, size = 'md', className = '' }) {
  const dot = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'

  return (
    <ul
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}
      aria-label="Available colours"
    >
      {COLOURS.map(({ name, value }) => (
        <li key={name} className="inline-flex items-center gap-1.5" title={name}>
          <span
            className={`${dot} shrink-0 rounded-full border border-moss/20 shadow-sm transition-transform hover:scale-110`}
            style={{ backgroundColor: value }}
            aria-hidden="true"
          />
          {showLabels ? (
            <span className="text-xs font-medium text-bark-soft">{name}</span>
          ) : (
            <span className="sr-only">{name}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
