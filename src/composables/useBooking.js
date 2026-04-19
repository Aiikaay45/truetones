import { ref } from 'vue'

// Module-level singleton — shared across all component instances
const pendingService = ref('')

export function useBooking() {
  function selectAndScroll(serviceTitle) {
    pendingService.value = serviceTitle
    const el = document.getElementById('booking-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return { pendingService, selectAndScroll }
}
