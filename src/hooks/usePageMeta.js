import { useEffect } from 'react'

const SITE_URL = 'https://earthform.vercel.app'

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

export default function usePageMeta({ title, description, noindex = false }) {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/'
    const url = `${SITE_URL}${path === '/' ? '/' : path}`

    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, follow' : 'index, follow')

    if (title) {
      document.title = title
      setMeta('meta[property="og:title"]', 'content', title)
      setMeta('meta[name="twitter:title"]', 'content', title)
    }

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
      setMeta('meta[property="og:description"]', 'content', description)
      setMeta('meta[name="twitter:description"]', 'content', description)
    }

    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:url"]', 'content', url)
  }, [title, description, noindex])
}
