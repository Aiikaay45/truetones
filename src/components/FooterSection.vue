<template>
  <footer class="footer" role="contentinfo">

    <div class="footer__top">

      <!-- Brand -->
      <div class="footer__brand">
        <p class="footer__brand-name">True Tones</p>
        <p class="footer__brand-sub">by Dr Oghosa</p>
        <p class="footer__desc">
          Your journey to healthy, clear skin starts here. Personalised,
          evidence-based skin therapy for every tone and type.
        </p>
      </div>

      <!-- Services nav -->
      <nav class="footer__col" aria-label="Services footer links">
        <h4>Services</h4>
        <a href="#services">Acne / Pimples / Breakouts</a>
        <a href="#services">Hyperpigmentation / Dark Spots</a>
        <a href="#services">Uneven Skin Tone / Dull Skin</a>
        <a href="#services">Sensitive Skin / Barrier Repair</a>
      </nav>

      <!-- Quick links -->
      <nav class="footer__col" aria-label="Quick links">
        <h4>Quick Links</h4>
        <a :href="waLink" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        <a href="mailto:talk.to.dr.oghosa@gmail.com">Email Dr Oghosa</a>
        <a href="#about">About Dr Oghosa</a>
        <a href="#booking-form">Book a Consultation</a>
      </nav>

    </div>

    <div class="footer__bottom">
      <span>© {{ year }} True Tones by Dr Oghosa. All rights reserved.</span>
      <button class="footer__terms-btn" @click="showTerms = true">Terms &amp; Conditions</button>
      <span>Built with care for <a href="#home">clear skin</a></span>
    </div>

  </footer>

  <!-- Terms & Conditions Modal -->
  <Teleport to="body">
    <Transition name="terms-fade">
      <div
        v-if="showTerms"
        class="terms-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-heading"
        @click.self="showTerms = false"
      >
        <div class="terms-modal">

          <div class="terms-modal__header">
            <div>
              <p class="terms-modal__tag">True Tones by Dr Oghosa</p>
              <h2 id="terms-heading" class="terms-modal__title">Terms &amp; Conditions</h2>
            </div>
            <button class="terms-modal__close" @click="showTerms = false" aria-label="Close terms">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14"/>
              </svg>
            </button>
          </div>

          <div class="terms-modal__body">
            <div
              v-for="(term, i) in terms"
              :key="term.title"
              class="terms-item"
            >
              <span class="terms-item__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
              <div>
                <h3 class="terms-item__title">{{ term.title }}</h3>
                <p class="terms-item__body">{{ term.body }}</p>
              </div>
            </div>
          </div>

          <div class="terms-modal__footer">
            By booking a consultation, you agree to these terms.
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useWhatsApp } from '@/composables/useWhatsApp'

const { directLink } = useWhatsApp()
const waLink         = directLink("Hello, Dr Oghosa\nI'd like to book a skincare consultation")
const year           = new Date().getFullYear()
const showTerms      = ref(false)

const terms = [
  {
    title: 'Single Client Policy',
    body:  'Each consultation booking covers one client only. Services and advice provided are personalised and cannot be transferred or shared.'
  },
  {
    title: 'Payment Policy',
    body:  'All consultation fees are non-refundable once payment has been made.'
  },
  {
    title: 'Consultation Validity',
    body:  'Your consultation period begins from the day payment is confirmed, not the day of booking or scheduling. Any follow-up timelines will be calculated from this date.'
  },
  {
    title: 'Scope of Service',
    body:  'Consultations are strictly for skincare assessment and management advice. They do not replace in-person medical emergencies or urgent dermatological care.'
  },
  {
    title: 'Photographs Requirement',
    body:  'For accurate assessment and progress tracking, clients are required to submit clear, unedited photographs of the affected skin areas prior to consultation. Images must be taken in natural lighting without filters or editing. This is essential for proper evaluation and tracking of progress over time.'
  },
  {
    title: 'Consultation Fees & Products',
    body:  'Consultation fees cover professional assessment and personalised skincare advice only. Recommended skincare products are not included in the consultation fee.'
  }
]

function onKeydown(e) {
  if (e.key === 'Escape') showTerms.value = false
}

watch(showTerms, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
  if (val) document.addEventListener('keydown', onKeydown)
  else     document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped lang="scss">
.footer {
  background: var(--dark);
  padding: 64px 7% 32px;
  color: rgba(255, 255, 255, 0.45);
}

.footer__top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 64px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 32px;
}

/* Brand */
.footer__brand-name {
  font-family: var(--font-base);
  font-size: 30px;
  font-weight: 500;
  color: var(--white);
  letter-spacing: 0.02em;
  margin-bottom: 2px;
}

.footer__brand-sub {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 20px;
}

.footer__desc {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.38);
  max-width: 300px;
}

/* Columns */
.footer__col {
  h4 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.28);
    margin-bottom: 18px;
  }

  a {
    display: block;
    text-decoration: none;
    font-size: 16px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 12px;
    transition: color 0.2s;

    &:hover { color: var(--terracotta-pale); }
  }
}

/* Bottom bar */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.22);

  a {
    color: var(--terracotta);
    text-decoration: none;

    &:hover { color: var(--terracotta-pale); }
  }
}

.footer__terms-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-base);
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  transition: color 0.2s;

  &:hover { color: var(--terracotta-pale); }
}

@media (max-width: 1024px) {
  .footer__top { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .footer__top    { grid-template-columns: 1fr; gap: 36px; }
  .footer__bottom { flex-direction: column; gap: 14px; text-align: center; }
}
</style>

<!-- Modal styles are NOT scoped — teleported content lives outside this component's DOM -->
<style lang="scss">
.terms-overlay {
  position: fixed;
  inset: 0;
  background: rgba(20, 18, 16, 0.75);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.terms-modal {
  background: var(--cream);
  width: 100%;
  max-width: 660px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    padding: 36px 40px 28px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background: var(--cream);
    position: sticky;
    top: 0;
    flex-shrink: 0;
  }

  &__tag {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 6px;
  }

  &__title {
    font-family: var(--font-base);
    font-size: 26px;
    font-weight: 500;
    color: var(--dark);
    line-height: 1.2;
  }

  &__close {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--dark);
    transition: background 0.2s, border-color 0.2s;

    svg { width: 14px; height: 14px; }

    &:hover {
      background: var(--dark);
      border-color: var(--dark);
      color: var(--white);
    }
  }

  &__body {
    overflow-y: auto;
    padding: 8px 40px 8px;
    flex: 1;
  }

  &__footer {
    padding: 20px 40px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    background: var(--cream);
    flex-shrink: 0;
  }
}

.terms-item {
  display: flex;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &:last-child { border-bottom: none; }

  &__num {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--terracotta);
    flex-shrink: 0;
    padding-top: 3px;
    min-width: 24px;
  }

  &__title {
    font-family: var(--font-base);
    font-size: 17px;
    font-weight: 500;
    color: var(--dark);
    margin-bottom: 8px;
    line-height: 1.3;
  }

  &__body {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.75;
    color: var(--mid);
  }
}

/* Modal enter/leave transition */
.terms-fade-enter-active,
.terms-fade-leave-active {
  transition: opacity 0.2s ease;

  .terms-modal {
    transition: transform 0.25s ease, opacity 0.2s ease;
  }
}

.terms-fade-enter-from,
.terms-fade-leave-to {
  opacity: 0;

  .terms-modal {
    transform: translateY(16px);
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .terms-overlay { padding: 0; align-items: flex-end; }

  .terms-modal {
    max-height: 92vh;
    border-radius: 12px 12px 0 0;

    &__header { padding: 28px 24px 20px; }
    &__body   { padding: 0 24px; }
    &__footer { padding: 16px 24px; }
  }
}
</style>
