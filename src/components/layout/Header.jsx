import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Instagram, Music2 } from 'lucide-react'
import Logo from '@components/ui/Logo'
import useSameRouteScroll from '@hooks/useSameRouteScroll'
import { CONTACT } from '@data/site'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const scrollIfSame = useSameRouteScroll()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="bg-moss px-4 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-cream/90 sm:text-[0.68rem]">
        Islandwide delivery &nbsp;·&nbsp; handmade in small batches
      </div>

      <header className="sticky top-0 z-50 border-b border-sand-deep/50 bg-bone/85 backdrop-blur-md">
        <div className="container-earth flex h-[70px] items-center justify-between gap-4">
          <Logo
            onClick={() => {
              setOpen(false)
              scrollIfSame('/')
            }}
          />

          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => scrollIfSame(item.to)}
                className={({ isActive }) =>
                  `text-[0.74rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive ? 'text-moss' : 'text-bark-soft hover:text-moss'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="link-squiggle" data-active={isActive}>
                    {item.label}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={CONTACT.instagram.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`earthform on Instagram (${CONTACT.instagram.handle})`}
              className="grid h-9 w-9 place-items-center rounded-full text-moss transition-colors hover:bg-sage-mist"
            >
              <Instagram size={17} />
            </a>
            <a
              href={CONTACT.tiktok.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`earthform on TikTok (${CONTACT.tiktok.handle})`}
              className="grid h-9 w-9 place-items-center rounded-full text-moss transition-colors hover:bg-sage-mist"
            >
              <Music2 size={17} />
            </a>
            <Link
              to="/order"
              onClick={() => scrollIfSame('/order')}
              className="btn btn-primary !px-6 !py-3 text-[0.68rem]"
            >
              Start an order
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-sand-deep/70 text-moss md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-sand-deep/50 bg-cream md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="container-earth flex flex-col gap-1 py-4">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => {
                      setOpen(false)
                      scrollIfSame(item.to)
                    }}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 font-display text-xl transition-colors ${
                        isActive ? 'bg-sage-mist/70 text-moss' : 'text-bark hover:bg-sage-mist/40'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-3 flex items-center gap-3 px-4 pb-2">
                  <a
                    href={CONTACT.instagram.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`earthform on Instagram (${CONTACT.instagram.handle})`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-sage-mist text-moss"
                  >
                    <Instagram size={17} />
                  </a>
                  <a
                    href={CONTACT.tiktok.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`earthform on TikTok (${CONTACT.tiktok.handle})`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-sage-mist text-moss"
                  >
                    <Music2 size={17} />
                  </a>
                  <Link
                    to="/order"
                    onClick={() => {
                      setOpen(false)
                      scrollIfSame('/order')
                    }}
                    className="btn btn-primary flex-1"
                  >
                    Start an order
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
