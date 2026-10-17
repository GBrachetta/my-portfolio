import React from "react";
import { projectsData, aboutData } from "../data";
import portrait from "../images/me.png";
import whiteQueen from "../images/project4.jpg";
import dice from "../images/project.jpg";
import nina from "../images/project6.jpg";
import "../style/editorial.scss";

const selected = [
  { ...projectsData[0], image: whiteQueen, type: "01 / CLIENT WEBSITE", description: "A clear digital presence for a Dutch safety consultancy. Branding, development, and a way to start the conversation." },
  { ...projectsData[1], image: dice, type: "02 / INTERACTIVE EXPERIMENT", description: "An eighteenth-century idea, a browser, and a roll of the dice. An interactive musical game where performance meets programming." },
  { ...projectsData[5], image: nina, type: "03 / ARTIST WEBSITE", description: "A digital stage for Nina Przewoźniak. Built with Next.js, Tailwind CSS, and Framer Motion." },
];

export default function IndexPage() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to work</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Guillermo Brachetta home">Guillermo<br /><span>Brachetta</span></a>
        <span className="header-note">DEVELOPMENT · MUSIC · CURIOSITY</span>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="mailto:brachetta@me.com">Say hello <span aria-hidden="true">↗</span></a></nav>
      </header>
      <main id="top">
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-kicker">INDEPENDENT WEB DEVELOPER <span className="edition">A SELECTED PORTFOLIO</span></div>
          <div className="editorial-hero"><div><h1 id="intro-title">Thoughtfully built.<br /><em>Distinctly yours.</em></h1><p className="hero-caption">Websites &amp; applications<br />by Guillermo Brachetta.</p></div><figure className="hero-portrait"><img src={portrait} alt="Guillermo Brachetta" /><figcaption>01 / DEVELOPER &amp; BAROQUE PERFORMER</figcaption></figure></div>
          <div className="intro-bottom"><p>A developer’s curiosity. A performer’s attention to detail.<br /><span>I turn ideas into considered digital experiences.</span></p><a className="round-link" href="#work"><span>Explore the work</span><span aria-hidden="true">↓</span></a></div>
          <div className="hero-rule"><span>REACT / NEXT.JS / DJANGO</span><span>FORM, FUNCTION & A LITTLE PERSONALITY</span></div>
        </section>
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title"><em>Selected work</em><span> / 01—03</span></h2><p>A few different briefs.<br />The same care for the details.</p></div>
          {selected.map((project) => <article className="work-card" key={project.title}>
            <a className="work-image" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}><img src={project.image} alt={`${project.title} website preview`} loading="lazy" /><span className="image-arrow" aria-hidden="true">↗</span></a>
            <div className="work-details"><span className="eyebrow">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-links"><a href={project.url} target="_blank" rel="noopener noreferrer">Visit website ↗</a>{project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">Source code ↗</a>}</div></div>
          </article>)}
          <a className="github-link" href="https://github.com/GBrachetta" target="_blank" rel="noopener noreferrer">Explore more on GitHub ↗</a>
        </section>
        <section className="about-section" id="about" aria-labelledby="about-title"><div className="about-photo"><img src={portrait} alt="Guillermo Brachetta" loading="lazy" /><span>GUILLERMO BRACHETTA / A DIFFERENT PERSPECTIVE</span></div><div className="about-copy"><span className="eyebrow">BEYOND THE SCREEN</span><h2 id="about-title">A practice in<br /><em>paying attention.</em></h2><p>I’m Guillermo, a web developer and baroque performer. I work with React, Next.js, and Django to turn ideas into websites and applications.</p><p>Music and development both give me room to explore, solve problems, and care about the details. I enjoy the work that happens between an idea and something that feels right.</p><a className="text-link" href={aboutData.resume} target="_blank" rel="noopener noreferrer">Take a look at my CV ↗</a></div></section>
        <section className="contact-section" aria-labelledby="contact-title"><span className="eyebrow">LET’S BEGIN A CONVERSATION</span><h2 id="contact-title">Your next idea,<br /><em>beautifully realised.</em></h2><a className="contact-email" href="mailto:brachetta@me.com">brachetta@me.com <span aria-hidden="true">↗</span></a></section>
      </main>
      <footer className="site-footer"><a className="footer-signature" href="#top" aria-label="Guillermo Brachetta — back to top">Guillermo<br /><em>Brachetta.</em><span aria-hidden="true">↗</span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Guillermo Brachetta</span><div><a href="https://www.linkedin.com/in/guillermo-brachetta/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/GBrachetta" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></div></div></footer>
    </>
  );
}

export const Head = () => <><html lang="en" /><title>Guillermo Brachetta — Developer &amp; Baroque Performer</title><meta name="description" content="Websites, applications, and a different perspective. Selected development work by Guillermo Brachetta, web developer and baroque performer." /><meta name="theme-color" content="#f4f0e8" /></>;
