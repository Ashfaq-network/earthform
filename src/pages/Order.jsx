import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  CreditCard,
  Mail,
  MessageCircle,
  Minus,
  Package,
  Plus,
  Send,
  Truck,
} from 'lucide-react'

import PageShell from '@components/ui/PageShell'
import Reveal from '@components/ui/Reveal'
import BotanicalDivider from '@components/ui/BotanicalDivider'
import { COLOURS } from '@components/ui/ColorSwatches'
import usePageMeta from '@hooks/usePageMeta'
import { products } from '@data/products'
import { CONTACT } from '@data/site'
import { submitForm } from '@/lib/formSubmit'

const INPUT_CLASS =
  'w-full rounded-2xl border border-sand-deep/70 bg-cream px-4 py-3 text-sm text-bark placeholder:text-bark-soft/55 transition-colors focus:border-moss focus:outline-none focus:ring-2 focus:ring-sage/30'

const INITIAL = {
  productId: '',
  colour: '',
  quantity: 1,
  name: '',
  phone: '',
  email: '',
  address: '',
  notes: '',
}

const CUSTOM = 'custom'
const CUSTOM_LABEL = 'Custom / not sure yet'

const PERKS = [
  { icon: Truck, label: 'Islandwide delivery' },
  { icon: Package, label: 'Gift wrap included' },
  { icon: CreditCard, label: 'Pay after confirmation' },
]

function FieldError({ id, children }) {
  if (!children) return null
  return (
    <p id={id} className="mt-1.5 text-xs text-terra-deep">
      {children}
    </p>
  )
}

function OrderSummary({ selectedProduct, isCustom, productName, form, subtotal }) {
  return (
    <div className="rounded-[2rem] border border-sand-deep/60 bg-cream/80 p-6 shadow-soft sm:p-8">
      <p className="eyebrow">your order</p>

      <div className="mt-5 overflow-hidden rounded-2xl bg-sand/40">
        {selectedProduct?.image ? (
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
        ) : isCustom ? (
          <img
            src="/images/custom-order.jpg"
            alt="Custom earthform pieces made to order"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
        ) : (
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 px-6 text-center text-bark-soft">
            <Package size={26} className="text-sage" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Choose a piece to see it here
            </p>
          </div>
        )}
      </div>

      <h2 className="mt-4 font-display text-2xl text-moss">
        {productName || 'Choose a piece'}
      </h2>
      {selectedProduct && (
        <p className="mt-1 text-sm text-bark-soft">
          {selectedProduct.category} · Rs. {selectedProduct.price}
        </p>
      )}
      {isCustom && (
        <p className="mt-1 text-sm leading-relaxed text-bark-soft">
          Tell us what you have in mind — we'll confirm the price with you.
        </p>
      )}

      <dl className="mt-5 space-y-2 border-t border-sand-deep/50 pt-4 text-sm">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-bark-soft">Colour</dt>
          <dd className="font-medium text-moss">{form.colour || '—'}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-bark-soft">Quantity</dt>
          <dd className="font-medium text-moss">{form.quantity}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 font-semibold text-moss">
          <dt>Subtotal</dt>
          <dd>{subtotal ? `Rs. ${subtotal}` : 'To confirm'}</dd>
        </div>
      </dl>

      <p className="mt-3 text-xs leading-relaxed text-bark-soft">
        Delivery is confirmed after we reply. This is an order request — nothing is charged now.
      </p>

      <div className="mt-5 rounded-2xl bg-sage-mist/60 p-5">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-moss">
          How it works
        </p>
        <ol className="mt-3 space-y-2.5 text-sm leading-relaxed text-bark-soft">
          <li>1. Send your order request.</li>
          <li>2. We confirm availability, delivery and payment.</li>
          <li>3. We make and send your piece.</li>
        </ol>
      </div>

      <Link
        to="/shop"
        className="link-squiggle mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-moss"
      >
        Browse all pieces
        <ArrowRight size={14} />
      </Link>
    </div>
  )
}

export default function Order() {
  usePageMeta({
    title: 'Place an Order — earthform',
    description:
      'Order handcrafted cement pieces from earthform. Choose a piece and colour, then send your order request — we confirm delivery and payment with you.',
  })

  const [searchParams] = useSearchParams()
  const productParam = searchParams.get('product') || ''
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')
  const [sentSummary, setSentSummary] = useState(null)

  useEffect(() => {
    if (productParam === CUSTOM || products.some((product) => product.id === productParam)) {
      setForm((current) => ({ ...current, productId: productParam }))
    }
  }, [productParam])

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === form.productId) ?? null,
    [form.productId],
  )
  const isCustom = form.productId === CUSTOM
  const productName = selectedProduct?.name || (isCustom ? CUSTOM_LABEL : '')
  const subtotal = selectedProduct ? selectedProduct.price * form.quantity : null

  const update = (field) => (event) => {
    const raw = event.target.value
    const value =
      field === 'quantity' ? Math.max(1, Math.min(20, Number(raw) || 1)) : raw

    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const setQuantity = (value) => {
    setForm((current) => ({
      ...current,
      quantity: Math.max(1, Math.min(20, value)),
    }))
    setErrors((current) => ({ ...current, quantity: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.productId) next.productId = 'Please choose a piece.'
    if (!form.colour) next.colour = 'Please choose a colour.'
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.phone.trim()) {
      next.phone = 'Please add a phone or WhatsApp number.'
    } else if (form.phone.replace(/\D/g, '').length < 7) {
      next.phone = 'That phone number looks too short.'
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'That email doesn’t look quite right.'
    }
    if (!form.address.trim()) next.address = 'Please add a delivery address.'
    return next
  }

  const buildMessage = () =>
    [
      'Hello earthform! I would like to place an order.',
      '',
      `Piece: ${productName || 'Not chosen yet'}`,
      `Colour: ${form.colour || 'Not chosen yet'}`,
      `Quantity: ${form.quantity}`,
      `Subtotal: ${subtotal ? `Rs. ${subtotal}` : 'To confirm'}`,
      '',
      `Name: ${form.name || '—'}`,
      `Phone/WhatsApp: ${form.phone || '—'}`,
      `Email: ${form.email || '—'}`,
      `Delivery address: ${form.address || '—'}`,
      `Notes: ${form.notes || '—'}`,
    ].join('\n')

  const whatsappUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(buildMessage())}`
  const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Order request — ${productName || 'earthform'}`,
  )}&body=${encodeURIComponent(buildMessage())}`

  const sendOnWhatsApp = () => {
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    if (!opened) window.location.href = whatsappUrl
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0 || status === 'sending') return

    setStatus('sending')

    const summary = {
      product: productName,
      colour: form.colour,
      quantity: form.quantity,
      subtotal: subtotal ? `Rs. ${subtotal}` : 'To confirm',
    }

    try {
      await submitForm({
        _subject: `New earthform order request — ${productName}`,
        _replyto: form.email.trim() || CONTACT.email,
        _honey: honeypot,
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || 'Not provided',
        product: summary.product,
        colour: summary.colour,
        quantity: summary.quantity,
        subtotal: summary.subtotal,
        address: form.address.trim(),
        notes: form.notes.trim() || '—',
        source: 'earthform website order form',
        message: buildMessage(),
      })
      setSentSummary(summary)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const resetOrder = () => {
    setForm(INITIAL)
    setErrors({})
    setHoneypot('')
    setSentSummary(null)
    setStatus('idle')
  }

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-sand-deep/50 bg-sand/50">
        <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-rose-soft/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-sage-mist/70 blur-3xl" />
        <div className="container-earth relative py-16 text-center sm:py-20">
          <span className="eyebrow justify-center">place an order</span>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance font-display text-[clamp(2.4rem,5.5vw,4rem)] text-moss">
            Let's make it <span className="script-accent text-terra">yours</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-bark-soft">
            Choose a piece, pick a colour, and send us your details. We'll confirm
            availability, delivery and payment by message — usually within two studio days.
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

      <section className="section-pad">
        <div className="container-earth grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <div className="rounded-[2rem] border border-sand-deep/60 bg-cream p-6 shadow-soft sm:p-9">
              {status === 'sent' && sentSummary ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-sage-mist text-moss">
                    <Check size={28} />
                  </span>
                  <h2 className="mt-6 font-display text-3xl text-moss">Order request sent.</h2>
                  <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-bark-soft">
                    We'll reply within two studio days to confirm availability, delivery and
                    payment. If you don't hear from us, message us on WhatsApp.
                  </p>

                  <div className="mt-6 w-full max-w-sm rounded-2xl bg-sand/40 p-5 text-left text-sm text-bark-soft">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-moss">
                      your request
                    </p>
                    <dl className="mt-3 space-y-2">
                      {[
                        ['Piece', sentSummary.product],
                        ['Colour', sentSummary.colour],
                        ['Quantity', sentSummary.quantity],
                        ['Subtotal', sentSummary.subtotal],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-baseline justify-between gap-4">
                          <dt>{label}</dt>
                          <dd className="text-right font-medium text-moss">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-6 flex w-full max-w-sm flex-col gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-primary w-full"
                    >
                      <MessageCircle size={16} />
                      Send on WhatsApp too
                    </a>
                    <button
                      type="button"
                      onClick={resetOrder}
                      className="btn btn-outline w-full"
                    >
                      Place another order
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h2 className="font-display text-[1.8rem] text-moss">Your order details</h2>
                    <p className="mt-1 text-sm text-bark-soft">
                      This is an order request — we'll confirm everything before anything is paid.
                    </p>
                  </div>

                  <input
                    type="text"
                    name="_honey"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="productId"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss"
                      >
                        Which piece?
                      </label>
                      <select
                        id="productId"
                        name="productId"
                        value={form.productId}
                        onChange={update('productId')}
                        aria-invalid={Boolean(errors.productId)}
                        aria-describedby={errors.productId ? 'productId-error' : undefined}
                        className={INPUT_CLASS}
                      >
                        <option value="">Choose a piece</option>
                        {products.map((product) => (
                          <option key={product.id} value={product.id}>
                            {product.name} — Rs. {product.price}
                          </option>
                        ))}
                        <option value={CUSTOM}>{CUSTOM_LABEL}</option>
                      </select>
                      <FieldError id="productId-error">{errors.productId}</FieldError>
                    </div>

                    <div className="sm:col-span-2">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss">
                        Colour
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {COLOURS.map(({ name, value }) => {
                          const active = form.colour === name
                          return (
                            <label
                              key={name}
                              className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                                active
                                  ? 'border-moss bg-sage-mist text-moss'
                                  : 'border-sand-deep/70 bg-cream text-bark-soft hover:border-moss/40'
                              }`}
                            >
                              <input
                                type="radio"
                                name="colour"
                                value={name}
                                checked={active}
                                onChange={update('colour')}
                                className="sr-only"
                              />
                              <span
                                className="h-4 w-4 rounded-full border border-moss/20"
                                style={{ backgroundColor: value }}
                                aria-hidden="true"
                              />
                              {name}
                            </label>
                          )
                        })}
                      </div>
                      <FieldError id="colour-error">{errors.colour}</FieldError>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss"
                      >
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
                      <FieldError id="name-error">{errors.name}</FieldError>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        placeholder="+94 7X XXX XXXX"
                        className={INPUT_CLASS}
                      />
                      <FieldError id="phone-error">{errors.phone}</FieldError>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss"
                      >
                        Email <span className="normal-case text-bark-soft/70">(optional)</span>
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
                      <FieldError id="email-error">{errors.email}</FieldError>
                    </div>

                    <div>
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss">
                        Quantity
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setQuantity(form.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sand-deep/70 text-moss transition-colors hover:border-moss hover:bg-sage-mist"
                        >
                          <Minus size={16} />
                        </button>
                        <input
                          id="quantity"
                          name="quantity"
                          type="number"
                          min="1"
                          max="20"
                          value={form.quantity}
                          onChange={update('quantity')}
                          className="h-11 w-16 rounded-2xl border border-sand-deep/70 bg-cream px-0 text-center text-sm text-bark focus:border-moss focus:outline-none focus:ring-2 focus:ring-sage/30"
                        />
                        <button
                          type="button"
                          onClick={() => setQuantity(form.quantity + 1)}
                          aria-label="Increase quantity"
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sand-deep/70 text-moss transition-colors hover:border-moss hover:bg-sage-mist"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss"
                      >
                        Delivery address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        rows={3}
                        autoComplete="street-address"
                        value={form.address}
                        onChange={update('address')}
                        aria-invalid={Boolean(errors.address)}
                        aria-describedby={errors.address ? 'address-error' : undefined}
                        placeholder="House / street, city, district, postal code"
                        className={`${INPUT_CLASS} resize-none`}
                      />
                      <FieldError id="address-error">{errors.address}</FieldError>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="notes"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-moss"
                      >
                        Notes <span className="normal-case text-bark-soft/70">(optional)</span>
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        value={form.notes}
                        onChange={update('notes')}
                        placeholder="Gift note, preferred delivery date, or anything else we should know."
                        className={`${INPUT_CLASS} resize-none`}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="rounded-2xl border border-terra/30 bg-terra/5 p-4 text-sm leading-relaxed text-terra-deep"
                    >
                      <p>
                        We couldn't send the order request just now. Please send it on WhatsApp
                        or email us directly.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={sendOnWhatsApp}
                          className="btn btn-primary !px-4 !py-2.5 text-xs"
                        >
                          <MessageCircle size={15} />
                          WhatsApp
                        </button>
                        <a
                          href={mailtoUrl}
                          className="btn btn-outline !px-4 !py-2.5 text-xs"
                        >
                          <Mail size={15} />
                          Email
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === 'sending' ? (
                        'Sending order request…'
                      ) : (
                        <>
                          Send order request
                          <Send size={16} />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={sendOnWhatsApp}
                      className="btn btn-outline w-full"
                    >
                      <MessageCircle size={16} />
                      Order on WhatsApp instead
                    </button>
                    <p className="text-center text-xs leading-relaxed text-bark-soft">
                      We'll only use these details to arrange your order.
                    </p>
                  </div>

                  <p className="text-center text-xs text-bark-soft">
                    Prefer to ask a question first?{' '}
                    <Link to="/contact" className="link-squiggle font-semibold text-moss">
                      Say hello
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
            <OrderSummary
              selectedProduct={selectedProduct}
              isCustom={isCustom}
              productName={productName}
              form={form}
              subtotal={subtotal}
            />
          </Reveal>
        </div>

        <BotanicalDivider className="container-earth mt-16" />
      </section>
    </PageShell>
  )
}
