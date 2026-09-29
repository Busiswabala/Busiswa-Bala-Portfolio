# Busiswa Bala Portfolio

A responsive portfolio built with Vue 3 and Vite. The single-page experience is composed from reusable Vue components and includes profile, about, skills, project, and contact sections.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Vite prints the local URL when the development server starts.

## Production build

```sh
npm run build
npm run preview
```

The optimized site is generated in `dist/`. Project screenshots are imported from `images/` and included in the build.

## Portfolio content

Project descriptions, technologies, screenshots, and available repository/demo links are maintained in `src/data/projects.js`. Only projects with a known, project-specific public repository or demo display an external link.

The contact form uses the existing Formspree endpoint. Form delivery depends on that endpoint remaining active.
