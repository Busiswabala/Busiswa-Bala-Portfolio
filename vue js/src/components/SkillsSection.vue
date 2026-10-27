<script setup>
import SkillIcon from "./SkillIcon.vue";

const groups = [
  {
    title: "Core Development",
    items: [
      {
        name: "HTML & CSS",
        tag: "Structure & Design",
        icon: "layout",
        text: "Semantic structure, Flexbox, Grid, responsive layouts.",
      },
      {
        name: "JavaScript",
        tag: "Interactivity",
        icon: "action",
        text: "DOM interactions, forms, localStorage, async fundamentals.",
      },
      {
        name: "Vue.js",
        tag: "Components",
        icon: "layers",
        text: "Reusable components, Vue 3, Vite, routed app structure.",
      },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      {
        name: "Node.js & Express",
        tag: "Development",
        icon: "projector",
        text: "REST routes, controllers, and middleware.",
      },
      {
        name: "MySQL",
        tag: "Development",
        icon: "database",
        text: "Relational data and queries with mysql2.",
      },
      {
        name: "Authentication",
        tag: "Security",
        icon: "shield",
        text: "Implementing JWT-based authentication and password hashing with bcrypt to protect admin-only routes.",
      },
    ],
  },
  {
    title: "Workflow & Collaboration",
    items: [
      {
        name: "Git & GitHub",
        tag: "Collaboration",
        icon: "branch",
        text: "Feature branches, collaboration, and version control.",
      },
    ],
  },
  {
    title: "The Learning Pipeline",
    pipeline: true,
    items: [
      {
        name: "Async JavaScript & APIs",
        tag: "In Progress",
        icon: "leader",
        text: "Deepening my grasp of promises, fetch/async-await, and connecting front-end views to live API data.",
      },
      {
        name: "Python",
        tag: "In Progress",
        icon: "script",
        text: "Studying the fundamentals — data types, control flow, and functions — as a foundation for backend logic.",
      },
    ],
  },
];

// Running "scene" number across all cards: 01, 02, 03...
let scene = 0;
const numbered = groups.map((group) => ({
  ...group,
  items: group.items.map((item) => ({
    ...item,
    scene: String(++scene).padStart(2, "0"),
  })),
}));
</script>

<template>
  <section id="skills" class="container section-anchor">
    <section v-reveal class="page-header">
      <p class="subtitle">02 — My Capabilities</p>
      <h1>Technical Capabilities &amp; Tools</h1>
    </section>
    <section
      v-for="group in numbered"
      :key="group.title"
      v-reveal
      class="skills-section"
      :class="{ 'evaluation-zone': group.pipeline }"
    >
      <h2 class="skills-group-title">{{ group.title }}</h2>
      <div class="skills-grid">
        <article
          v-for="item in group.items"
          :key="item.name"
          class="skill-card"
          :class="{ pipeline: group.pipeline }"
        >
          <div class="skill-top">
            <span class="skill-frame"><SkillIcon :name="item.icon" /></span>
            <span class="skill-scene" aria-hidden="true"
              >Scene {{ item.scene }}</span
            >
          </div>
          <h3>{{ item.name }}</h3>
          <p class="skill-tag" :class="{ future: group.pipeline }">
            <span
              v-if="group.pipeline"
              class="skill-rec"
              aria-hidden="true"
            ></span>
            {{ item.tag }}
          </p>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>
  </section>
</template>
