import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'

import Home from '@pages/Home'
import Shop from '@pages/Shop'
import About from '@pages/About'
import Contact from '@pages/Contact'
import NotFound from '@pages/NotFound'

gsap.registerPlugin(ScrollTrigger)

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
  }, [pathname])

  return null
}

function LenisScrollTrigger() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return
    const unsubscribe = lenis.on('scroll', ScrollTrigger.update)
    ScrollTrigger.refresh()
    return () => unsubscribe()
  }, [lenis])

  return null
}

function StoreLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-moss focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      <BrowserRouter>
        <LenisScrollTrigger />
        <ScrollToTop />
        <Routes>
          <Route
            path="*"
            element={
              <StoreLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </StoreLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  )
}
