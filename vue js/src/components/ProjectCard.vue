<script setup>
defineProps({ project: { type: Object, required: true } });
</script>

<template>
  <article class="project-card">
    <div class="project-image-box">
      <img :src="project.image" :alt="project.imageAlt" loading="lazy" />
    </div>
    <div class="project-content">
      <p class="project-category">{{ project.category }}</p>
      <h2>{{ project.title }}</h2>
      <p class="project-description">{{ project.description }}</p>
      <div
        class="project-tech-tags"
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
      <div v-if="project.github || project.demo" class="project-links">
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
      <p v-else class="project-link-note">
        Personal study · No public repository available
      </p>
    </div>
  </article>
</template>
