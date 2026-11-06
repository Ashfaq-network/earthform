import { useEffect } from 'react'
import { useLenis } from 'lenis/react'

let locks = 0

export default function useScrollLock(locked) {
  const lenis = useLenis()

  useEffect(() => {
    if (!locked) return

    locks += 1
    document.body.style.overflow = 'hidden'
    lenis?.stop()

    return () => {
      locks = Math.max(0, locks - 1)
      if (locks === 0) {
        document.body.style.overflow = ''
        lenis?.start()
      }
    }
  }, [locked, lenis])
}
