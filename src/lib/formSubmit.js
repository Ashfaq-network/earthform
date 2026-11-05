import { CONTACT } from '@data/site'

const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT.email}`

export async function submitForm(payload) {
  if (payload._honey) return { success: 'true' }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _template: 'table',
        _captcha: 'false',
        ...payload,
      }),
      signal: controller.signal,
    })

    let data = {}
    try {
      data = await response.json()
    } catch {
      data = {}
    }

    if (!response.ok || data.success === false || data.success === 'false') {
      throw new Error(data.message || 'The form could not be sent.')
    }

    return data
  } finally {
    clearTimeout(timeout)
  }
}
