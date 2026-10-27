<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

// Vintage-film loop that plays behind the hero.
const base = import.meta.env.BASE_URL;
const src = `${base}media/film-loop.mp4`;
const poster = `${base}media/film-loop-poster.jpg`;

const root = ref(null);
const video = ref(null);
const canPlay = ref(false);
const failed = ref(false);
const playing = ref(false);
let userPaused = false;
let observer;

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection?.saveData;
  canPlay.value = !reduce && !saveData;
  if (!canPlay.value) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      const el = video.value;
      if (!el) return;
      if (entry.isIntersecting && !userPaused) {
        el.play()
          .then(() => (playing.value = true))
          .catch(() => {});
      } else {
        el.pause();
        playing.value = false;
      }
    },
    { threshold: 0.2 },
  );
  observer.observe(root.value);
});

onBeforeUnmount(() => observer?.disconnect());

function toggle() {
  const el = video.value;
  if (!el) return;
  if (el.paused) {
    userPaused = false;
    el.play().then(() => (playing.value = true));
  } else {
    userPaused = true;
    el.pause();
    playing.value = false;
  }
}
</script>

<template>
  <div ref="root" class="film-backdrop">
    <div class="film-fallback" aria-hidden="true"></div>
    <video
      v-if="canPlay && !failed"
      ref="video"
      class="film-video"
      :src="src"
      :poster="poster"
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
      @error="failed = true"
    ></video>
    <div class="film-shade" aria-hidden="true"></div>
    <div class="film-scratches" aria-hidden="true"></div>
    <div class="film-grain" aria-hidden="true"></div>
    <div class="film-gate" aria-hidden="true"></div>
    <button
      v-if="canPlay && !failed"
      type="button"
      class="film-toggle"
      :aria-label="playing ? 'Pause background video' : 'Play background video'"
      @click="toggle"
    >
      {{ playing ? "Pause" : "Play" }}
    </button>
  </div>
</template>
