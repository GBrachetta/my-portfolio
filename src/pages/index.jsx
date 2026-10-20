import React from "react";
import { projectsData, aboutData } from "../data";
import portrait from "../images/me.png";
import aboutPortrait from "../images/me-about.jpeg";
import whiteQueen from "../images/project4.jpg";
import dice from "../images/project.jpg";
import nina from "../images/project6.jpg";
import parfumier from "../images/parfumier.png";
import musician from "../images/guillermo-brachetta.png";
import "../style/graphic.scss";

const Arrow = ({ direction = "external" }) => (
  <svg className={`link-arrow link-arrow--${direction}`} viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false">
    <path d="M4 20 C9 15 14 10 20 4 M8 4 Q14 3 20 4 Q21 10 20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const selected = [
  { ...projectsData[0], image: whiteQueen, type: "CLIENT WEBSITE", description: "A clear digital presence for a Dutch safety consultancy. Branding, development, and a way to start the conversation." },
  { ...projectsData[1], image: dice, type: "INTERACTIVE EXPERIMENT", description: "An eighteenth-century idea, a browser, and a roll of the dice. An interactive musical game where performance meets programming." },
  { ...projectsData[5], image: nina, type: "ARTIST WEBSITE", description: "A digital stage for Nina Przewoźniak. Built with Next.js, Tailwind CSS, and Framer Motion." },
  { ...projectsData.find((project) => project.id === "parfumier"), image: parfumier, preserveScreenshot: true, type: "FULL-STACK APPLICATION", description: "A place to discover fragrances and share reviews. Built with Flask and MongoDB, with user accounts, search, and tools for managing the perfume collection." },
  { ...projectsData.find((project) => project.title === "The Artist"), title: "Guillermo Brachetta", image: musician, preserveScreenshot: true, type: "ARTIST WEBSITE & SHOP", description: "My other life, online. A Django website for my work as a baroque performer, bringing together recordings, events, a gallery, and an online shop." },
];

export default function IndexPage() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to work</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Guillermo Brachetta home">GB</a>
        <span className="header-note">WEB DEVELOPER. BAROQUE PERFORMER.</span>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="mailto:brachetta@me.com">Say hello <span aria-hidden="true"><Arrow /></span></a></nav>
      </header>
      <main id="top">
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-kicker"><span className="status-dot" /> GUILLERMO BRACHETTA <span className="edition">WEB DEVELOPMENT / SELECTED WORK</span></div>
          <div className="graphic-hero"><div className="graphic-title"><h1 id="intro-title">Built with<br /><span className="character-word">character<span className="period">.</span></span></h1><span className="hero-stamp">CODE &amp;<br />CURIOSITY <span aria-hidden="true">✳</span></span></div><figure className="graphic-portrait"><img src={portrait} alt="Guillermo Brachetta" /><figcaption>GUILLERMO BRACHETTA<br /><span>Usually at a keyboard.</span></figcaption></figure></div>
          <div className="intro-bottom"><p>Websites, applications, and a point of view.<br /><span>I’m Guillermo — developer and baroque performer.</span></p><a className="round-link" href="#work"><span>SHOW ME THE WORK</span><span aria-hidden="true"><Arrow direction="down" /></span></a></div>
          <div className="hero-rule"><span>REACT / NEXT.JS / DJANGO</span><span>SCROLL TO EXPLORE <Arrow direction="down" /></span></div>
        </section>
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title">Less theory.<br /><span className="heading-solid">More <em>doing.</em></span></h2><p>SELECTED WORK / 01—{String(selected.length).padStart(2, "0")}<br />Websites. Experiments. Things that work.</p></div>
          {selected.map((project, index) => <article className="work-card" key={project.title}>
            <a className={`work-image${project.preserveScreenshot ? " work-image--full" : ""}`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}><img src={project.image} alt={`${project.title} website preview`} loading="lazy" /><span className="image-arrow" aria-hidden="true"><Arrow /></span></a>
            <div className="work-details"><span className="eyebrow">{String(index + 1).padStart(2, "0")} / {project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-links"><a href={project.url} target="_blank" rel="noopener noreferrer">Visit website <Arrow /></a>{project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">Source code <Arrow /></a>}</div></div>
          </article>)}
          <a className="github-link" href="https://github.com/GBrachetta" target="_blank" rel="noopener noreferrer">Explore more on GitHub <Arrow /></a>
        </section>
        <section className="about-section" id="about" aria-labelledby="about-title"><div className="about-photo"><img src={aboutPortrait} alt="Guillermo Brachetta" loading="lazy" /><span>THE PERSON BEHIND THE KEYBOARD(S).</span></div><div className="about-copy"><span className="eyebrow">A NOTE ABOUT ME</span><h2 id="about-title">Different disciplines.<br /><em>Same curiosity.</em></h2><p>I’m Guillermo, a web developer and baroque performer. I work with React, Next.js, and Django to turn ideas into websites and applications.</p><p>Music and development both give me room to explore, solve problems, and care about the details. I enjoy the work that happens between an idea and something that feels right.</p><a className="text-link" href={aboutData.resume} target="_blank" rel="noopener noreferrer">Take a look at my CV <Arrow /></a></div></section>
        <section className="contact-section" aria-labelledby="contact-title"><span className="eyebrow">GOT SOMETHING IN MIND?</span><h2 id="contact-title">Have an idea?<br /><em>Let’s build it.</em></h2><a className="contact-email" href="mailto:brachetta@me.com">brachetta@me.com <span aria-hidden="true"><Arrow /></span></a></section>
      </main>
      <footer className="site-footer"><a className="footer-signature" href="#top" aria-label="Guillermo Brachetta — back to top">Guillermo<br /><em>Brachetta.</em><span aria-hidden="true"><Arrow /></span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Guillermo Brachetta</span><div><a href="https://www.linkedin.com/in/guillermo-brachetta/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/GBrachetta" target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href="#top">Back to top <Arrow direction="up" /></a></div></div></footer>
    </>
  );
}

export const Head = () => <><html lang="en" /><title>Guillermo Brachetta — Developer &amp; Baroque Performer</title><meta name="description" content="Websites, applications, and a different perspective. Selected development work by Guillermo Brachetta, web developer and baroque performer." /><meta name="theme-color" content="#f1f0e9" /></>;
