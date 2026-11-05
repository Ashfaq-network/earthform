import { Link } from 'react-router-dom'
import { Mail, Instagram, Music2, Phone, ArrowRight, MessageCircle } from 'lucide-react'

import PageShell from '@components/ui/PageShell'
import Reveal from '@components/ui/Reveal'
import usePageMeta from '@hooks/usePageMeta'
import { CONTACT } from '@data/site'

const FAQS = [
  {
    q: 'How do I place an order?',
    a: 'Choose a piece in the shop and select “Order this piece”, or use the order form. Tell us your colour, quantity and delivery address — we will confirm availability, delivery and payment with you.',
  },
  {
    q: 'Do you take custom orders?',
    a: 'Sometimes — it depends on the season and the piece. Tell us what you have in mind and we will write back honestly.',
  },
  {
    q: 'What colours can I choose from?',
    a: 'Every piece is available in black, white, pink, green, yellow and lavender. If you have another colour in mind, email or DM us — we love a custom request.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Pieces leave the studio within 3–5 days, and islandwide delivery usually takes another 2–4 days.',
  },
]

export default function Contact() {
  usePageMeta({
    title: 'Say Hello — earthform',
    description:
      'Questions about a piece or a custom order? Write to the earthform studio — we read every message ourselves.',
  })

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-sand-deep/50 bg-sand/40">
        <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-rose-soft/60 blur-3xl" />
        <div className="container-earth relative py-14 text-center sm:py-20">
          <span className="eyebrow justify-center">say hello</span>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance font-display text-[clamp(2.4rem,5.5vw,4rem)] text-moss">
            We'd love to hear from <span className="script-accent text-terra">you</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-bark-soft">
            Questions about a piece, a custom order, or just a hello from your corner of the
            world — it all lands in the same little inbox.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-earth grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-16">
          {/* Info */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-moss p-7 text-cream shadow-soft">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sage/25 blur-2xl" />
                <p className="font-script text-2xl text-butter">write to us</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-2 inline-flex max-w-full items-center gap-2 font-display text-lg break-all underline-offset-4 hover:underline sm:text-xl"
                >
                  <Mail size={18} className="shrink-0" />
                  <span className="min-w-0 break-all">{CONTACT.email}</span>
                </a>
                <p className="mt-2 flex items-center gap-2 text-sm text-cream/75">
                  <Phone size={16} className="shrink-0 text-cream/60" />
                  <a href={CONTACT.phoneHref} className="transition-colors hover:text-cream">
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  <a
                    href={CONTACT.instagram.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2.5 text-xs font-semibold tracking-wide text-cream/85 transition-colors hover:bg-cream hover:text-moss-deep"
                  >
                    <Instagram size={15} />
                    {CONTACT.instagram.handle}
                  </a>
                  <a
                    href={CONTACT.tiktok.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2.5 text-xs font-semibold tracking-wide text-cream/85 transition-colors hover:bg-cream hover:text-moss-deep"
                  >
                    <Music2 size={15} />
                    {CONTACT.tiktok.handle}
                  </a>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2.5 text-xs font-semibold tracking-wide text-cream/85 transition-colors hover:bg-cream hover:text-moss-deep"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>
                <div className="mt-6 border-t border-cream/15 pt-5">
                  <p className="text-sm leading-relaxed text-cream/70">
                    Ready to choose a piece? Send an order request and we'll confirm the rest
                    with you.
                  </p>
                  <Link
                    to="/order"
                    className="btn btn-primary mt-4 w-full !bg-cream !text-moss-deep hover:!bg-butter"
                  >
                    Start an order
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal delay={0.1} className="h-full">
            <div className="arch-frame h-64 w-full shadow-soft lg:h-full lg:min-h-[30rem]">
              <img
                src="/images/products/cement/cloud-shape.jpg"
                alt="Hand-cast cement cloud shape"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 sm:pb-24">
        <div className="container-earth">
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <h2 className="text-center font-display text-[clamp(1.8rem,4vw,2.6rem)] text-moss">
                A few quick <span className="italic text-terra">answers</span>
              </h2>
              <div className="mt-8 space-y-3">
                {FAQS.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-sand-deep/60 bg-cream px-5 py-4 shadow-soft"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-moss marker:content-none">
                      {item.q}
                      <ArrowRight
                        size={16}
                        className="shrink-0 text-bark-soft transition-transform duration-300 group-open:rotate-90"
                      />
                    </summary>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-bark-soft">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
