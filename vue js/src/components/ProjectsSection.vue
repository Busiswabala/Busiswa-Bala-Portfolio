<script setup>
import { computed, ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { projects } from "../data/projects.js";

const filter = ref("All");
const filters = ["All", "Team", "Independent"];
const visibleProjects = computed(() =>
  projects
    .map((project, index) => ({ ...project, number: index + 1 }))
    .filter(
      (project) => filter.value === "All" || project.kind === filter.value,
    ),
);
</script>

<template>
  <section id="projects" class="container section-anchor">
    <section class="page-header">
      <p class="subtitle">My Proof</p>
      <h1>Selected Creations &amp; Studies</h1>
    </section>
    <div class="project-filters" aria-label="Filter projects">
      <button
        v-for="option in filters"
        :key="option"
        type="button"
        :class="{ active: filter === option }"
        :aria-pressed="filter === option"
        @click="filter = option"
      >
        {{ option }}
      </button>
    </div>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in visibleProjects"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped>
.project-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: -24px 0 28px;
}

.project-filters button {
  border: 1px solid var(--hairline);
  padding: 8px 14px;
  background: var(--card);
  color: var(--ink-soft);
  cursor: pointer;
  font: inherit;
  font-size: 0.78rem;
}

.project-filters button.active {
  border-color: var(--ink);
  background: var(--ink);
  color: var(--paper);
}
</style>
