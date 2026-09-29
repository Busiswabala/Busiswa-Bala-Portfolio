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
  <section id="projects" class="projects-section section-anchor">
    <div class="section-shell">
      <header class="section-heading projects-heading">
        <div>
          <p class="eyebrow">Selected work · 2024—2026</p>
          <h2>Made with intent.</h2>
        </div>
        <p class="section-intro">
          Team builds and independent studies, each one a chance to learn
          something new.
        </p>
      </header>
      <div class="project-toolbar">
        <p>
          <strong>{{ visibleProjects.length }}</strong> projects
        </p>
        <div class="filter-control" aria-label="Filter projects">
          <button
            v-for="option in filters"
            :key="option"
            type="button"
            :class="{ selected: filter === option }"
            :aria-pressed="filter === option"
            @click="filter = option"
          >
            {{ option }}
          </button>
        </div>
      </div>
      <div class="projects-grid">
        <ProjectCard
          v-for="project in visibleProjects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
