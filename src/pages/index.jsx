import React from "react";
import PropTypes from "prop-types";
import { projectsData, aboutData } from "../data";
import portrait from "../images/me-700.webp";
import portrait2x from "../images/me-1200.webp";
import aboutPortrait from "../images/me-about-700.webp";
import aboutPortrait2x from "../images/me-about-1200.webp";
import whiteQueen from "../images/white-queen-700.webp";
import whiteQueen2x from "../images/white-queen-1200.webp";
import dice from "../images/mozarts-dice-game-700.webp";
import dice2x from "../images/mozarts-dice-game-1200.webp";
import nina from "../images/nina-przewozniak-700.webp";
import nina2x from "../images/nina-przewozniak-1200.webp";
import parfumier from "../images/parfumier-700.webp";
import parfumier2x from "../images/parfumier-1200.webp";
import musician from "../images/guillermo-brachetta-700.webp";
import musician2x from "../images/guillermo-brachetta-1200.webp";
import menno from "../images/menno-van-delft-700.webp";
import menno2x from "../images/menno-van-delft-1200.webp";
import portfolioImage from "../images/portfolio-og.png";
import "../style/graphic.scss";

const Arrow = ({ direction }) => (
  <svg
    className={`link-arrow link-arrow--${direction}`}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M4 20 C9 15 14 10 20 4 M8 4 Q14 3 20 4 Q21 10 20 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Arrow.propTypes = {
  direction: PropTypes.oneOf(["external", "down", "up"]),
};

Arrow.defaultProps = {
  direction: "external",
};

const selected = [
  {
    ...projectsData.find((project) => project.id === "menno-van-delft"),
    image: menno,
    srcSet: `${menno} 700w, ${menno2x} 1200w`,
  },
  {
    ...projectsData.find((project) => project.id === "guillermo-brachetta"),
    image: musician,
    srcSet: `${musician} 700w, ${musician2x} 1200w`,
  },
  {
    ...projectsData.find((project) => project.id === "parfumier"),
    image: parfumier,
    srcSet: `${parfumier} 700w, ${parfumier2x} 1200w`,
  },
  {
    ...projectsData.find((project) => project.id === "white-queen"),
    image: whiteQueen,
    srcSet: `${whiteQueen} 700w, ${whiteQueen2x} 1200w`,
  },
  {
    ...projectsData.find((project) => project.id === "mozarts-dice-game"),
    image: dice,
    srcSet: `${dice} 700w, ${dice2x} 1200w`,
  },
  {
    ...projectsData.find((project) => project.id === "nina-przewozniak"),
    image: nina,
    srcSet: `${nina} 700w, ${nina2x} 1200w`,
  },
];

const IndexPage = () => (
  <>
    <a className="skip-link" href="#work">Skip to work</a>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Guillermo Brachetta home">GB</a>
      <span className="header-note">WEB DEVELOPER. BAROQUE PERFORMER.</span>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="mailto:brachetta@me.com">
          Say hello
          <span aria-hidden="true"><Arrow /></span>
        </a>
      </nav>
    </header>
    <main id="top">
      <section className="intro" aria-labelledby="intro-title">
        <div className="intro-kicker">
          <span className="status-dot" aria-hidden="true" />
          {" "}
          GUILLERMO BRACHETTA
          {" "}
          <span className="edition">WEB DEVELOPMENT / SELECTED WORK</span>
        </div>
        <div className="graphic-hero">
          <div className="graphic-title">
            <h1 id="intro-title">
              Built with
              <br />
              <span className="character-word">
                character
                <span className="period">.</span>
              </span>
            </h1>
            <span className="hero-stamp">
              CODE &amp;
              <br />
              CURIOSITY
              <span aria-hidden="true">✳</span>
            </span>
          </div>
          <figure className="graphic-portrait">
            <img
              src={portrait}
              srcSet={`${portrait} 400w, ${portrait2x} 800w`}
              sizes="(max-width: 768px) 350px, 400px"
              alt="Guillermo Brachetta"
              width="400"
              height="584"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>
              GUILLERMO BRACHETTA
              <br />
              <span>Usually at a keyboard.</span>
            </figcaption>
          </figure>
        </div>
        <div className="intro-bottom">
          <p>
            Websites, applications, and a point of view.
            <br />
            <span>I’m Guillermo — developer and baroque performer.</span>
          </p>
          <a className="round-link" href="#work">
            <span>SHOW ME THE WORK</span>
            <span aria-hidden="true"><Arrow direction="down" /></span>
          </a>
        </div>
        <div className="hero-rule">
          <span>REACT / NEXT.JS / DJANGO</span>
          <span>
            SCROLL TO EXPLORE
            <Arrow direction="down" />
          </span>
        </div>
      </section>
      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <h2 id="work-title">
            Less theory.
            <br />
            <span className="heading-solid">
              More
              <em> doing.</em>
            </span>
          </h2>
          <p>
            SELECTED WORK / 01—
            {String(selected.length).padStart(2, "0")}
            <br />
            Websites. Experiments. Things that work.
          </p>
        </div>
        {selected.map((project, index) => (
          <article className="work-card" key={project.id}>
            <a
              className="work-image"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} (opens in a new tab)`}
            >
              <img
                src={project.image}
                srcSet={project.srcSet}
                sizes="(max-width: 900px) 100vw, 700px"
                alt={`${project.title} website preview`}
                loading="lazy"
                decoding="async"
                width="700"
                height="424"
              />
              <span className="image-arrow" aria-hidden="true"><Arrow /></span>
            </a>
            <div className="work-details">
              <span className="eyebrow">
                {String(index + 1).padStart(2, "0")}
                {" "}
                /
                {" "}
                {project.type}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website (opens in a new tab)`}
                >
                  Visit website
                  <Arrow />
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source on GitHub (opens in a new tab)`}
                  >
                    Source code
                    <Arrow />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
        <a
          className="github-link"
          href="https://github.com/GBrachetta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore more on GitHub (opens in a new tab)"
        >
          Explore more on GitHub
          <Arrow />
        </a>
      </section>
      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-photo">
          <img
            src={aboutPortrait}
            srcSet={`${aboutPortrait} 500w, ${aboutPortrait2x} 900w`}
            sizes="(max-width: 768px) 100vw, 500px"
            alt="Guillermo Brachetta"
            loading="lazy"
            decoding="async"
            width="500"
            height="667"
          />
          <span>THE PERSON BEHIND THE KEYBOARD(S).</span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">A NOTE ABOUT ME</span>
          <h2 id="about-title">
            Different disciplines.
            <br />
            <em>Same curiosity.</em>
          </h2>
          <p>
            I’m Guillermo, a web developer and baroque performer. I work with React, Next.js, and
            Django to turn ideas into websites and applications.
          </p>
          <p>
            Music and development both give me room to explore, solve problems, and care about the
            details. I enjoy the work that happens between an idea and something that feels right.
          </p>
          <a
            className="text-link"
            href={aboutData.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Take a look at my CV (PDF, opens in a new tab)"
          >
            Take a look at my CV
            <Arrow />
          </a>
        </div>
      </section>
      <section className="contact-section" aria-labelledby="contact-title">
        <span className="eyebrow">GOT SOMETHING IN MIND?</span>
        <h2 id="contact-title">
          Have an idea?
          <br />
          <em>Let’s build it.</em>
        </h2>
        <a className="contact-email" href="mailto:brachetta@me.com">
          brachetta@me.com
          <span aria-hidden="true"><Arrow /></span>
        </a>
      </section>
    </main>
    <footer className="site-footer">
      <a className="footer-signature" href="#top" aria-label="Guillermo Brachetta — back to top">
        Guillermo
        <br />
        <em>Brachetta.</em>
        <span aria-hidden="true"><Arrow /></span>
      </a>
      <div className="footer-bottom">
        <span>
          ©
          {new Date().getFullYear()}
          {" "}
          Guillermo Brachetta
        </span>
        <div>
          <a
            href="https://www.linkedin.com/in/guillermo-brachetta/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Guillermo Brachetta on LinkedIn (opens in a new tab)"
          >
            LinkedIn
            <Arrow />
          </a>
          <a
            href="https://github.com/GBrachetta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Guillermo Brachetta on GitHub (opens in a new tab)"
          >
            GitHub
            <Arrow />
          </a>
          <a href="#top" aria-label="Back to top of page">
            Back to top
            <Arrow direction="up" />
          </a>
        </div>
      </div>
    </footer>
  </>
);

export default IndexPage;

export const Head = () => {
  const siteUrl = "https://www.gbrachetta.com";
  const title = "Guillermo Brachetta — Developer & Baroque Performer";
  const description = (
    "Websites, applications, and a different perspective. Selected development "
    + "work by Guillermo Brachetta, web developer and baroque performer."
  );
  const ogImageUrl = `${siteUrl}${portfolioImage}`;

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#f1f0e9" />
      <link rel="canonical" href={`${siteUrl}/`} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="preload"
        as="image"
        href={portrait}
        type="image/webp"
        fetchPriority="high"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content="Guillermo Brachetta portfolio preview" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@brachetta" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </>
  );
};
