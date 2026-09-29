<script setup>
const groups = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML & CSS",
        detail: "Semantic structure, Flexbox, Grid, responsive layouts",
      },
      {
        name: "JavaScript",
        detail: "DOM interactions, forms, localStorage, async fundamentals",
      },
      {
        name: "Vue.js",
        detail: "Reusable components, Vue 3, Vite, routed app structure",
      },
    ],
  },
  {
    title: "Backend & workflow",
    items: [
      {
        name: "Node.js & Express",
        detail: "REST routes, controllers, and middleware",
      },
      { name: "MySQL", detail: "Relational data and queries with mysql2" },
      {
        name: "Git & GitHub",
        detail: "Feature branches, collaboration, and version control",
      },
    ],
  },
];
</script>

<template>
  <section id="skills" class="skills-section section-anchor">
    <div class="section-shell">
      <header class="section-heading">
        <div>
          <p class="eyebrow">Tools I reach for</p>
          <h2>Skills, still in motion.</h2>
        </div>
        <p class="section-intro">
          A practical foundation, growing with every project and every good
          question.
        </p>
      </header>
      <div class="skill-groups">
        <section
          v-for="(group, groupIndex) in groups"
          :key="group.title"
          class="skill-group"
        >
          <h3>
            <span>0{{ groupIndex + 1 }}</span
            >{{ group.title }}
          </h3>
          <div class="skill-list">
            <article
              v-for="item in group.items"
              :key="item.name"
              class="skill-item"
            >
              <h4>{{ item.name }}</h4>
              <p>{{ item.detail }}</p>
              <span aria-hidden="true">↗</span>
            </article>
          </div>
        </section>
      </div>
      <p class="learning-note">
        <span class="status-dot"></span> Currently exploring
        <strong>Python</strong> and deeper API integration
      </p>
    </div>
  </section>
</template>
