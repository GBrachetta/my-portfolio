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
    id: "menno-van-delft",
    img: "menno-van-delft.webp",
    title: "Menno van Delft",
    type: "ARTIST WEBSITE",
    description:
      "A multilingual website for harpsichordist and clavichordist Menno van Delft, "
      + "with audio previews, a recordings catalogue, and a press kit. Built with "
      + "Astro and Sanity.",
    url: "https://www.mennovandelft.com/",
  },
  {
    id: "white-queen",
    img: "white-queen.webp",
    title: "White Queen",
    type: "CLIENT WEBSITE",
    description:
      "A clear digital presence for a Dutch safety consultancy. Branding, "
      + "development, and a way to start the conversation.",
    url: "https://www.whitequeen.nl/",
  },
  {
    id: "mozarts-dice-game",
    img: "mozarts-dice-game.webp",
    title: "Mozart's Dice Game",
    type: "INTERACTIVE EXPERIMENT",
    description:
      "An eighteenth-century idea, a browser, and a roll of the dice. An "
      + "interactive musical game where performance meets programming.",
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
    img: "portfolio.png",
    title: "My Portfolio",
    description: "My Modern, Minimalistic Portfolio. Built with Gatsby.",
    repo: "https://github.com/GBrachetta/my-portfolio",

  },
  {
    id: "guillermo-brachetta",
    img: "guillermo-brachetta.webp",
    title: "Guillermo Brachetta",
    type: "ARTIST WEBSITE & SHOP",
    description:
      "My other life, online. A Django website for my work as a baroque "
      + "performer, bringing together recordings, events, a gallery, and an "
      + "online shop.",
    url: "https://guillermo-brachetta.herokuapp.com/",
    repo: "https://github.com/GBrachetta/guillermo",
  },
  {
    id: "nina-przewozniak",
    img: "nina-przewozniak.webp",
    title: "Nina Przewoźniak",
    type: "ARTIST WEBSITE",
    description:
      "A digital stage for Nina Przewoźniak. Built with Next.js, Tailwind CSS, "
      + "and Framer Motion.",
    url: "https://nina-przewozniak.com",
  },
  {
    id: "parfumier",
    img: "parfumier.webp",
    title: "Parfumier",
    type: "FULL-STACK APPLICATION",
    description:
      "A place to discover fragrances and share reviews. Built with Flask and "
      + "MongoDB, with user accounts, search, and tools for managing the perfume "
      + "collection.",
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
