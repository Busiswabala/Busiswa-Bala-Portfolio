<script setup>
defineProps({ project: { type: Object, required: true } });
</script>

<template>
  <article class="project-card">
    <div class="project-image-box">
      <img :src="project.image" :alt="project.imageAlt" loading="lazy" />
      <span class="project-index">{{
        String(project.number).padStart(2, "0")
      }}</span>
    </div>
    <div class="project-content">
      <p class="project-category">{{ project.category }}</p>
      <h3>{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <ul
        class="project-tech-tags"
        :aria-label="`${project.title} technologies`"
      >
        <li v-for="technology in project.technologies" :key="technology">
          {{ technology }}
        </li>
      </ul>
      <div v-if="project.github || project.demo" class="project-links">
        <a
          v-if="project.github"
          class="project-link-btn primary-link"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub repository <span aria-hidden="true">↗</span></a
        >
        <a
          v-if="project.demo"
          class="project-link-btn"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          >Live demo <span aria-hidden="true">↗</span></a
        >
      </div>
      <p v-else class="project-link-note">
        Independent study · No public repository
      </p>
    </div>
  </article>
</template>
