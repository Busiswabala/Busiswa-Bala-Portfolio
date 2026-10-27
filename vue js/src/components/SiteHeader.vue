<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const menuOpen = ref(false);
const scrolled = ref(false);
const onScroll = () => (scrolled.value = window.scrollY > 8);
onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
const links = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <nav class="navbar" aria-label="Main navigation">
      <a class="logo" href="#home" @click="menuOpen = false">
        Busiswa Bala<span class="dot">.</span>
        <span class="role">Developer</span>
      </a>
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
      </ul>
    </nav>
  </header>
</template>
