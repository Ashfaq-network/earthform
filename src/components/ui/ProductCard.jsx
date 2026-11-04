import { motion } from 'framer-motion'
import PlaceholderArt from './PlaceholderArt'

export default function ProductCard({ product, onQuickView, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group card-soft overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <button
          type="button"
          onClick={() => onQuickView?.(product)}
          aria-label={`Quick view ${product.name}`}
          className="block w-full cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.045 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/5] w-full bg-sand/40"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            ) : (
              <PlaceholderArt
                variant={product.art}
                tone={product.tone}
                className="h-full w-full"
              />
            )}
          </motion.div>
        </button>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-moss backdrop-blur">
          {product.category}
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-moss/90 px-3 py-1 text-xs font-semibold tracking-wide text-cream">
          Rs. {product.price}
        </span>

        <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <button
            type="button"
            onClick={() => onQuickView?.(product)}
            className="pointer-events-auto w-full rounded-full bg-cream/95 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-moss shadow-soft backdrop-blur transition-colors hover:bg-moss hover:text-cream"
          >
            Quick look
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-[1.3rem] text-moss">{product.name}</h3>
          <span className="shrink-0 font-sans text-sm font-semibold text-terra">Rs. {product.price}</span>
        </div>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-bark-soft">{product.blurb}</p>
        <p className="mt-3 text-[0.64rem] uppercase tracking-[0.15em] text-bark-soft/70">
          {product.detail}
        </p>
      </div>
    </motion.article>
  )
}
