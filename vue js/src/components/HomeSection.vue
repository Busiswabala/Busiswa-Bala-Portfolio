<script setup>
import portrait from "../../../images/BBProfilePicture.jpeg";
import FilmBackdrop from "./Filmbackdrop.vue";
import FilmCodeBand from "./Filmcodeband.vue";
import FilmShowcase from "./FilmShowCase.vue";

const cvUrl = `${import.meta.env.BASE_URL}Busiswa-Bala-CV.pdf`;
</script>

<template>
  <div id="home" class="section-anchor">
    <div class="hero-stage">
      <FilmBackdrop />
      <div class="hero-container">
        <section class="hero-section">
          <div class="hero-content">
            <p class="hero-subtitle">Welcome to my digital journey</p>
            <h1>
              Hello, I'm<br /><span class="name-display">Busiswa Bala</span>
            </h1>
            <h2>Full - Stack Web Developer</h2>
            <p class="hero-description">
              I am new to the tech space and driven by curiosity and passion. I
              love breaking down complex problems and turning ideas into clean,
              functional code. Welcome to my digital journey.
            </p>
            <p class="hero-film-note">
              Minimal vintage film taught me restraint. Code is where I put it
              to work.
            </p>
            <div class="hero-button">
              <a href="#about" class="btn btn-outline">Get to know me</a>
              <a href="#projects" class="btn btn-dark">My work</a>
              <a :href="cvUrl" class="btn btn-outline" download>Download my CV</a>
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
    </div>
    <FilmCodeBand />
    <FilmShowcase />
    <section class="home-section">
      <div class="cta-banner">
        <h2>Have a project in mind, or just want to say hello?</h2>
        <a href=" " class="btn btn-outline">Let's talk</a>
      </div>
    </section>
  </div>
</template>
