const AVATAR_TONES = {
  sage: 'bg-sage text-cream',
  terra: 'bg-terra text-cream',
  rose: 'bg-rose text-moss-deep',
  butter: 'bg-butter text-moss-deep',
  moss: 'bg-moss text-cream',
}

export default function ReviewCard({ review }) {
  return (
    <figure className="flex h-full flex-col rounded-[1.75rem] border border-sand-deep/60 bg-cream p-7 shadow-soft sm:p-8">
      <svg viewBox="0 0 40 32" className="h-7 w-9 text-sage-soft" fill="currentColor" aria-hidden="true">
        <path d="M0 32V18C0 8 5 2 16 0l2 6c-6 1-9 5-9 10h9v16H0Zm22 0V18C22 8 27 2 38 0l2 6c-6 1-9 5-9 10h9v16H22Z" />
      </svg>
      <blockquote className="mt-4 flex-1 text-pretty font-display text-[1.12rem] italic leading-relaxed text-moss">
        {review.quote}
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3.5">
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-lg ${
            AVATAR_TONES[review.tone] || AVATAR_TONES.sage
          }`}
          aria-hidden="true"
        >
          {review.initial}
        </span>
        <span className="text-sm font-semibold text-bark">{review.name}</span>
      </figcaption>
    </figure>
  )
}
