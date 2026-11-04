import { Link } from 'react-router-dom'
import { ArrowRight, Sprout, Sun, Heart } from 'lucide-react'

import PageShell from '@components/ui/PageShell'
import SectionHeading from '@components/ui/SectionHeading'
import Reveal from '@components/ui/Reveal'
import BotanicalDivider from '@components/ui/BotanicalDivider'
import usePageMeta from '@hooks/usePageMeta'

const VALUES = [
  {
    icon: Sprout,
    title: 'Mixed by hand',
    body: 'Our mineral cement is measured in small batches with natural pigments, so every pour has its own quiet tone.',
  },
  {
    icon: Sun,
    title: 'Sculpted, then finished',
    body: 'From ribboned bows to cloud-soft trays, every form is sanded and sealed by hand.',
  },
  {
    icon: Heart,
    title: 'Made to be kept',
    body: 'We make objects meant to outlive trends — pieces you keep on the shelf and reach for often.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Mix',
    body: 'Mineral cement, natural pigments and water are measured by hand in small, careful batches.',
  },
  {
    number: '02',
    title: 'Cast',
    body: 'Each piece is poured into a mould, left to cure, then sanded until the edges feel soft.',
  },
  {
    number: '03',
    title: 'Seal & send',
    body: 'A matte sealer, a sheet of recycled paper and a note written by whoever made it.',
  },
]

export default function About() {
  usePageMeta({
    title: 'Our Story — earthform',
    description:
      'Meet Aneesha Shahnaz Nassar, founder of earthform — hand-cast cement pieces, sculpted and finished slowly in small batches.',
  })

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-sage-mist/70 blur-3xl" />
        <div className="container-earth grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="max-w-xl">
            <span className="eyebrow">our story</span>
            <h1 className="mt-5 text-balance font-display text-[clamp(2.6rem,5.6vw,4.3rem)] text-moss">
              A studio built on small, <span className="script-accent text-terra">slow</span> things.
            </h1>
            <p className="mt-6 text-pretty text-[1.02rem] leading-relaxed text-bark-soft">
              earthform began on a kitchen table with a bag of cement, a few moulds and a
              stubborn wish to make fewer, better things. Today it's still a small,
              family-hearted studio — pouring in small batches and finishing every curve by
              hand.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-bark-soft">
              We believe a home is made of small objects with stories in them. A tray for your
              keys. A little house on a windowsill. A candle holder that makes an ordinary
              evening feel considered. We make those, slowly, and send them out into the world.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/shop" className="btn btn-primary">
                See what's in the studio
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Say hello
              </Link>
            </div>
          </div>

          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="arch-frame aspect-[4/5] w-full shadow-lift">
              <img
                src="/images/products/cement/flower-tray.jpg"
                alt="Hand-cast cement flower tray"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="arch-frame absolute -bottom-8 -left-4 h-40 w-32 border-4 border-bone shadow-soft sm:-left-8 sm:h-48 sm:w-36">
              <img
                src="/images/products/cement/knotted-pot.jpg"
                alt="Hand-cast cement knotted pot"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="absolute -right-2 top-6 rotate-6 font-script text-3xl text-moss/80 sm:right-2">
              from 16
            </p>
          </Reveal>
        </div>
      </section>

      <BotanicalDivider className="container-earth" />

      {/* Founder */}
      <section className="section-pad relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose-soft/40 blur-3xl" />
        <div className="container-earth relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="arch-frame aspect-[4/5] w-full bg-sage-mist/80 shadow-soft">
              <div className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden px-6 text-center">
                <svg
                  viewBox="0 0 80 120"
                  className="h-24 w-20 text-sage"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M40 118c-4-32 0-58 18-80"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M40 118c2-28-8-48-26-60"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="58"
                    cy="38"
                    rx="14"
                    ry="7"
                    transform="rotate(-42 58 38)"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <ellipse
                    cx="20"
                    cy="62"
                    rx="13"
                    ry="6.5"
                    transform="rotate(36 20 62)"
                    fill="currentColor"
                    opacity="0.65"
                  />
                  <ellipse
                    cx="46"
                    cy="18"
                    rx="11"
                    ry="6"
                    transform="rotate(-12 46 18)"
                    fill="currentColor"
                    opacity="0.85"
                  />
                </svg>
                <span className="font-script text-6xl leading-none text-moss">Aneesha</span>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-moss/65">
                  founder · earthform
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-cream px-5 py-4 shadow-soft">
              <p className="font-script text-2xl text-terra">since 16</p>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-bark-soft">
                a dream & determination
              </p>
            </div>
          </Reveal>

          <div>
            <span className="eyebrow">meet the founder</span>
            <h2 className="mt-4 text-balance font-display text-[clamp(2rem,4.5vw,3.2rem)] text-moss">
              Aneesha Shahnaz Nassar
            </h2>
            <p className="mt-2 font-script text-3xl text-terra">founder of Earthform</p>

            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-bark-soft">
              <p>
                I'm Aneesha Shahnaz Nassar, the founder of Earthform. I started this journey at
                16, right after my O-Level examinations, with nothing but a dream and
                determination.
              </p>
              <p>
                My parents believed in me and invested in my early supplies — their support
                gave me the foundation I needed. With my very first order, I reinvested every
                rupee earned back into the business, growing it step by step.
              </p>
              <p>
                Today, at 18, Earthform stands as proof that with family behind you and passion
                in your heart, even the smallest idea can grow into something beautiful.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-terra/50" />
              <div>
                <p className="font-script text-2xl text-moss">— Aneesha</p>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-bark-soft">
                  Aneesha Shahnaz Nassar · Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-sand/50">
        <div className="container-earth">
          <SectionHeading
            align="center"
            eyebrow="what we believe"
            title={
              <>
                Fewer things, made <span className="italic text-terra">well</span>.
              </>
            }
            description="Three little promises we keep with every piece that leaves the studio."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-sand-deep/60 bg-cream p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-sage-mist text-moss">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.35rem] text-moss">{title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-bark-soft">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="container-earth grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-sm">
            <div className="arch-frame aspect-[4/5] w-full shadow-soft">
              <img
                src="/images/products/cement/bow-candle-holder.jpg"
                alt="Hand-cast cement bow candle holder"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="how it's made"
              title={
                <>
                  From the ground to your <span className="italic text-terra">hands</span>.
                </>
              }
              description="No two batches look the same, and that's the point. Here's the little journey each piece takes."
            />

            <div className="mt-9 space-y-0">
              {STEPS.map((step, index) => (
                <Reveal
                  key={step.number}
                  className={`flex gap-5 py-6 ${
                    index !== STEPS.length - 1 ? 'border-b border-sand-deep/60' : ''
                  }`}
                >
                  <span className="font-display text-2xl text-sage">{step.number}</span>
                  <div>
                    <h3 className="text-xl text-moss">{step.title}</h3>
                    <p className="mt-1 text-pretty text-sm leading-relaxed text-bark-soft">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="pb-20 sm:pb-24">
        <div className="container-earth">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-moss px-6 py-16 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-sage/25 blur-2xl" />
              <svg
                viewBox="0 0 400 40"
                className="mx-auto h-8 w-48 text-cream/25"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 20c40-14 70 14 110 0s70-14 110 0 60 14 96 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <blockquote className="mx-auto mt-6 max-w-2xl text-balance font-display text-[clamp(1.5rem,3.4vw,2.4rem)] italic leading-snug text-cream">
                “We aren't trying to make more. We're trying to make the kind of thing you
                keep for thirty years.”
              </blockquote>
              <p className="mt-6 font-script text-2xl text-butter">— the earthform studio</p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
