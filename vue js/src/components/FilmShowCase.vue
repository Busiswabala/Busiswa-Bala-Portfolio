<script setup>
// My short film. Files live in "vue js/public/media/":
//   between-frames.mp4  and  between-frames-poster.jpg
const base = import.meta.env.BASE_URL;
const src = `${base}media/between-frames.mp4`;
const poster = `${base}media/between-frames-poster.jpg`;
</script>

<template>
  <section class="film-showcase" aria-labelledby="film-showcase-title">
    <div class="film-showcase-inner">
      <header v-reveal class="film-showcase-head">
        <p class="film-code-kicker">The short film · 60 seconds</p>
        <h2 id="film-showcase-title">Between Frames &amp; Functions</h2>
        <p>
          A short film about the rhythm that film editing and code share: ideas
          first, then structure, then the finished experience.
        </p>
      </header>
      <div v-reveal="{ delay: 120 }" class="film-showcase-screen">
        <video
          :src="src"
          :poster="poster"
          controls
          playsinline
          preload="none"
          aria-label="Between Frames and Functions, a 60 second short film"
        ></video>
      </div>
    </div>
  </section>
</template>
