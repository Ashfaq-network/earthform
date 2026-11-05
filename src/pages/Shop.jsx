import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Hand, Gift } from 'lucide-react'

import PageShell from '@components/ui/PageShell'
import SectionHeading from '@components/ui/SectionHeading'
import ProductCard from '@components/ui/ProductCard'
import QuickViewModal from '@components/ui/QuickViewModal'
import Reveal from '@components/ui/Reveal'
import BotanicalDivider from '@components/ui/BotanicalDivider'
import ColorSwatches from '@components/ui/ColorSwatches'
import usePageMeta from '@hooks/usePageMeta'
import { products, CATEGORIES } from '@data/products'
import { CONTACT } from '@data/site'

const PERKS = [
  { icon: Package, label: 'Plastic-free packaging' },
  { icon: Hand, label: 'Made in small batches' },
  { icon: Gift, label: 'Gift wrap included' },
]

export default function Shop() {
  const [active, setActive] = useState('All')
  const [quickView, setQuickView] = useState(null)

  usePageMeta({
    title: 'Shop the Studio — earthform',
    description:
      'Browse handcrafted cement trays, plates and sculptural objects from the earthform studio.',
  })

  const filtered = useMemo(
    () => (active === 'All' ? products : products.filter((product) => product.category === active)),
    [active],
  )

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-sand-deep/50 bg-sand/50">
        <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-rose-soft/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-sage-mist/70 blur-3xl" />
        <div className="container-earth relative py-16 text-center sm:py-20">
          <span className="eyebrow justify-center">the shop</span>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance font-display text-[clamp(2.4rem,5.5vw,4rem)] text-moss">
            Everything, gathered in <span className="script-accent text-terra">one place</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-bark-soft">
            Trays, plates and sculptural objects — cast in small runs, restocked when the
            studio quiets down. When a piece is gone, it's usually gone for a while. All
            prices are in Sri Lankan Rupees (LKR).
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {PERKS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-moss/80"
              >
                <Icon size={15} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-earth">
          <Reveal className="mb-10">
            <div className="rounded-[2.5rem] border border-sand-deep/60 bg-cream/70 px-6 py-7 shadow-soft sm:px-8 sm:py-9 lg:px-10">
              <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
                <div>
                  <span className="eyebrow">custom orders</span>
                  <p className="mt-2 text-balance font-display text-2xl text-moss sm:text-3xl">
                    Made to order, in your colours.
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-bark-soft">
                    Every piece can be made in black, white, pink, green, yellow or lavender.
                    Want another colour, or a whole set in your own palette?{' '}
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
                    </a>{' '}
                    — we love a custom request.
                  </p>
                  <ColorSwatches showLabels className="mt-5" />
                  <Link to="/order?product=custom" className="btn btn-primary mt-6">
                    Start a custom order
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
                  <div className="arch-frame aspect-[4/5] w-full shadow-soft">
                    <img
                      src="/images/custom-order.jpg"
                      alt="Custom earthform cement pieces made to order in your chosen colours"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-cream px-4 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-moss shadow-soft">
                    made to order
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div
              className="flex flex-wrap items-center gap-2.5"
              role="group"
              aria-label="Filter products by category"
            >
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="chip"
                  data-active={active === category}
                  aria-pressed={active === category}
                  onClick={() => setActive(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-bark-soft">
              Showing {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onQuickView={setQuickView}
              />
            ))}

            <Reveal className="card-soft flex flex-col overflow-hidden">
              <div className="aspect-[4/5] w-full bg-sand/40">
                <img
                  src="/images/sets-available.jpg"
                  alt="A set of handcrafted earthform cement pieces in assorted colours"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 items-center justify-center p-5 text-center sm:p-6">
                <h3 className="font-display text-[1.3rem] text-moss">Sets are available.</h3>
              </div>
            </Reveal>
          </div>

          <p className="mt-10 text-center text-sm text-bark-soft">
            Looking for something particular?{' '}
            <Link to="/order?product=custom" className="link-squiggle font-semibold text-moss">
              Start a custom request
            </Link>
            .
          </p>

          <BotanicalDivider className="mt-14" />
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-earth">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-cream px-6 py-14 text-center shadow-soft sm:px-12">
              <div className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-sage-mist/70 blur-2xl" />
              <div className="pointer-events-none absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-rose-soft/60 blur-2xl" />
              <p className="font-script text-3xl text-terra">slowly, always</p>
              <h2 className="mx-auto mt-2 max-w-xl text-balance font-display text-[clamp(1.9rem,4vw,2.9rem)] text-moss">
                New pieces leave the studio every few weeks.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-bark-soft">
                Follow along on Instagram for restock days, or write to us about a piece made
                just for you.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/about" className="btn btn-primary">
                  Meet the maker
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={CONTACT.instagram.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-outline"
                >
                  Follow the studio
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </PageShell>
  )
}
