<script setup>
import portrait from "../../../images/BBProfilePicture.jpeg";
import { projects } from "../data/projects.js";

const featuredProjects = projects.filter((project) =>
  ["Miss B Radiant", "Grace & Glow Catalog", "TechBlog"].includes(
    project.title,
  ),
);
</script>

<template>
  <div id="home" class="section-anchor">
    <div class="hero-container">
      <section class="hero-section">
        <div class="hero-content">
          <p class="hero-subtitle">Welcome to my digital journey</p>
          <h1>
            Hello, I'm<br /><span class="name-display">Busiswa Bala</span>
          </h1>
          <h2>Junior Software Developer</h2>
          <p class="hero-description">
            I am new to the tech space and driven by curiosity and passion. I
            love breaking down complex problems and turning ideas into clean,
            functional code. Welcome to my digital journey.
          </p>
          <div class="hero-button">
            <a href="#about" class="btn btn-outline">Get to know me</a>
            <a href="#projects" class="btn btn-dark">My work</a>
          </div>
          <div class="chip-row">
            <span class="chip">HTML5</span>
            <span class="chip">CSS3</span>
            <span class="chip">JavaScript</span>
            <span class="chip">Git &amp; GitHub</span>
            <span class="chip">Node.js &amp; Express</span>
            <span class="chip">MySQL</span>
            <span class="chip">Vue.js</span>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <div class="portrait-frame">
            <img :src="portrait" alt="Busiswa Bala" />
            <p class="monogram-caption">Junior Developer · Est. 2026</p>
          </div>
        </div>
      </section>
    </div>
    <section class="home-section">
      <div class="home-section-heading">
        <h2>Selected work</h2>
        <a href="#projects" class="see-all">View all projects</a>
      </div>
      <div class="preview-grid">
        <a
          v-for="(project, index) in featuredProjects"
          :key="project.title"
          class="preview-card"
          href="#projects"
        >
          <div class="thumb">
            <img :src="project.image" :alt="project.imageAlt" loading="lazy" />
          </div>
          <div class="preview-body">
            <span class="preview-category">{{ project.title }}</span>
            <h3>{{ project.title }}</h3>
          </div>
        </a>
      </div>
      <div class="cta-banner">
        <h2>Have a project in mind, or just want to say hello?</h2>
        <a href="#contact" class="btn btn-outline">Let's talk</a>
      </div>
    </section>
  </div>
</template>
