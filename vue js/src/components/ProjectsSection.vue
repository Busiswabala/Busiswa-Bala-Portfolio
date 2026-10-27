<script setup>
import { computed, ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import ProjectModal from "./ProjectModal.vue";
import { projects } from "../data/projects.js";

const filter = ref("All");
const selected = ref(null);
const strip = ref(null);
const filters = ["All", "Team", "Independent"];

const visibleProjects = computed(() =>
  projects.filter(
    (project) => filter.value === "All" || project.kind === filter.value,
  ),
);

function scrollStrip(direction) {
  const el = strip.value;
  if (!el) return;
  el.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: "smooth" });
}

// New filter = new reel, so start again from the first frame.
function resetScroll() {
  strip.value?.scrollTo({ left: 0 });
}
</script>

<template>
  <section id="projects" class="projects-reel section-anchor">
    <div class="container">
      <section v-reveal class="page-header">
        <p class="subtitle">03 — My Proof</p>
        <h1>Selected Creations &amp; Studies</h1>
      </section>
      <div class="projects-bar">
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
        <div class="reel-controls">
          <button
            type="button"
            aria-label="Previous projects"
            @click="scrollStrip(-1)"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next projects"
            @click="scrollStrip(1)"
          >
            →
          </button>
        </div>
      </div>
    </div>

    <Transition name="strip" mode="out-in" @after-enter="resetScroll">
      <div
        :key="filter"
        ref="strip"
        class="projects-strip"
        role="region"
        aria-label="Projects film roll"
        tabindex="0"
      >
        <ProjectCard
          v-for="(project, index) in visibleProjects"
          :key="project.title"
          :project="project"
          :position="index + 1"
          :total="visibleProjects.length"
          @open="selected = $event"
        />
      </div>
    </Transition>

    <ProjectModal :project="selected" @close="selected = null" />
  </section>
</template>

<style scoped>
.projects-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -24px 0 0;
}

.project-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
