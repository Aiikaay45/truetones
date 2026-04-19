<template>
  <section id="about" class="about" ref="root" aria-labelledby="about-heading">

    <!-- Image column -->
    <div class="about__image-wrap">
    
      <picture>
        <source srcset="/images/dr_oghosa.webp" type="image/webp" />
        <img
          src="/images/dr_oghosa.jpeg"
          alt="Dr Oghosa, founder of True Tones Skin Therapy"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <!-- <div class="about__img-ring about__img-ring--lg" aria-hidden="true" />
      <div class="about__img-ring about__img-ring--sm" aria-hidden="true" /> -->
    </div>

    <!-- Content column -->
    <div class="about__content">
      <p class="section-tag fade-up">About Dr Oghosa</p>

      <h2 id="about-heading" class="section-title fade-up">
        The Expert Behind<br /><em>True Tones</em>
      </h2>

      <blockquote class="about__quote fade-up">
        "Clear skin is not a luxury — it's a right. And every skin tone
        deserves the same quality of care."
      </blockquote>

      <p class="about__body fade-up">
        Dr Oghosa is a medical doctor and the founder of True Tones, a skincare consultancy grounded in clinical expertise and a deliberate, highly personalised approach to skin health.
        With a foundation in medicine and a meticulous understanding of skin physiology, she approaches skincare with the precision of clinical practice.
      </p>

      <p class="about__body fade-up">
        Through True Tones, she has built a practice that combines medical
        expertise with genuine empathy. Every client receives a thorough
        consultation, a custom skin plan, and continuous support throughout
        their journey to clear skin.
      </p>

      <button class="btn-primary fade-up" @click="scrollToContact">
        Book with Dr Oghosa
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { observe } = useScrollAnimation()
const root        = ref(null)

function scrollToContact() {
  document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => observe(root.value))
</script>

<style scoped lang="scss">
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  min-height: 640px;
}

/* Image */
.about__image-wrap {
  position: relative;
  overflow: hidden;
  background: var(--cream-dark);
  min-height: 560px;

  picture {
    width: 100%;
    height: 100%;
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }
}

.about__img-ring {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;

  &--lg {
    width: 100px; height: 100px;
    top: 44px; right: -20px;
    border: 1px solid var(--terracotta);
    opacity: 0.35;
  }

  &--sm {
    width: 60px; height: 60px;
    bottom: 64px; left: 32px;
    border: 1px solid var(--sage);
    opacity: 0.45;
  }
}

/* Content */
.about__content {
  background: var(--cream);
  padding: 80px 7% 80px 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about__quote {
  font-family: var(--font-base);
  font-size: 22px;
  font-style: italic;
  font-weight: 400;
  color: var(--terracotta);
  line-height: 1.55;
  border-left: 2px solid var(--terracotta);
  padding-left: 22px;
  margin: 24px 0;
}
.section-tag{
  font-size: 18px;
}

.about__body {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--mid);
  margin-bottom: 14px;
}

.about__credentials {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 28px 0 32px;
}

.credential-pill {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1em;
  padding: 6px 16px;
  border: 1px solid var(--terracotta-pale);
  color: var(--terracotta);
  border-radius: 99px;
  background: rgba(160, 82, 45, 0.05);
}
.btn-primary{
  font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
  .about {
    grid-template-columns: 1fr;
  }

  .about__image-wrap { min-height: 320px; }
  .about__content    { padding: 60px 5%; }
}
</style>
