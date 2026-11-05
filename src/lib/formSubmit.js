import { CONTACT } from '@data/site'

const ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'
const SERVICE_ID = 'service_cg0ekut'
const TEMPLATE_ID = 'template_wr2ypkd'
const PUBLIC_KEY = 'TwzOsvi8J7kp4IoqC'

export async function submitForm(payload) {
  if (payload._honey) return { success: 'true' }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          to_email: CONTACT.email,
          subject: payload._subject || 'New earthform website message',
          from_name: payload.name || 'earthform website',
          reply_to: payload._replyto || CONTACT.email,
          message: payload.message || 'No message provided.',
        },
      }),
      signal: controller.signal,
    })

    const text = await response.text()

    if (!response.ok) {
      throw new Error(text || 'The form could not be sent.')
    }

    return { success: 'true', message: text }
  } finally {
    clearTimeout(timeout)
  }
}
