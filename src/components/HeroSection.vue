<template>
  <section id="home" class="hero" aria-label="Hero — True Tones by Dr Oghosa">

    <!-- Left content -->
    <div ref="heroLeft" class="hero__left">
      <p class="hero__eyebrow fade-up">Evidence-Based Skincare, Tailored With Intention</p>

      <h1 class="hero__headline fade-up">
        Say hello to <em>clear, healthy skin</em> — expertly guided
      </h1>

      <p class="hero__body fade-up">
        Experience expert skincare guidance rooted in science and care. Dr Oghosa combines dermatologist-approved protocols with a personalised approach because your skin deserves more than guessworks.
      </p>

      <div class="hero__btns fade-up">
        <a href="#packages" class="btn-primary" @click.prevent="scrollToPackages">
          Book a Consultation
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a href="#services" class="btn-ghost">Our Services</a>
      </div>
    </div>

    <!-- Right image -->
    <div class="hero__right" aria-hidden="true">
      <picture>
        <source srcset="/images/hero_image.webp" type="image/webp" />
        <img
          src="/images/hero_image.jpeg"
          alt="Dr Oghosa — True Tones Skin Therapist"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <div class="hero__overlay" aria-hidden="true" />

      <!-- Floating badge -->
      <div class="hero__badge" aria-label="500 plus happy clients">
        <span class="hero__badge-num">500<sup>+</sup></span>
        <span class="hero__badge-label">Happy clients &amp; clear skin journeys</span>
      </div>
    </div>

    <!-- Decorative blob -->
    <div class="hero__blob" aria-hidden="true" />

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useWhatsApp }        from '@/composables/useWhatsApp'

const { observe } = useScrollAnimation()
const { directLink } = useWhatsApp()
const waLink    = directLink()
const heroLeft  = ref(null)

onMounted(() => observe(heroLeft.value))

function scrollToPackages() {
  const el = document.getElementById('packages')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped lang="scss">
.hero {
  min-height: 100vh;
  padding-top: var(--nav-h);
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  overflow: hidden;
}

/* ── Left ── */
.hero__left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 5% 80px 7%;
  position: relative;
  z-index: 2;
}

.hero__eyebrow {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background: var(--terracotta);
  }
}

.hero__headline {
  font-family: var(--font-base);
  font-size: clamp(42px, 5.5vw, 62px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--dark);
  margin-bottom: 28px;

  em {
    font-style: italic;
    font-weight: 400;
    color: var(--terracotta);
  }
}
.btn-ghost{
  font-size: 16px;
}

.hero__body {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--mid);
  max-width: 440px;
  margin-bottom: 44px;
}

.hero__btns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* ── Right ── */
.hero__right {
  position: relative;
  overflow: hidden;
  background: var(--terracotta-pale);

  picture {
    width: 100%;
    height: 100%;
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(249,244,238,0.22) 0%, transparent 60%);
}

.hero__badge {
  position: absolute;
  bottom: 44px;
  left: -24px;
  background: var(--white);
  padding: 18px 24px;
  box-shadow: 0 8px 40px rgba(42,31,26,0.12);
  border-left: 3px solid var(--terracotta);
  max-width: 210px;
  z-index: 3;

  &-num {
    display: block;
    font-family: var(--font-base);
    font-size: 40px;
    font-weight: 400;
    color: var(--terracotta);
    line-height: 1;

    sup { font-size: 22px; }
  }

  &-label {
    display: block;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.06em;
    color: var(--mid);
    margin-top: 5px;
    line-height: 1.5;
  }
}
.btn-primary{
  font-size: 16px;
}

.hero__blob {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: var(--sage-light);
  opacity: 0.18;
  bottom: -120px;
  left: -120px;
  pointer-events: none;
  z-index: 0;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero__right {
    order: -1;
    height: auto;

    img {
      height: auto;
      object-fit: contain;
    }
  }

  .hero__left {
    padding: 48px 6% 64px;
    min-height: auto;
  }

  .hero__badge {
    left: 10px;
    bottom: 10px;
    padding: 8px 11px;
    max-width: 120px;
    border-left-width: 2px;

    &-num {
      font-size: 17px;

      sup { font-size: 10px; }
    }

    &-label {
      font-size: 9.5px;
      margin-top: 2px;
      letter-spacing: 0.03em;
      line-height: 1.4;
    }
  }
}
</style>
