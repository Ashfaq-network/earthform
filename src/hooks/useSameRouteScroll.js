import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

export default function useSameRouteScroll() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  return (to) => {
    if (pathname !== to) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (lenis) {
      lenis.scrollTo(0, { immediate: reduced, force: true })
    } else {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    }
  }
}
