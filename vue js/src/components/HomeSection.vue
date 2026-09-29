<script setup>
import portrait from "../../../images/BBProfilePicture.jpeg";
import { projects } from "../data/projects.js";

const featuredProjects = projects.slice(0, 3);
</script>

<template>
  <section id="home" class="hero-container section-anchor">
    <div class="hero-section">
      <div class="hero-content">
        <p class="hero-kicker">
          <span class="status-dot"></span> Software developer · South Africa
        </p>
        <h1>Making the web<br /><em>work for people.</em></h1>
        <p class="hero-description">
          I’m Busiswa, a curious developer who enjoys turning thoughtful ideas
          into clear, useful digital experiences.
        </p>
        <div class="hero-button">
          <a class="btn btn-dark" href="#projects"
            >Explore my work <span aria-hidden="true">↘</span></a
          >
          <a class="text-link" href="#about"
            >A little about me <span aria-hidden="true">→</span></a
          >
        </div>
        <div class="hero-tools" aria-label="Selected technologies">
          <span>HTML & CSS</span><span>JavaScript</span><span>Vue.js</span
          ><span>Node & MySQL</span>
        </div>
      </div>
      <div class="hero-image-wrapper">
        <div class="portrait-frame">
          <img :src="portrait" alt="Portrait of Busiswa Bala" /><span
            class="portrait-note"
            >Building with care<br />and curiosity</span
          >
        </div>
        <span class="hero-side-note">PORTFOLIO · 2026</span>
      </div>
    </div>
    <div class="selected-work">
      <div class="section-heading compact-heading">
        <div>
          <p class="eyebrow">A few things I’ve made</p>
          <h2>Selected work</h2>
        </div>
        <a class="text-link" href="#projects"
          >All 8 projects <span aria-hidden="true">↗</span></a
        >
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
            <span class="preview-category"
              >0{{ index + 1 }} / {{ project.kind }}</span
            >
            <h3>{{ project.title }}</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
