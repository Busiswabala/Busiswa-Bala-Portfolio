import modernTechAttendance from "../../../images/ModernTech_Frontend_Attendance.png";
import modernTechLogin from "../../../images/ModernTech_FullStack_Login.png";
import tutorConnect from "../../../images/TutorConnect_Home.png";
import craftSphere from "../../../images/CraftSphere_Home.png";
import contactPage from "../../../images/ContactPage_Image.PNG";
import skincare from "../../../images/Skincare_Webpage.PNG";
import graceAndGlow from "../../../images/Grace_and_Glow_Image.PNG";
import techBlog from "../../../images/TechBlog_Image.PNG";

export const projects = [
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
  },
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
  },
  {
    title: "CraftSphere Marketplace",
    category: "Team project · Vue frontend",
    kind: "Team",
    description:
      "A Vue 3 and Vite marketplace now branded ArtisanHub. I built the navigation and footer components, the global stylesheet, and helped wire the app shell and router with the team.",
    technologies: ["Vue 3", "Vite", "Vue Router", "CSS"],
    image: craftSphere,
    imageAlt: "CraftSphere artisan marketplace homepage",
    github:
      "https://github.com/Khaalid-hattas/Group6-E-COMMERCE/tree/Busiswa/dev",
  },
  {
    title: "Minimalist Contact Page",
    category: "Independent study · Interface design",
    kind: "Independent",
    description:
      "A focused contact-form study using semantic structure, readable type, and a restrained warm palette to make a simple task feel clear and welcoming.",
    technologies: ["Semantic HTML", "CSS Flexbox", "Typography"],
    image: contactPage,
    imageAlt: "Minimalist contact page form design",
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
  },
];
