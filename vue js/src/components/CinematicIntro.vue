<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const SEEN_KEY = "bb-intro-seen";
const visible = ref(false);
const leaving = ref(false);
const enterButton = ref(null);

function shouldShow() {
  // Respect reduced motion, deep links (#projects) and repeat visits in a session.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.location.hash) return false;
  try {
    return !sessionStorage.getItem(SEEN_KEY);
  } catch {
    return true;
  }
}

function close() {
  if (leaving.value) return;
  leaving.value = true;
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* storage unavailable: fine */
  }
  setTimeout(() => {
    visible.value = false;
    document.body.classList.remove("scroll-lock");
  }, 900);
}

function onKeydown(event) {
  if (event.key === "Escape") close();
}

onMounted(async () => {
  if (!shouldShow()) return;
  visible.value = true;
  document.body.classList.add("scroll-lock");
  window.addEventListener("keydown", onKeydown);
  await nextTick();
  enterButton.value?.focus({ preventScroll: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.classList.remove("scroll-lock");
});
</script>

<template>
  <div
    v-if="visible"
    class="intro"
    :class="{ 'is-leaving': leaving }"
    role="dialog"
    aria-modal="true"
    aria-label="Portfolio introduction"
  >
    <div class="intro-leak" aria-hidden="true"></div>
    <div class="intro-grain" aria-hidden="true"></div>
    <div class="intro-stage">
      <p class="intro-kicker">A digital experience · 2026</p>
      <p class="intro-title">Busiswa Bala</p>
      <p class="intro-role">Junior Software Developer</p>
      <p class="intro-line">
        Building with intention.<br />Designed to be experienced.
      </p>
      <button ref="enterButton" type="button" class="intro-enter" @click="close">
        Enter the portfolio <span aria-hidden="true">↗</span>
      </button>
    </div>
    <button type="button" class="intro-skip" @click="close">Skip intro</button>
  </div>
</template>
