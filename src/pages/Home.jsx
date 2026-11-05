import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Layers, HeartHandshake, Recycle } from 'lucide-react'

import PageShell from '@components/ui/PageShell'
import Marquee from '@components/ui/Marquee'
import SectionHeading from '@components/ui/SectionHeading'
import Reveal from '@components/ui/Reveal'
import ProductCard from '@components/ui/ProductCard'
import QuickViewModal from '@components/ui/QuickViewModal'
import ReviewCard from '@components/ui/ReviewCard'

import usePageMeta from '@hooks/usePageMeta'
import { featuredProducts } from '@data/products'
import { reviews } from '@data/reviews'

gsap.registerPlugin(ScrollTrigger)

const VALUES = [
  'made by hand',
  'small batch',
  'hand-cast cement',
  'one of a kind',
  'plastic-free',
  'sent with love',
]

const ETHOS = [
  {
    icon: Layers,
    title: 'Cast, not rushed',
    body: 'We pour in tiny batches so every piece cures and finishes at its own pace.',
  },
  {
    icon: HeartHandshake,
    title: 'Finished by a person',
    body: 'Each curve is sanded and sealed by hand, so no two pieces are exactly alike.',
  },
  {
    icon: Recycle,
    title: 'Made with care',
    body: 'Mineral cement, low-waste casting and plastic-free packaging.',
  },
]

export default function Home() {
  const [quickView, setQuickView] = useState(null)
  const heroRef = useRef(null)
  const artRef = useRef(null)

  usePageMeta({
    title: 'earthform — Handcrafted Cement Homeware',
    description:
      'Unique, handcrafted cement pieces — trays, plates and sculptural objects that bring character and elegance to every home.',
  })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.to(artRef.current, {
        y: -46,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to('.hero-float', {
        y: -26,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <PageShell>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-sage-mist/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-rose-soft/50 blur-3xl" />

        <div className="container-earth relative grid items-center gap-12 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:pt-20">
          <div className="max-w-xl">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              small-batch · handmade goods
            </motion.span>

            <motion.h1
              className="mt-5 text-balance font-display text-[clamp(2.7rem,6.2vw,4.9rem)] leading-[0.98] text-moss"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Sculpted by hand,{' '}
              <span className="script-accent text-terra">slowly</span>, for the everyday.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-md text-pretty text-[1.02rem] leading-relaxed text-bark-soft"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              earthform is a small design studio casting unique cement pieces — trays, plates
              and sculptural objects that bring character and quiet elegance into the home.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/shop" className="btn btn-primary">
                Shop the collection
                <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Our story
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-2 text-xs tracking-wide text-bark-soft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-terra" aria-hidden="true" />
              Handmade in small batches · sent with love
            </motion.div>
          </div>

          <div ref={artRef} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="hero-float pointer-events-none absolute -left-4 top-10 z-20 hidden text-sage sm:block">
              <svg viewBox="0 0 80 120" className="h-24 w-16 sway" fill="none" aria-hidden="true">
                <path d="M40 118C36 86 40 60 58 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M40 118c2-28-8-48-26-60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="58" cy="38" rx="14" ry="7" transform="rotate(-42 58 38)" fill="currentColor" opacity="0.8" />
                <ellipse cx="20" cy="62" rx="13" ry="6.5" transform="rotate(36 20 62)" fill="currentColor" opacity="0.65" />
                <ellipse cx="46" cy="18" rx="11" ry="6" transform="rotate(-12 46 18)" fill="currentColor" opacity="0.85" />
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="arch-frame relative mx-auto aspect-[4/5] w-full max-w-[26rem] shadow-lift"
            >
              <img
                src="/images/products/cement/flower-tray.jpg"
                alt="Hand-cast cement flower tray"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-moss-deep/50 to-transparent" />
              <p className="absolute bottom-5 left-6 font-script text-2xl text-cream/95">
                the everyday series
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="absolute -bottom-6 right-2 rounded-2xl border border-sand-deep/50 bg-cream/95 px-5 py-4 shadow-soft backdrop-blur sm:right-6"
            >
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-bark-soft">
                this week in the studio
              </p>
              <p className="mt-1 font-display text-lg text-moss">94 pieces, all one of a kind</p>
            </motion.div>

            <div className="absolute -right-2 -top-4 z-20 hidden sm:block">
              <div className="spin-slow grid h-24 w-24 place-items-center rounded-full border border-sand-deep/60 bg-cream/90 shadow-soft backdrop-blur">
                <svg viewBox="0 0 100 100" className="absolute h-[86px] w-[86px] text-moss/80">
                  <defs>
                    <path id="stamp-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="8.4" letterSpacing="2.6" fill="currentColor" fontWeight="600">
                    <textPath href="#stamp-circle" startOffset="0">
                      MADE SLOWLY · SENT WITH LOVE ·
                    </textPath>
                  </text>
                </svg>
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-terra" fill="none" aria-hidden="true">
                  <path d="M12 20c0-6 3-10 8-12 0 6-3 10-8 12Z" fill="currentColor" />
                  <path d="M12 20c0-5-3-8-7-9 0 5 3 8 7 9Z" fill="currentColor" opacity="0.7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values marquee */}
      <Marquee items={VALUES} className="border-y border-moss/20 bg-moss py-4 text-cream/90" />

      {/* Featured collection */}
      <section className="section-pad">
        <div className="container-earth">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="the collection"
              title={
                <>
                  Small treasures,{' '}
                  <span className="italic text-terra">freshly made</span>
                </>
              }
              description="A rotating handful of pieces from the studio — each one cast, sanded and sealed by hand."
            />
            <Link
              to="/shop"
              className="link-squiggle group inline-flex shrink-0 items-center gap-2 pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-moss"
            >
              View all pieces
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onQuickView={setQuickView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ethos */}
      <section className="relative overflow-hidden bg-sand/60">
        <div className="container-earth grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="arch-frame aspect-[4/5] w-full shadow-soft">
              <img
                src="/images/products/cement/design-tray.jpg"
                alt="Hand-cast cement design tray"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-cream px-5 py-4 shadow-soft">
              <p className="font-script text-2xl text-terra">from our hands</p>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-bark-soft">
                to your home
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="our way"
              title={
                <>
                  A slower kind of <span className="italic text-terra">making</span>.
                </>
              }
              description="We keep the studio small on purpose. No factories, no rush — just cement under our nails, moulds on the table and pieces curing by the window."
            />

            <div className="mt-9 space-y-6">
              {ETHOS.map(({ icon: Icon, title, body }) => (
                <Reveal key={title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-moss shadow-soft">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="text-lg text-moss">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-bark-soft">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Link to="/about" className="btn btn-outline mt-9">
              Meet the studio
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-pad">
        <div className="container-earth">
          <SectionHeading
            align="center"
            eyebrow="kind words"
            title={
              <>
                Little things, <span className="italic text-terra">fondly kept</span>
              </>
            }
            description="Real notes from people who've welcomed an earthform piece into their home."
          />

          <div
            className={`mt-12 grid gap-5 ${
              reviews.length === 1
                ? 'mx-auto max-w-2xl'
                : reviews.length === 2
                  ? 'mx-auto max-w-4xl md:grid-cols-2'
                  : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {reviews.map((review) => (
              <Reveal key={review.name} className="h-full">
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="container-earth">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-moss px-6 py-16 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-sage/25 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-terra/25 blur-2xl" />

              <svg
                viewBox="0 0 120 180"
                className="pointer-events-none absolute -bottom-6 left-4 h-40 w-24 text-cream/10 sm:left-10"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M60 180c-6-46 2-82 30-116-2 46-12 82-30 116Z" />
                <path d="M60 180c4-42-10-72-40-92 4 42 14 72 40 92Z" />
              </svg>

              <div className="relative mx-auto max-w-2xl">
                <p className="font-script text-3xl text-butter">a little something for you</p>
                <h2 className="mt-3 text-balance font-display text-[clamp(2rem,4.5vw,3.3rem)] text-cream">
                  Bring a little character home.
                </h2>
                <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-cream/70">
                  New pieces leave the studio every few weeks — and they tend to find homes
                  quickly. Come wander the collection.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link to="/shop" className="btn btn-terra">
                    Browse the shop
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/contact"
                    className="btn border-cream/30 text-cream hover:bg-cream hover:text-moss"
                  >
                    Say hello
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </PageShell>
  )
}
