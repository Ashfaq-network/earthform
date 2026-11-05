import { Link } from 'react-router-dom'
import { Instagram, Music2, Mail, Phone, MessageCircle } from 'lucide-react'
import Logo from '@components/ui/Logo'
import useSameRouteScroll from '@hooks/useSameRouteScroll'
import { CONTACT } from '@data/site'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'How to order', to: '/order' },
  { label: 'Our story', to: '/about' },
  { label: 'Say hello', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollIfSame = useSameRouteScroll()

  return (
    <footer className="relative overflow-hidden bg-moss-deep text-cream">
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] text-cream/[0.05]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M300 400c0-120 60-200 100-240-10 120-60 200-100 240Z" />
        <path d="M300 400c0-100-50-170-110-200 10 100 50 170 110 200Z" />
        <path d="M300 400c-20-80-20-150 0-210" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.5" />
      </svg>

      <div className="container-earth relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <Logo light onClick={() => scrollIfSame('/')} />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-cream/65">
              A small studio of handcrafted cement pieces — cast, sanded and sealed to bring
              character and quiet elegance home. Made slowly, sent with love.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  icon: Instagram,
                  label: `Instagram ${CONTACT.instagram.handle}`,
                  href: CONTACT.instagram.url,
                },
                {
                  icon: Music2,
                  label: `TikTok ${CONTACT.tiktok.handle}`,
                  href: CONTACT.tiktok.url,
                },
                {
                  icon: MessageCircle,
                  label: `WhatsApp ${CONTACT.phoneDisplay}`,
                  href: CONTACT.whatsapp,
                },
                {
                  icon: Mail,
                  label: `Email ${CONTACT.email}`,
                  href: `mailto:${CONTACT.email}`,
                },
                {
                  icon: Phone,
                  label: `Call ${CONTACT.phoneDisplay}`,
                  href: CONTACT.phoneHref,
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream/60 hover:bg-cream hover:text-moss-deep"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cream/45">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => scrollIfSame(link.to)}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cream/45">
              Little things
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li>Islandwide delivery</li>
              <li>Gift wrapping included</li>
              <li>Made in small batches</li>
              <li>Plastic-free packaging</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cream/45">
              The studio
            </h3>
            <p className="mt-5 font-script text-2xl text-butter">come say hello</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-2 block text-sm text-cream/75 transition-colors hover:text-cream"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="mt-1 block text-sm text-cream/75 transition-colors hover:text-cream"
            >
              {CONTACT.phoneDisplay}
            </a>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-cream/55">
              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-cream"
              >
                Instagram {CONTACT.instagram.handle}
              </a>
              <a
                href={CONTACT.tiktok.url}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-cream"
              >
                TikTok {CONTACT.tiktok.handle}
              </a>
            </div>
            <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cream/40">
              Founded by Aneesha Shahnaz Nassar
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} earthform. All the little things reserved.</p>
          <p>Handmade in small batches · islandwide delivery</p>
        </div>
      </div>
    </footer>
  )
}
