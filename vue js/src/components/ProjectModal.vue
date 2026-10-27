<script setup>
import { nextTick, ref, watch } from "vue";

const props = defineProps({ project: { type: Object, default: null } });
const emit = defineEmits(["close"]);
const dialog = ref(null);

watch(
  () => props.project,
  async (project) => {
    await nextTick();
    const el = dialog.value;
    if (!el) return;
    if (project && !el.open) {
      el.showModal();
      document.body.classList.add("scroll-lock");
    } else if (!project && el.open) {
      el.close();
    }
  },
);

function onClose() {
  document.body.classList.remove("scroll-lock");
  emit("close");
}

// Clicking the dimmed backdrop (the <dialog> itself) closes it.
function onBackdrop(event) {
  if (event.target === dialog.value) dialog.value.close();
}
</script>

<template>
  <dialog
    ref="dialog"
    class="case-dialog"
    aria-labelledby="case-title"
    @close="onClose"
    @click="onBackdrop"
  >
    <article v-if="project" class="case-panel">
      <button
        type="button"
        class="case-close"
        aria-label="Close case study"
        @click="dialog.close()"
      >
        ✕
      </button>
      <div class="case-media">
        <img :src="project.image" :alt="project.imageAlt" />
      </div>
      <div class="case-body">
        <p class="project-category">{{ project.category }}</p>
        <h2 id="case-title">{{ project.title }}</h2>
        <p class="case-lede">{{ project.description }}</p>

        <!-- Optional "Behind the build" fields: shown only when you add them in projects.js -->
        <template v-if="project.caseStudy">
          <section v-if="project.caseStudy.challenge">
            <h3>The challenge</h3>
            <p>{{ project.caseStudy.challenge }}</p>
          </section>
          <section v-if="project.caseStudy.contribution">
            <h3>What I built</h3>
            <p>{{ project.caseStudy.contribution }}</p>
          </section>
          <section v-if="project.caseStudy.lessons">
            <h3>What I learned</h3>
            <p>{{ project.caseStudy.lessons }}</p>
          </section>
        </template>

        <div class="project-tech-tags" role="list" aria-label="Technologies">
          <span v-for="tech in project.technologies" :key="tech" role="listitem"
            >#{{ tech.replaceAll(" ", "") }}</span
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
      </div>
    </article>
  </dialog>
</template>
