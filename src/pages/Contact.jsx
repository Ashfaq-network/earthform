import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Instagram, Music2, Phone, Send, Check, ArrowRight } from 'lucide-react'

import PageShell from '@components/ui/PageShell'
import Reveal from '@components/ui/Reveal'
import usePageMeta from '@hooks/usePageMeta'
import { CONTACT } from '@data/site'

const INPUT_CLASS =
  'w-full rounded-2xl border border-sand-deep/70 bg-cream px-4 py-3 text-sm text-bark placeholder:text-bark-soft/55 transition-colors focus:border-moss focus:outline-none focus:ring-2 focus:ring-sage/30'

const INITIAL = { name: '', email: '', subject: 'A question', message: '' }

const FAQS = [
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
      'Questions about a piece or a custom order? Write to the earthform studio — we read every note ourselves.',
  })

  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.email.trim()) {
      next.email = 'We need an email to write back.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'That email doesn’t look quite right.'
    }
    if (!form.message.trim()) next.message = 'Add a little note before sending.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setSent(true)
    setForm(INITIAL)
  }

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
        <div className="container-earth grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Info */}
          <div className="space-y-5">
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
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="arch-frame h-56 w-full shadow-soft">
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

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-sand-deep/60 bg-cream p-6 shadow-soft sm:p-9">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-sage-mist text-moss">
                      <Check size={28} />
                    </span>
                    <h2 className="mt-6 font-display text-3xl text-moss">Your note is on its way.</h2>
                    <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-bark-soft">
                      Thank you for writing. We read every message ourselves and usually reply
                      within two studio days — often with a little cement dust on our hands.
                    </p>
                    <p className="mt-4 font-script text-2xl text-terra">talk soon</p>
                    <button
                      type="button"
                      className="btn btn-outline mt-7"
                      onClick={() => setSent(false)}
                    >
                      Send another note
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div>
                      <h2 className="font-display text-[1.7rem] text-moss">Send a little note</h2>
                      <p className="mt-1 text-sm text-bark-soft">
                        We'll write back from the studio, usually within two days.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss">
                          Your name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={update('name')}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          placeholder="Clover Meadow"
                          className={INPUT_CLASS}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-xs text-terra-deep">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={update('email')}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          placeholder="you@somewhere.com"
                          className={INPUT_CLASS}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-xs text-terra-deep">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss">
                        What's it about?
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={update('subject')}
                        className={INPUT_CLASS}
                      >
                        <option>A question</option>
                        <option>A custom order</option>
                        <option>Wholesale</option>
                        <option>Just saying hi</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss">
                        Your note
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        placeholder="Tell us a little about what you're dreaming of…"
                        className={`${INPUT_CLASS} resize-none`}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-xs text-terra-deep">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary w-full sm:w-auto">
                      Send your note
                      <Send size={15} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
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
