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
  <section id="skills" class="container section-anchor">
    <section class="page-header">
      <p class="subtitle">My Capabilities</p>
      <h1>Technical Capabilities &amp; Tools</h1>
    </section>
    <section class="skills-section">
      <h2 class="skills-group-title">Core Development</h2>
      <div class="skills-grid">
        <article
          v-for="item in groups[0].items"
          :key="item.name"
          class="skill-card"
        >
          <h3>{{ item.name }}</h3>
          <p class="skill-tag">
            {{
              item.name === "HTML & CSS"
                ? "Structure & Design"
                : item.name === "JavaScript"
                  ? "Interactivity"
                  : "Components"
            }}
          </p>
          <p>{{ item.detail }}.</p>
        </article>
      </div>
    </section>
    <section class="skills-section">
      <h2 class="skills-group-title">Backend &amp; Data</h2>
      <div class="skills-grid">
        <article
          v-for="item in groups[1].items.slice(0, 2)"
          :key="item.name"
          class="skill-card"
        >
          <h3>{{ item.name }}</h3>
          <p class="skill-tag">Development</p>
          <p>{{ item.detail }}.</p>
        </article>
        <article class="skill-card">
          <h3>Authentication</h3>
          <p class="skill-tag">Security</p>
          <p>
            Implementing JWT-based authentication and password hashing with
            bcrypt to protect admin-only routes.
          </p>
        </article>
      </div>
    </section>
    <section class="skills-section">
      <h2 class="skills-group-title">Frontend Frameworks</h2>
      <div class="skills-grid">
        <article class="skill-card">
          <h3>Vue.js</h3>
          <p class="skill-tag">Components</p>
          <p>
            Building reusable, component-based UI in a Vite-powered Vue 3 app.
          </p>
        </article>
      </div>
    </section>
    <section class="skills-section evaluation-zone">
      <h2 class="skills-group-title">The Learning Pipeline</h2>
      <div class="skills-grid">
        <article class="skill-card pipeline">
          <h3>Async JavaScript &amp; APIs</h3>
          <p class="skill-tag future">In Progress</p>
          <p>
            Deepening my grasp of promises, fetch/async-await, and connecting
            front-end views to live API data.
          </p>
        </article>
        <article class="skill-card pipeline">
          <h3>Python</h3>
          <p class="skill-tag future">In Progress</p>
          <p>
            Studying the fundamentals — data types, control flow, and functions
            — as a foundation for backend logic.
          </p>
        </article>
      </div>
    </section>
  </section>
</template>
