<script setup>
import { ref } from "vue";
import SkillIcon from "./SkillIcon.vue";
import { frames } from "../data/beyond.js";

const strip = ref(null);
const flipped = ref(null);
const baseUrl = import.meta.env.BASE_URL;
const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function scrollStrip(direction) {
  const el = strip.value;
  if (!el) return;
  el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
}

// Hover flips the frame on desktop; click / tap / Enter flips it everywhere.
function toggle(index) {
  flipped.value = flipped.value === index ? null : index;
}

const pad = (n) => String(n).padStart(2, "0");
</script>

<template>
  <section id="beyond" class="beyond section-anchor">
    <div class="container beyond-inner">
      <section v-reveal class="page-header">
        <p class="subtitle">04 — Beyond the Code</p>
        <h1>The Film Roll</h1>
        <p class="beyond-intro">
          The things I do outside the editor, one frame each. Hover or tap a
          frame to see what it adds to my code.
        </p>
      </section>
      <div class="film-controls">
        <button
          type="button"
          aria-label="Previous frames"
          @click="scrollStrip(-1)"
        >
          ←
        </button>
        <button type="button" aria-label="Next frames" @click="scrollStrip(1)">
          →
        </button>
      </div>
    </div>
    <div
      ref="strip"
      class="filmstrip"
      role="region"
      aria-label="Interests film roll"
      tabindex="0"
    >
      <figure
        v-for="(frame, index) in frames"
        :key="frame.title"
        class="film-frame"
        :class="{ 'is-flipped': flipped === index }"
      >
        <button
          type="button"
          class="film-card"
          :aria-pressed="flipped === index"
          :aria-label="`${frame.title}. Show what it adds to my code`"
          @click="toggle(index)"
        >
          <span class="film-card-inner">
            <span class="film-face film-front">
              <img
                v-if="frame.src"
                class="film-photo"
                :src="frame.src"
                :alt="frame.title"
                loading="lazy"
              />
              <video
                v-else-if="frame.video"
                class="film-photo"
                :src="baseUrl + frame.video"
                :poster="frame.poster ? baseUrl + frame.poster : undefined"
                muted
                loop
                :autoplay="!reduceMotion"
                playsinline
                preload="metadata"
                :aria-label="`${frame.title}: short film clip`"
              ></video>
              <span v-else class="film-art" aria-hidden="true">
                <SkillIcon :name="frame.icon" />
              </span>
              <span class="film-counter" aria-hidden="true">
                Frame {{ pad(index + 1) }} / {{ pad(frames.length) }}
              </span>
              <span class="film-hint" aria-hidden="true">Turn the frame</span>
            </span>
            <span class="film-face film-back">
              <span class="film-counter">Adds to my code</span>
              <span class="film-takeaway">{{ frame.takeaway }}</span>
              <span class="film-takeaway-text">{{ frame.takeawayText }}</span>
            </span>
          </span>
        </button>
        <figcaption>
          <strong>{{ frame.title }}</strong>
          <span>{{ frame.caption }}</span>
        </figcaption>
      </figure>

      <figure class="film-frame film-end">
        <div class="film-card film-card-end">
          <span class="film-art" aria-hidden="true">
            <SkillIcon name="leader" />
          </span>
          <span class="film-counter">End of reel</span>
        </div>
        <figcaption>
          <strong>To be continued…</strong>
          <span>More frames on the way.</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
