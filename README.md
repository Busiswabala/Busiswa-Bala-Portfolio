# Busiswa Bala Portfolio

The portfolio is a Vue 3 app in [`vue js/`](vue%20js/README.md). The live site is published at [busiswabala.github.io/Busiswa-Bala-Portfolio](https://busiswabala.github.io/Busiswa-Bala-Portfolio/).

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```sh
cd "vue js"
npm install
npm run dev
```

## Deploy

GitHub Actions builds the Vue app and publishes its `dist/` folder when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. After that, pushes to `main` trigger deployment automatically.

## Build manually

```sh
cd "vue js"
npm run build
npm run preview
```

Project descriptions, technologies, screenshots, and available repository links are maintained in `vue js/src/data/projects.js`. The contact form uses the existing Formspree endpoint.
