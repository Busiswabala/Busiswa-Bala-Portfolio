<script setup>
defineProps({
  project: { type: Object, required: true },
  position: { type: Number, default: 1 },
  total: { type: Number, default: 1 },
});
defineEmits(["open"]);

const pad = (n) => String(n).padStart(2, "0");
</script>

<template>
  <article class="reel-frame">
    <button
      type="button"
      class="reel-screen"
      :aria-label="`Open ${project.title} case study`"
      @click="$emit('open', project)"
    >
      <img :src="project.image" :alt="project.imageAlt" loading="lazy" />
      <span class="reel-count" aria-hidden="true">
        Project {{ pad(position) }} / {{ pad(total) }}
      </span>
      <!-- Desktop hover bonus: the screenshot stays visible, details slide up -->
      <span class="reel-overlay" aria-hidden="true">
        <span class="reel-overlay-text">{{ project.description }}</span>
        <span class="reel-overlay-cta">View case study →</span>
      </span>
    </button>

    <div class="reel-meta">
      <p class="reel-category">{{ project.category }}</p>
      <h2>{{ project.title }}</h2>
      <p class="reel-desc">{{ project.description }}</p>
      <div
        class="reel-tags"
        role="list"
        :aria-label="`${project.title} technologies`"
      >
        <span
          v-for="technology in project.technologies"
          :key="technology"
          role="listitem"
          >#{{ technology.replaceAll(" ", "") }}</span
        >
      </div>
      <div class="reel-actions">
        <button type="button" class="case-open" @click="$emit('open', project)">
          Case study →
        </button>
        <a
          v-if="project.github"
          class="project-link-btn primary-link"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          >View Code</a
        >
        <a
          v-if="project.demo"
          class="project-link-btn"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          >Live Demo</a
        >
      </div>
      <p v-if="!project.github && !project.demo" class="reel-note">
        Personal study · No public repository available
      </p>
    </div>
  </article>
</template>
