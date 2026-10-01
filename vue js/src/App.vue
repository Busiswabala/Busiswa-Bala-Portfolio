<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import HomeSection from "./components/HomeSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";

const year = new Date().getFullYear();
</script>

<template>
  <SiteHeader />
  <main>
    <HomeSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <SiteFooter :year="year" />
</template>

<style>
.section-anchor {
  scroll-margin-top: calc(var(--nav-height) + 1rem);
}
</style>
