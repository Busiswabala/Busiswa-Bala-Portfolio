<script setup>
defineProps({ year: { type: Number, required: true } });
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <a class="logo" href="#home"
          >Busiswa Bala<span class="logo-mark">.</span></a
        >
        <p>Thoughtful interfaces, useful tools, and a little curiosity.</p>
      </div>
      <div class="footer-links-block">
        <span class="footer-heading">Around the web</span>
        <a
          href="https://github.com/Busiswabala"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
        <a
          href="https://www.linkedin.com/in/busiswa-bala-906904347/"
          target="_blank"
          rel="noopener noreferrer"
          >LinkedIn</a
        >
        <a href="mailto:balabusiswa22@gmail.com">Email</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ year }} Busiswa Bala</span><a href="#home">Back to top ↑</a>
    </div>
  </footer>
</template>
