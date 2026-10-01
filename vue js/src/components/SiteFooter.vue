<script setup>
defineProps({ year: { type: Number, required: true } });
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <a class="logo" href="#home">Busiswa Bala<span class="dot">.</span></a>
        <p class="footer-tagline">
          Junior software developer building clean, considered interfaces , one
          page at a time.
        </p>
        <div class="footer-social">
          <a
            href="https://github.com/Busiswabala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >Gh</a
          >
          <a
            href="https://www.linkedin.com/in/busiswa-bala-906904347/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >In</a
          >
          <a href="mailto:balabusiswa22@gmail.com" aria-label="Email">@</a>
        </div>
      </div>
      <div class="footer-nav">
        <div class="footer-heading">Explore</div>
        <ul class="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <div class="footer-heading">Get in touch</div>
        <ul class="footer-links">
          <li>
            <a href="mailto:balabusiswa22@gmail.com">balabusiswa22@gmail.com</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/busiswa-bala-906904347/"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >
          </li>
          <li>
            <a
              href="https://github.com/Busiswabala"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p>© {{ year }} Busiswa Bala. All rights reserved.</p>
        <a class="back-to-top" href="#home">Back to top ↑</a>
      </div>
    </div>
  </footer>
</template>
