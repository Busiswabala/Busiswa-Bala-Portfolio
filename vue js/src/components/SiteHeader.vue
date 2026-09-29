<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <header class="site-header">
    <nav class="navbar" aria-label="Main navigation">
      <a class="logo" href="#home" @click="menuOpen = false"
        >Busiswa Bala<span class="logo-mark">.</span></a
      >
      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        :aria-label="
          menuOpen ? 'Close navigation menu' : 'Open navigation menu'
        "
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
      <ul
        id="primary-navigation"
        class="nav-links"
        :class="{ 'is-open': menuOpen }"
      >
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="menuOpen = false">{{ link.label }}</a>
        </li>
        <li class="nav-availability">Open to opportunities</li>
      </ul>
    </nav>
  </header>
</template>
