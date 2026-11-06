import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Leaf } from 'lucide-react'
import useScrollLock from '@hooks/useScrollLock'
import PlaceholderArt from './PlaceholderArt'
import ColorSwatches from './ColorSwatches'
import { CONTACT } from '@data/site'

export default function QuickViewModal({ product, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)
  const onCloseRef = useRef(onClose)

  useScrollLock(Boolean(product))

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!product) return

    triggerRef.current = document.activeElement
    closeButtonRef.current?.focus()

    const dialog = dialogRef.current
    const focusableSelector =
      'a[href], button:not([disabled]):not([tabindex="-1"]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const getFocusable = () =>
      dialog
        ? [...dialog.querySelectorAll(focusableSelector)].filter(
            (element) => element.getClientRects().length > 0,
          )
        : []

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = getFocusable()
      if (focusable.length === 0) {
        event.preventDefault()
        dialog?.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement
      const inside = dialog?.contains(active)
      const atStart = active === first || active === dialog
      const atEnd = active === last || active === dialog

      if (event.shiftKey && (atStart || !inside)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (atEnd || !inside)) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (triggerRef.current instanceof HTMLElement && triggerRef.current.isConnected) {
        triggerRef.current.focus()
      }
    }
  }, [product])

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.button
            type="button"
            tabIndex={-1}
            className="absolute inset-0 cursor-default bg-moss-deep/45 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close quick view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            tabIndex={-1}
            data-lenis-prevent
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-[2rem] bg-cream shadow-lift focus:outline-none"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-cream/90 text-moss shadow-soft backdrop-blur transition-colors hover:bg-moss hover:text-cream"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative h-64 overflow-hidden bg-sand/40 sm:h-80 md:h-auto md:min-h-[30rem]">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <PlaceholderArt
                    variant={product.art}
                    tone={product.tone}
                    className="absolute inset-0 h-full w-full"
                  />
                )}
              </div>

              <div className="flex flex-col p-6 sm:p-8 md:p-10">
                <span className="eyebrow">{product.category}</span>
                <h3 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] text-moss">
                  {product.name}
                </h3>
                <p className="mt-1 font-display text-2xl text-terra">Rs. {product.price}</p>

                <p className="mt-5 text-pretty leading-relaxed text-bark-soft">{product.blurb}</p>
                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.16em] text-bark-soft/75">
                  {product.detail}
                </p>

                <div className="mt-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-moss">
                    Available colours
                  </p>
                  <ColorSwatches showLabels size="sm" className="mt-2" />
                  <p className="mt-2 text-xs leading-relaxed text-bark-soft">
                    Need another colour?{' '}
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="link-squiggle font-semibold text-moss"
                    >
                      Email us
                    </a>{' '}
                    or{' '}
                    <a
                      href={CONTACT.instagram.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-squiggle font-semibold text-moss"
                    >
                      DM us
                    </a>
                    .
                  </p>
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl bg-sage-mist/70 p-4 text-sm leading-relaxed text-moss">
                  <Leaf size={18} className="mt-0.5 shrink-0" />
                  <p>
                    Each piece is made in a small batch, so no two are exactly alike. Yours will
                    carry its own little variations.
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    to={`/order?product=${product.id}`}
                    onClick={onClose}
                    className="btn btn-primary w-full"
                  >
                    Order this piece
                  </Link>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="mt-3 block text-center text-xs font-semibold tracking-wide text-bark-soft transition-colors hover:text-moss"
                  >
                    Ask a question instead
                  </Link>
                  <p className="mt-2 text-center text-xs tracking-wide text-bark-soft">
                    Ships in 3–5 days · gift wrapping included
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
