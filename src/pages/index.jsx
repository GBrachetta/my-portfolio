import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { projectsData } from "../data";
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
import blog from "../images/blog-700.webp";
import blog2x from "../images/blog-1200.webp";
import portfolioImage from "../images/portfolio-og.png";
import { playToccataFlourish } from "../utils/audio";
import Harpsichord from "../components/Harpsichord";
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
    ...projectsData.find((project) => project.id === "blog"),
    image: blog,
    srcSet: `${blog} 700w, ${blog2x} 1200w`,
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

const TOPICS = [
  "Web Application",
  "Baroque Performance",
  "Harpsichord Advice",
  "Just Saying Hello",
];

const ContactPostcard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: TOPICS[0],
    message: "",
    botField: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [toccataBubble, setToccataBubble] = useState(false);
  const [isPlucking, setIsPlucking] = useState(false);

  const handleStampClick = () => {
    if (isPlucking) return;
    setIsPlucking(true);
    playToccataFlourish(415);
    setToccataBubble(true);
    setTimeout(() => setIsPlucking(false), 2400);
    setTimeout(() => setToccataBubble(false), 4200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicSelect = (t) => {
    setFormData((prev) => ({ ...prev, topic: t }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Transmission interrupted. Please write directly to brachetta@me.com");
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        topic: TOPICS[0],
        message: "",
        botField: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage("Could not reach the dispatch service. Please write directly to brachetta@me.com");
    }
  };

  return (
    <div className="comic-postcard" role="region" aria-label="Courier Dispatch Postcard">
      <div className="postcard-header">
        <div className="postcard-kicker">
          <span className="airmail-badge">PRIORITY AIR MAIL</span>
          <span className="dispatch-no">DISPATCH NO. 0415</span>
        </div>
        <div className="postcard-stamp-area">
          <div className="cancellation-stamp" aria-hidden="true">
            <svg viewBox="0 0 110 32" className="wavy-lines">
              <path d="M 0 8 Q 12 0 24 8 T 48 8 T 72 8 T 96 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 0 16 Q 12 8 24 16 T 48 16 T 72 16 T 96 16" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 0 24 Q 12 16 24 24 T 48 24 T 72 24 T 96 24" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="stamp-city">AMSTERDAM · A415</span>
          </div>
          <button
            type="button"
            className={`postage-stamp postage-stamp--interactive ${isPlucking ? "is-plucking" : ""}`}
            onClick={handleStampClick}
            title="Click to play Baroque flourish"
            aria-label="Play Baroque Harpsichord flourish"
          >
            <span className="stamp-value">415 Hz</span>
            <svg
              viewBox="0 0 24 24"
              className="stamp-icon"
              width="26"
              height="26"
              fill="none"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
              <line x1="7" y1="4" x2="7" y2="20" stroke="currentColor" strokeWidth="1.5" />
              <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
              <line x1="17" y1="4" x2="17" y2="20" stroke="currentColor" strokeWidth="1.5" />
              <rect x="5.5" y="4" width="3" height="9" fill="currentColor" />
              <rect x="10.5" y="4" width="3" height="9" fill="currentColor" />
              <rect x="15.5" y="4" width="3" height="9" fill="currentColor" />
            </svg>
            <span className="stamp-caption">{isPlucking ? "PLUCKING..." : "KEYBOARD ♫"}</span>
            {toccataBubble && (
              <span className="comic-stamp-bubble" role="status">
                Quill: calibrated. Coffee: brewed. ☕
              </span>
            )}
          </button>
        </div>
      </div>

      <form className="postcard-body" onSubmit={handleSubmit}>
        <div className="visually-hidden" aria-hidden="true">
          <label htmlFor="postcard-bot-field">
            Leave this empty
            <input
              type="text"
              id="postcard-bot-field"
              name="botField"
              value={formData.botField}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />
          </label>
        </div>

        <div className="postcard-left">
          <span className="postcard-field-label">THE FREQUENCY / TOPIC</span>
          <div className="topic-pills" role="radiogroup" aria-label="Select message topic">
            {TOPICS.map((t) => (
              <button
                type="button"
                key={t}
                className={`topic-pill ${formData.topic === t ? "is-active" : ""}`}
                onClick={() => handleTopicSelect(t)}
                role="radio"
                aria-checked={formData.topic === t}
              >
                {t}
              </button>
            ))}
          </div>

          <label
            className="postcard-field-label postcard-field-label--message"
            htmlFor="postcard-message"
          >
            <span>YOUR MESSAGE / PROPOSITION</span>
            <div className="ruled-paper-wrapper">
              <textarea
                id="postcard-message"
                name="message"
                required
                rows="5"
                placeholder="Dear Guillermo, I have a project / proposition / question about..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === "sending"}
              />
            </div>
          </label>
        </div>

        <div className="postcard-divider" aria-hidden="true" />

        <div className="postcard-right">
          <div className="postcard-field">
            <label className="postcard-field-label" htmlFor="postcard-name">
              <span>FROM (YOUR NAME)</span>
              <input
                type="text"
                id="postcard-name"
                name="name"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "sending"}
              />
            </label>
          </div>

          <div className="postcard-field">
            <label className="postcard-field-label" htmlFor="postcard-email">
              <span>RETURN DISPATCH (EMAIL)</span>
              <input
                type="email"
                id="postcard-email"
                name="email"
                required
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "sending"}
              />
            </label>
          </div>

          <div className="postcard-destination-stamp">
            <span className="destination-to">DELIVER TO:</span>
            <strong>Guillermo Brachetta</strong>
            <span>Usually at a keyboard</span>
            <span>Melick, NL</span>
          </div>

          <button
            type="submit"
            className="dispatch-button"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <span>TRANSMITTING FREQUENCIES...</span>
            ) : (
              <>
                <span>DISPATCH MESSAGE</span>
                <span aria-hidden="true">✳</span>
              </>
            )}
          </button>

          <div className="form-feedback" aria-live="polite">
            {status === "success" && (
              <p className="feedback-success">
                ✓ Dispatched! No carrier pigeons were harmed. I’ll reply shortly.
              </p>
            )}
            {status === "error" && (
              <p className="feedback-error">
                <span>⚠ </span>
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

const IndexPage = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);

  return (
    <>
      <a className="skip-link" href="#work">Skip to work</a>
      <header className="site-header">
        <a className="wordmark-group" href="#top" aria-label="Guillermo Brachetta home">
          <span className="wordmark">GB</span>
          <span className="site-title-name">GUILLERMO BRACHETTA</span>
        </a>
        <span className="header-note">Web performer. Baroque developer.</span>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a
            href="https://blog.gbrachetta.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Guillermo's Blog (opens in a new tab)"
          >
            Blog
            <span aria-hidden="true"><Arrow /></span>
          </a>
          <a href="#contact">
            Say hello
            <span aria-hidden="true"><Arrow /></span>
          </a>
        </nav>
      </header>
      <main id="top">
        <section className="intro" aria-labelledby="intro-title">
          <div className="graphic-hero">
            <div className="graphic-title">
              <h1 id="intro-title">
                Built with
                <br />
                <span className="character-word" aria-hidden="true">
                  character
                  <span className="period">.</span>
                </span>
                <span className="visually-hidden">character.</span>
              </h1>
              <span className="hero-stamp" title="Craft & Code">
                CODE &amp;
                <br />
                CURIOSITY
                <span className="stamp-star" aria-hidden="true">✳</span>
              </span>
            </div>
            <figure className="graphic-portrait">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={portrait}
                />
                <source
                  media="(min-width: 769px)"
                  srcSet={`${portrait} 400w, ${portrait2x} 800w`}
                  sizes="400px"
                />
                <img
                  src={portrait}
                  alt="Guillermo Brachetta"
                  width="400"
                  height="584"
                  fetchpriority="high"
                  decoding="async"
                />
              </picture>
              <figcaption className="portrait-caption">
                <span className="caption-tagline">“Usually at a keyboard.”</span>
                <button
                  type="button"
                  className="keyboard-toggle-badge"
                  onClick={() => setShowKeyboard((prev) => !prev)}
                  aria-expanded={showKeyboard}
                  aria-controls="harpsichord-strip"
                  title="Toggle the mini Baroque Harpsichord"
                >
                  <span aria-hidden="true">🎹</span>
                  {" "}
                  <span>{showKeyboard ? "Hide" : "Keyboard"}</span>
                </button>
              </figcaption>
            </figure>
          </div>
          {showKeyboard && (
            <div id="harpsichord-strip" className="hero-harpsichord-wrapper">
              <Harpsichord onClose={() => setShowKeyboard(false)} />
            </div>
          )}
          <div className="intro-bottom">
            <p className="intro-bio">
              <strong className="intro-bio-lead">Websites, applications, and a point of view.</strong>
              <br />
              <span>
                I’m Guillermo
                <span className="bio-name-full"> Brachetta</span>
                , web developer and baroque harpsichordist.
              </span>
            </p>
            <div className="intro-actions">
              <a className="round-link round-link--work" href="#work">
                <span>SHOW ME THE WORK</span>
                <span className="btn-arrow" aria-hidden="true"><Arrow direction="down" /></span>
              </a>
              <a
                className="round-link round-link--blog"
                href="https://blog.gbrachetta.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Guillermo's Blog (opens in a new tab)"
              >
                <span>VISIT THE BLOG</span>
                <span className="btn-arrow" aria-hidden="true"><Arrow /></span>
              </a>
            </div>
          </div>
          <div className="hero-rule">
            <div className="hero-tech-strip" aria-label="Core technologies">
              <span className="hero-tech-tag">REACT</span>
              <span className="hero-tech-tag">NEXT.JS</span>
              <span className="hero-tech-tag">ASTRO</span>
              <span className="hero-tech-tag">DJANGO</span>
              <span className="hero-tech-tag">WEB AUDIO</span>
            </div>
            <a className="hero-scroll-btn" href="#work">
              <span>SCROLL TO EXPLORE</span>
              <Arrow direction="down" />
            </a>
          </div>
        </section>
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">
              Less theory.
              <br />
              <span className="heading-solid">
                More
                {" "}
                <em>doing.</em>
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
                <span className="comic-issue-stamp" aria-hidden="true">
                  ISSUE #
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="card-tape-corner" aria-hidden="true" />
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={project.image}
                  />
                  <source
                    media="(min-width: 769px)"
                    srcSet={project.srcSet}
                    sizes="(max-width: 1200px) 55vw, 650px"
                  />
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    decoding="async"
                    width="700"
                    height="424"
                  />
                </picture>
                <span className="image-arrow" aria-hidden="true"><Arrow /></span>
              </a>
              <div className="work-details">
                <span className="eyebrow">
                  <span className="eyebrow-dispatch">DISPATCH</span>
                  <span className="eyebrow-sep" aria-hidden="true">✦</span>
                  <span className="eyebrow-type">{project.type}</span>
                </span>
                <h3>{project.title}</h3>
                <p className="work-description">
                  {project.lead && (
                    <strong className="work-lead">
                      {project.lead}
                      {" "}
                    </strong>
                  )}
                  {project.description}
                </p>
                {project.tags && (
                  <div className="project-tags" aria-label="Key technologies">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="project-links">
                  <a
                    className="project-btn project-btn--primary"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} website (opens in a new tab)`}
                  >
                    <span>VISIT WEBSITE</span>
                    <Arrow />
                  </a>
                  {project.repo && (
                    <a
                      className="project-btn project-btn--secondary"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub (opens in a new tab)`}
                    >
                      <span>SOURCE CODE</span>
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
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={aboutPortrait}
              />
              <source
                media="(min-width: 769px)"
                srcSet={`${aboutPortrait} 500w, ${aboutPortrait2x} 900w`}
                sizes="500px"
              />
              <img
                src={aboutPortrait}
                alt="Guillermo Brachetta"
                loading="lazy"
                decoding="async"
                width="500"
                height="670"
              />
            </picture>
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
            <div className="about-actions">
              <Link
                className="text-link"
                to="/cv"
                aria-label="Take a look at my CV dossier (opens interactive curriculum vitae)"
              >
                Take a look at my CV
                <Arrow />
              </Link>
              <a
                className="text-link"
                href="https://blog.gbrachetta.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read Guillermo's blog (opens in a new tab)"
              >
                Read my blog
                <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <span className="eyebrow">GOT SOMETHING IN MIND?</span>
          <h2 id="contact-title">
            Have an idea?
            <br />
            <em aria-hidden="true">Let’s build it.</em>
            <span className="visually-hidden">Let’s build it.</span>
          </h2>
          <ContactPostcard />
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
              href="https://blog.gbrachetta.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Guillermo Brachetta's blog (opens in a new tab)"
            >
              Blog
              <Arrow />
            </a>
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
};

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
      <link
        rel="preload"
        as="image"
        href={portrait}
        type="image/webp"
        fetchpriority="high"
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
