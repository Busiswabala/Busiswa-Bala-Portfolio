<template>
  <section id="contact" class="contact-section section-anchor">
    <div class="section-shell contact-shell">
      <div class="contact-copy">
        <p class="eyebrow">Have a good one in mind?</p>
        <h2>Let’s make<br /><em>something useful.</em></h2>
        <p>
          I’m open to thoughtful collaborations, junior developer opportunities,
          and a good conversation about building for the web.
        </p>
        <a class="contact-email" href="mailto:balabusiswa22@gmail.com"
          >balabusiswa22@gmail.com <span aria-hidden="true">↗</span></a
        >
      </div>
      <form
        class="contact-form"
        action="https://formspree.io/f/meaokoby"
        method="POST"
      >
        <label for="contact-name">Your name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autocomplete="name"
          placeholder="Jane Doe"
          required
        />
        <label for="contact-email">Email address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autocomplete="email"
          placeholder="jane@example.com"
          required
        />
        <label for="contact-message">What’s on your mind?</label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          placeholder="Write a note..."
          required
        ></textarea>
        <button class="btn btn-dark" type="submit">
          Send a message <span aria-hidden="true">↗</span>
        </button>
        <p class="form-note">
          Prefer email?
          <a href="mailto:balabusiswa22@gmail.com">Write directly</a>.
        </p>
      </form>
    </div>
  </section>
</template>
