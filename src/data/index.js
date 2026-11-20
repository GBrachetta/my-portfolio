import { nanoid } from "nanoid";
import cv from "../images/cv-guillermo.pdf";

// HEAD DATA
export const headData = {
  title: "Guillermo Brachetta | Web Developer",
  lang: "en",
  description: "Website of Guillermo Brachetta",
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: "Guillermo Brachetta.",
  subtitle: "Web Developer.",
  cta: "Know More!",
};

// ABOUT DATA
export const aboutData = {
  img: "me.webp",
  paragraphOne:
    "I love to create, to sort challenges, to defy limitations, to conquer "
    + "tenacious obstacles, to express myself, to learn.",
  paragraphTwo:
    "I found in development the space to exploit these passions. Through "
    + "React. Through Next.js. Through Django and the intricacies  of "
    + "databases.",
  paragraphThree: "I love the freedom it gives me.",
  resume: cv,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: "blog",
    img: "blog-700.webp",
    title: "Guillermo's Blog",
    type: "DEV DISPATCH & TECH PUBLICATION",
    lead: "Field notes from the keyboard.",
    description:
      "Articles on web development, smart home automation, vintage hardware, and early music. "
      + "A bilingual, high-performance publication built with Astro.",
    tags: ["Astro", "Home Assistant", "Tech Writing"],
    url: "https://blog.gbrachetta.com/",
  },
  {
    id: "menno-van-delft",
    img: "menno-van-delft.webp",
    title: "Menno van Delft",
    type: "FEATURED ARTIST PLATFORM",
    lead: "A bespoke digital stage.",
    description:
      "Crafted for harpsichordist and clavichordist Menno van Delft, "
      + "featuring audio previews, a recordings catalogue, and a complete press kit. "
      + "Built with Astro and Sanity.",
    tags: ["Astro", "Sanity CMS", "Audio Previews"],
    url: "https://www.mennovandelft.com/",
  },
  {
    id: "white-queen",
    img: "white-queen.webp",
    title: "White Queen",
    type: "SAFETY CONSULTANCY PORTAL",
    lead: "Clarity in high-stakes safety.",
    description:
      "A modern digital presence for a Dutch safety consultancy. "
      + "Crisp branding, performant architecture, and an effortless way to start the conversation.",
    tags: ["React", "Client Branding", "Consultancy"],
    url: "https://www.whitequeen.nl/",
  },
  {
    id: "mozarts-dice-game",
    img: "mozarts-dice-game.webp",
    title: "Mozart's Dice Game",
    type: "GENERATIVE AUDIO LAB",
    lead: "An 18th-century algorithmic puzzle.",
    description:
      "Roll the dice in the browser to compose a minuet. An interactive "
      + "Web Audio game where classical performance meets generative programming.",
    tags: ["Web Audio API", "JavaScript", "Music Game"],
    url: "https://new-musical-dice.vercel.app/",
    repo: "https://github.com/GBrachetta/new-musical-dice",
  },
  {
    id: "pingpanda",
    img: "project7.png",
    title: "PingPanda",
    description:
      "A Modern Fullstack Event Monitoring SaaS via Discord. "
      + "Next.js, Clerk, Stripe, Discord API, Neon, Prisma ORM.",
    url: "https://saas-josh.vercel.app/",
  },
  {
    id: "my-portfolio",
    img: "my-portfolio-700.webp",
    title: "This Very Portfolio",
    type: "RECURSIVE META-DISPATCH // OUROBOROS",
    lead: "The site you are currently reading.",
    description:
      "A self-referential case study. Built with warm paper textures, "
      + "halftone dot grids, dynamic comic tilts, and a synced LaTeX CV dossier. "
      + "Like a snake eating its own tail, yes, this card links to itself.",
    tags: ["Gatsby 5", "Graphic Theme", "Recursion", "XeLaTeX"],
    url: "#top",
    repo: "https://github.com/GBrachetta/my-portfolio",
  },
  {
    id: "guillermo-brachetta",
    img: "guillermo-brachetta.webp",
    title: "Guillermo Brachetta",
    type: "BAROQUE ATELIER & STORE",
    lead: "My other life, online.",
    description:
      "My performance, teaching, and research platform, with audio previews "
      + "and a recording shop featuring live Stripe payments. "
      + "Built with Astro, Tailwind CSS, and server-side checkout.",
    tags: ["Astro", "Tailwind CSS", "Stripe"],
    url: "https://www.brachetta.com/",
  },
  {
    id: "nina-przewozniak",
    img: "nina-przewozniak.webp",
    title: "Nina Przewoźniak",
    type: "VIOLIN VIRTUOSO SHOWCASE",
    lead: "A stage for the virtuoso.",
    description:
      "A vibrant digital showcase for violinist Nina Przewoźniak. "
      + "Built with Next.js, fluid Tailwind styling, and smooth Framer Motion choreography.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://nina-przewozniak.com",
  },
  {
    id: "parfumier",
    img: "parfumier.webp",
    title: "Parfumier",
    type: "CURATED SCENT ARCHIVE",
    lead: "Curated scent exploration.",
    description:
      "A fragrance discovery hub and community review archive. "
      + "Full-stack Python architecture with MongoDB search and collection curation.",
    tags: ["Flask", "MongoDB", "Full-Stack"],
    url: "https://parfumier.herokuapp.com/",
    repo: "https://github.com/GBrachetta/Parfumier",
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Shall we work together? Awesome!",
  btn: "Let's talk",
  email: "brachetta@me.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/brachetta",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/guillermo-brachetta/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/GBrachetta",
    },
  ],
};
