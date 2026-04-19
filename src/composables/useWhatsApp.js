// composables/useWhatsApp.js
// ─────────────────────────────────────────────────────────────────────────────
// Centralises all WhatsApp-related logic.
// Builds a pre-filled message from form data and opens wa.me link.

import { reactive } from 'vue'

const WA_NUMBER = '2348073601873' // international format, no +

export const SERVICE_CATALOGUE = [
  { title: 'Initial Consultation',          price: 15000, duration: 'for 2 months' },
  { title: 'Follow-Up Consultation',        price: 10000, duration: 'for 2 months' },
  { title: 'One-Off Skin & Routine Review', price: 7000,  duration: null           }
]

export function useWhatsApp() {
  const form = reactive({
    firstName: '',
    lastName:  '',
    phone:     '',
    service:   '',
    message:   ''
  })

  const services = SERVICE_CATALOGUE.map(s => s.title)

  function buildMessage() {
    const name = [form.firstName, form.lastName].filter(Boolean).join(' ') || 'A new client'
    const svc  = form.service || 'Not specified'
    const msg  = form.message || 'No additional notes.'
    const ph   = form.phone   || 'Not provided'
    const plan = SERVICE_CATALOGUE.find(s => s.title === form.service)
    const fee  = plan
      ? `₦${plan.price.toLocaleString()}${plan.duration ? ' ' + plan.duration : ''}`
      : 'Not specified'

    return (
      `Hello Dr Oghosa 👋\n\n` +
      `I'd like to book a consultation at True Tones.\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${ph}\n` +
      `*Service:* ${svc}\n` +
      `*Fee:* ${fee}\n` +
      `*Skin Concerns:* ${msg}\n\n` +
      `Looking forward to starting my clear skin journey! ✨`
    )
  }

  function openWhatsApp() {
    const text = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  /** Direct WhatsApp link (no form — used in nav / hero CTAs) */
  function directLink(text) {
    const base = `https://wa.me/${WA_NUMBER}`
    return text ? `${base}?text=${encodeURIComponent(text)}` : base
  }

  return { form, services, openWhatsApp, directLink }
}
