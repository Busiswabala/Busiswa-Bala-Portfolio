<template>
  <section id="contact" class="container section-anchor">
    <section class="page-header">
      <p class="subtitle">Let's Connect</p>
      <h1>Beyond The Code &amp; Architecture</h1>
    </section>
    <div class="contact-grid">
      <section class="contact-interests">
        <h2
          class="section-title"
          style="
            font-family: var(--font-display);
            font-size: 1.6rem;
            margin-bottom: 20px;
          "
        >
          Direct Contact
        </h2>
        <div class="direct-contact">
          <a class="direct-contact-row" href="mailto:balabusiswa22@gmail.com"
            ><span class="ico" aria-hidden="true">✉</span
            ><span
              ><span class="label">Email</span
              ><span class="value">balabusiswa22@gmail.com</span></span
            ></a
          >
          <a
            class="direct-contact-row"
            href="https://www.linkedin.com/in/busiswa-bala-906904347/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="ico" aria-hidden="true">in</span
            ><span
              ><span class="label">LinkedIn</span
              ><span class="value">busiswa-bala-906904347</span></span
            ></a
          >
          <a
            class="direct-contact-row"
            href="https://github.com/Busiswabala"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="ico" aria-hidden="true">gh</span
            ><span
              ><span class="label">GitHub</span
              ><span class="value">Busiswabala</span></span
            ></a
          >
        </div>
        <h2
          class="section-title"
          style="
            font-family: var(--font-display);
            font-size: 1.6rem;
            margin: 40px 0 20px;
          "
        >
          Curated Pursuits
        </h2>
        <p class="interests-intro">
          When I am not tracing syntax errors or mapping out grid columns, I
          make time for a few creative activities that recharge my focus.
        </p>
        <div class="interest-item">
          <h3>Architectural Photography</h3>
          <p>
            Observing line symmetry and framing layouts through a camera lens
            inspires my approach to digital layout systems.
          </p>
        </div>
        <div class="interest-item">
          <h3>Analog Reading</h3>
          <p>
            Classic literature and design journals keep me grounded in
            traditional typography and editorial formatting.
          </p>
        </div>
        <div class="interest-item" style="border-bottom: none">
          <h3>Strategic Gaming</h3>
          <p>
            Puzzle and brain games exercise my problem-solving and analytical
            thinking outside of code.
          </p>
        </div>
      </section>
      <section class="contact-form-section">
        <h2
          class="section-title"
          style="
            font-family: var(--font-display);
            font-size: 1.6rem;
            margin-bottom: 20px;
          "
        >
          Initiate A Conversation
        </h2>
        <p class="form-intro">
          Whether you are looking to collaborate, offer mentorship, or chat
          about design — drop a note below.
        </p>
        <form
          action="https://formspree.io/f/meaokoby"
          method="POST"
          class="classic-form"
        >
          <div class="form-group">
            <label for="contact-name">Your name</label
            ><input
              type="text"
              id="contact-name"
              name="name"
              autocomplete="name"
              placeholder="E.g., Jane Doe"
              required
            />
          </div>
          <div class="form-group">
            <label for="contact-email">Email address</label
            ><input
              type="email"
              id="contact-email"
              name="email"
              autocomplete="email"
              placeholder="E.g., jane@example.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="contact-message">Your Message</label
            ><textarea
              id="contact-message"
              name="message"
              rows="6"
              placeholder="Write your thoughts here..."
              required
            ></textarea>
          </div>
          <button type="submit" class="form-submit-btn">Send Message</button>
          <p class="form-note" aria-live="polite"></p>
        </form>
        <div class="alt-contact">
          <p>Or find me active across the web:</p>
          <div class="social-links-container">
            <a
              href="https://www.linkedin.com/in/busiswa-bala-906904347/"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            ><span>/</span
            ><a
              href="https://github.com/Busiswabala"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
