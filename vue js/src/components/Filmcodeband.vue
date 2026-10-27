<script setup>
  // The link between short vintage film and code, as three pairings.
  const pairs = [
    {
      film: "Framing",
      code: "Layout",
      text: "A good frame holds only what matters. So does a good layout.",
    },
    {
      film: "Editing",
      code: "Refactoring",
      text: "Every cut has to earn its place, and so does every line of code.",
    },
    {
      film: "Pacing",
      code: "Interaction",
      text: "Timing decides how a scene feels, and how a page responds.",
    },
  ];
</script>

<template>
  <section class="film-code" aria-labelledby="film-code-title">
    <div class="film-code-inner">
      <header v-reveal class="film-code-head">
        <p class="film-code-kicker">Short films · Minimal · Vintage</p>
        <h2 id="film-code-title">Film and code, the same craft.</h2>
      </header>
      <ul class="film-code-list">
        <li
          v-for="(pair, index) in pairs"
          :key="pair.film"
          v-reveal="{ delay: index * 120 }"
        >
          <span class="film-code-num" aria-hidden="true">0{{ index + 1 }}</span>
          <p class="film-code-pair">
            {{ pair.film }} <span aria-hidden="true">→</span>
            <em>{{ pair.code }}</em>
          </p>
          <p class="film-code-text">{{ pair.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
