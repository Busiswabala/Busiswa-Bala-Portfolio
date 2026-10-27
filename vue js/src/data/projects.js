import modernTechAttendance from "../../../images/ModernTech_Frontend_Attendance.png";
import modernTechLogin from "../../../images/ModernTech_FullStack_Login.png";
import tutorConnect from "../../../images/TutorConnect_Home.png";
import craftSphere from "../../../images/CraftSphere_Home.png";
import contactPage from "../../../images/ContactPage_Image.PNG";
import skincare from "../../../images/Skincare_Webpage.PNG";
import graceAndGlow from "../../../images/Grace_and_Glow_Image.PNG";
import techBlog from "../../../images/TechBlog_Image.PNG";

// Order = order on the film roll, strongest work first.
// Each `caseStudy` is a DRAFT: read it, correct anything that isn't exactly
// what happened, and make it sound like you.
export const projects = [
  {
    title: "ModernTech HR Suite: Full-Stack Upgrade",
    category: "Team project · Full stack",
    kind: "Team",
    description:
      "A full-stack iteration of the HR Suite, replacing mocked browser data with a Node.js and Express API backed by MySQL. My work extended the Attendance, Leave, and Time Off modules with routes, models, and JWT-protected controllers.",
    technologies: ["Node.js", "Express", "MySQL", "JWT"],
    image: modernTechLogin,
    imageAlt: "Login screen for the full-stack ModernTech HR Suite",
    github:
      "https://github.com/MattLCA/Module-2-Core-Project/tree/feature/busiswa-attendance-leave",
    caseStudy: {
      challenge:
        "Moving the HR Suite from mocked browser data to a real backend meant deciding how Attendance, Leave and Time Off data would be stored, protected and shared, while the team's repository was being reorganised at the same time.",
      contribution:
        "I extended the Attendance, Leave and Time Off modules with Express routes, models and JWT-protected controllers on my own feature branch, then realigned my work to the team's backend and frontend folder structure to avoid merge conflicts.",
      lessons:
        "Working in a shared repository taught me to keep my branch in step with the team early, and that separating routes, models and controllers makes protected endpoints much easier to reason about.",
    },
  },
  {
    title: "ArtisanHub Marketplace",
    category: "Team project · Vue frontend",
    kind: "Team",
    description:
      "A Vue 3 and Vite marketplace now branded ArtisanHub. I built the home and about page and the register and login page, the global stylesheet, and helped wire the app shell and router with the team.",
    technologies: ["Vue 3", "Vite", "Vue Router", "CSS"],
    image: craftSphere,
    imageAlt: "ArtisanHub marketplace homepage",
    github:
      "https://github.com/Khaalid-hattas/Group6-E-COMMERCE/tree/Busiswa/dev",
    caseStudy: {
      challenge:
        "Three developers had to build one handmade-goods marketplace in Vue that felt like a single product, so shared structure and styling had to work before each person's pages could.",
      contribution:
        "I built the Navbar and Footer components and the global stylesheet, helped wire up the app shell and router, and worked on the login, registration and about pages.",
      lessons:
        "I learned how Vue components, routing and one shared stylesheet fit together in a team app, and how much a consistent set of shared components saves everyone else.",
    },
  },
  {
    title: "ModernTech HR Suite: Worker Portal",
    category: "Team project · Frontend",
    kind: "Team",
    description:
      "An employee self-service and HR management portal. I built the Attendance, Leave, Time Off, and Issue Reporting pages, including their vanilla JavaScript interactions and localStorage-backed data.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: modernTechAttendance,
    imageAlt: "Attendance dashboard from the ModernTech HR Suite",
    github: "https://github.com/MattLCA/Module-1-Core-Project",
    caseStudy: {
      challenge:
        "Several pages shared one stylesheet and one browser store, so styles from one page bled into others, and approved Leave records did not line up with the Time Off page.",
      contribution:
        "I built the Attendance, Leave, Time Off and Issue Reporting pages in vanilla JavaScript. I scoped each page's CSS with page-specific prefixes such as att- to stop style bleed, and fixed the Leave to Time Off data bug by matching employee IDs reliably and removing duplicates with unique leave IDs.",
      lessons:
        "Small details, like a number in one place and text in another, can quietly break data between pages. Consistent naming and scoping from the start saves a lot of debugging later.",
    },
  },
  {
    title: "TutorConnect",
    category: "Team project · Education",
    kind: "Team",
    description:
      "A responsive tutoring platform built by a six-person team to connect students with tutors. My focus was the contact form: accessible field structure, clear labels, and a smoother interaction flow.",
    technologies: ["HTML", "CSS", "Accessible forms"],
    image: tutorConnect,
    imageAlt: "TutorConnect tutoring platform homepage",
    github: "https://github.com/imaanabrahams/Tutor_Connect",
    caseStudy: {
      challenge:
        "A six-person team needed a contact form that anyone, including keyboard and screen-reader users, could complete without confusion.",
      contribution:
        "I owned the contact form: an accessible field structure, clear labels and a smoother interaction flow.",
      lessons:
        "Accessibility starts with structure. Proper labels and a logical order do more for users than visual polish.",
    },
  },
  {
    title: "Miss B Radiant",
    category: "Independent study · Storefront concept",
    kind: "Independent",
    description:
      "A responsive skincare storefront concept with a clear product grid, contrasting headers, and warm typography. The study explores how a calm visual system can still support product browsing.",
    technologies: ["HTML", "CSS Grid", "Responsive CSS"],
    image: skincare,
    imageAlt: "Miss B Radiant skincare storefront concept",
    caseStudy: {
      challenge:
        "Make a skincare storefront feel calm while still being easy to browse.",
      contribution:
        "I designed a responsive product grid with contrasting headers and warm typography.",
      lessons:
        "A restrained visual system can support browsing without clutter, and CSS Grid makes responsive product layouts far simpler.",
    },
  },
  {
    title: "Grace & Glow Catalog",
    category: "Independent study · Editorial layout",
    kind: "Independent",
    description:
      "An editorial catalog concept for mindfulness and study materials, using generous spacing, a quiet sage palette, and clear visual hierarchy in place of a heavy shop framework.",
    technologies: ["HTML", "CSS", "Visual hierarchy"],
    image: graceAndGlow,
    imageAlt: "Grace and Glow catalog layout",
    caseStudy: {
      challenge:
        "Present mindfulness and study materials without the heavy feel of a typical shop.",
      contribution:
        "I used generous spacing, a quiet sage palette and a clear visual hierarchy so the catalog reads like an editorial page.",
      lessons:
        "Hierarchy and whitespace can do the work that decoration usually gets used for.",
    },
  },
  {
    title: "Minimalist Contact Page",
    category: "Independent study · Interface design",
    kind: "Independent",
    description:
      "A focused contact-form study using semantic structure, readable type, and a restrained warm palette to make a simple task feel clear and welcoming.",
    technologies: ["Semantic HTML", "CSS Flexbox", "JavaScript"],
    image: contactPage,
    imageAlt: "Minimalist contact page form design",
    caseStudy: {
      challenge:
        "Make a simple task, sending a message, feel clear and welcoming.",
      contribution:
        "I used semantic HTML, readable type and a restrained warm palette, with Flexbox for layout and some JavaScript for the form.",
      lessons:
        "Semantic structure and readable type are what make a plain form feel considered.",
    },
  },
  {
    title: "TechBlog",
    category: "Independent study · Publication layout",
    kind: "Independent",
    description:
      "A minimalist publication-style page study, built around readable type, calm content columns, and generous whitespace for long-form technology writing.",
    technologies: ["HTML", "CSS", "Responsive layout"],
    image: techBlog,
    imageAlt: "TechBlog publication page layout",
    caseStudy: {
      challenge: "Make long-form technology writing comfortable to read.",
      contribution:
        "I built a minimalist publication-style layout with readable type, calm content columns and generous whitespace.",
      lessons:
        "Line length, spacing and column width matter as much as the words for readability.",
    },
  },
];
