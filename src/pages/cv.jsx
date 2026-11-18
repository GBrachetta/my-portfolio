import React, { useEffect } from "react";
import { Link } from "gatsby";
import { aboutData } from "../data";
import "../style/graphic.scss";

const Arrow = () => (
  <svg
    className="link-arrow"
    viewBox="0 0 24 24"
    width="20"
    height="20"
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

const PrintIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const BackIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CVPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="cv-wrapper">
      {/* Top Floating / Fixed Utility Bar */}
      <nav className="cv-nav-bar" aria-label="CV Quick Actions">
        <div className="cv-nav-container">
          <Link to="/#about" className="cv-btn cv-btn--back">
            <BackIcon />
            <span>BACK TO PORTFOLIO</span>
          </Link>
          <div className="cv-nav-actions">
            <Link
              to="/#contact"
              className="cv-btn cv-btn--contact"
              aria-label="Get in touch via contact postcard on homepage"
            >
              <span>GET IN TOUCH</span>
            </Link>
            <button
              type="button"
              className="cv-btn cv-btn--print"
              onClick={handlePrint}
              aria-label="Print this CV"
            >
              <PrintIcon />
              <span>PRINT PDF</span>
            </button>
            <a
              href={aboutData.resume}
              className="cv-btn cv-btn--download"
              target="_blank"
              rel="noopener noreferrer"
              download="Guillermo-Brachetta-CV.pdf"
              aria-label="Save this CV as PDF"
            >
              <DownloadIcon />
              <span>SAVE AS PDF</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Dossier Container */}
      <main className="cv-page">
        {/* Dossier Header */}
        <header className="cv-header">
          <div className="cv-stamp-kicker">
            <span className="cv-badge">DOSSIER № 01</span>
            <span className="cv-stamp-meta">CURRICULUM VITAE // SPECIAL DISPATCH</span>
          </div>

          <div className="cv-header-grid">
            <div className="cv-header-title">
              <h1 className="cv-name">
                GUILLERMO
                {" "}
                <span className="cv-name-accent">BRACHETTA</span>
              </h1>
              <p className="cv-headline">
                Full-Stack Web Developer · Former Cambridge University Press Editor
                {" · "}
                Concert Harpsichordist
              </p>
            </div>

            <div className="cv-contact-panel">
              <div className="cv-contact-row">
                <span className="cv-label">LOCATION:</span>
                <span className="cv-value">Melick, NL (Remote / Hybrid)</span>
              </div>
              <div className="cv-contact-row">
                <span className="cv-label">EMAIL:</span>
                <a href="mailto:brachetta@me.com" className="cv-link">
                  brachetta@me.com
                </a>
              </div>
              <div className="cv-contact-row">
                <span className="cv-label">PHONE:</span>
                <a href="tel:+31651063002" className="cv-link">
                  +31 6 51063002
                </a>
              </div>
              <div className="cv-contact-row">
                <span className="cv-label">PORTFOLIO:</span>
                <a href="https://gbrachetta.com" className="cv-link">
                  gbrachetta.com
                </a>
              </div>
              <div className="cv-contact-row">
                <span className="cv-label">BLOG:</span>
                <a href="https://blog.gbrachetta.com" className="cv-link">
                  blog.gbrachetta.com
                </a>
              </div>
              <div className="cv-contact-row">
                <span className="cv-label">GITHUB:</span>
                <a
                  href="https://github.com/GBrachetta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-link"
                >
                  github.com/GBrachetta
                </a>
              </div>
              <div className="cv-contact-row">
                <span className="cv-label">LINKEDIN:</span>
                <a
                  href="https://www.linkedin.com/in/guillermo-brachetta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-link"
                >
                  linkedin.com/in/guillermo-brachetta
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Narrative / Superpower Panel */}
        <section className="cv-section cv-section--summary">
          <div className="cv-section-tag">
            <span>FIELD SUMMARY // THE CONVERGENCE</span>
          </div>
          <div className="cv-summary-card">
            <h2 className="cv-summary-lead">
              Where software engineering logic meets 17 years of academic editorial rigor
              {" and musical discipline."}
            </h2>
            <p>
              I build responsive, performant web applications, modern platforms, and bespoke
              digital architectures with React, Next.js, Astro, and Django. Before dedicating my
              full time to software engineering, I spent 17 years as an editor at Cambridge
              University Press, founded an independent printing company, and established an
              international career as a concert harpsichordist and recording artist.
            </p>
            <p>
              That convergence is my engineering advantage: I don’t just write clean code —
              I approach every interface with deep typographic respect, structural clarity,
              uncompromising quality assurance, and the calm required to deliver under pressure.
            </p>
          </div>
        </section>

        {/* Technical Toolkit Grid */}
        <section className="cv-section cv-section--skills">
          <div className="cv-section-tag">
            <span>CAPABILITIES & ARSENAL</span>
          </div>
          <div className="cv-skills-grid">
            <div className="cv-skill-card">
              <h3 className="cv-skill-title">FRONTEND & UI</h3>
              <p className="cv-skill-lead">React · Next.js · Astro · TypeScript</p>
              <ul className="cv-skill-tags">
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & Semantic SEO</li>
                <li>CSS3 / SASS / SCSS</li>
                <li>Tailwind CSS</li>
                <li>Web Audio API</li>
                <li>Responsive Layouts</li>
                <li>WCAG 2.1 Accessibility</li>
              </ul>
            </div>

            <div className="cv-skill-card">
              <h3 className="cv-skill-title">BACKEND & DATA</h3>
              <p className="cv-skill-lead">Python · Django · Node.js · APIs</p>
              <ul className="cv-skill-tags">
                <li>Django REST Framework</li>
                <li>Express.js</li>
                <li>Flask</li>
                <li>PostgreSQL / MySQL</li>
                <li>MongoDB</li>
                <li>GraphQL / REST APIs</li>
                <li>ORM & Data Modeling</li>
              </ul>
            </div>

            <div className="cv-skill-card">
              <h3 className="cv-skill-title">WORKFLOW & SYSTEMS</h3>
              <p className="cv-skill-lead">Git · CI/CD · Tooling · Performance</p>
              <ul className="cv-skill-tags">
                <li>Git & GitHub Workflows</li>
                <li>Vercel, Netlify & Heroku</li>
                <li>Sanity CMS & Headless CMS</li>
                <li>Bash / Linux Scripting</li>
                <li>Lighthouse Optimization</li>
                <li>Technical Documentation</li>
              </ul>
            </div>

            <div className="cv-skill-card">
              <h3 className="cv-skill-title">LANGUAGES & LEADERSHIP</h3>
              <p className="cv-skill-lead">Editorial Rigor · Cross-Functional</p>
              <ul className="cv-skill-tags">
                <li>17 Years Academic Editing</li>
                <li>English (Fluent)</li>
                <li>Spanish (Native)</li>
                <li>Italian (Fluent)</li>
                <li>Dutch (Professional)</li>
                <li>Mentorship & Communication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="cv-section cv-section--experience">
          <div className="cv-section-tag">
            <span>CHRONICLE OF ENGAGEMENTS</span>
          </div>

          <div className="cv-timeline">
            {/* Role 1 */}
            <article className="cv-entry">
              <div className="cv-entry-header">
                <div className="cv-entry-role-group">
                  <h3 className="cv-entry-title">Freelance Full-Stack Web Developer</h3>
                  <span className="cv-entry-company">Self-Employed · Melick, NL</span>
                </div>
                <div className="cv-entry-badge">2020 — PRESENT</div>
              </div>
              <p className="cv-entry-summary">
                Architecting, building, and deploying modern web applications, bespoke client
                showcases, e-commerce platforms, and high-performance digital publications.
              </p>
              <ul className="cv-entry-bullets">
                <li>
                  Engineered custom web applications and portfolios with React, Next.js, Astro,
                  and Django for clients in music, consultancy, and e-commerce.
                </li>
                <li>
                  Developed Menno van Delft (bespoke audio stage & discography with Astro and
                  Sanity CMS) and White Queen (modern consultancy portal with responsive React).
                </li>
                <li>
                  Built Mozart’s Musical Dice Game, an interactive algorithmic generative music
                  laboratory leveraging Web Audio API in vanilla JavaScript.
                </li>
                <li>
                  Published in-depth technical articles on smart-home automation, Astro, and web
                  architecture at blog.gbrachetta.com.
                </li>
              </ul>
            </article>

            {/* Role 2 */}
            <article className="cv-entry">
              <div className="cv-entry-header">
                <div className="cv-entry-role-group">
                  <h3 className="cv-entry-title">
                    Concert Harpsichordist, Conductor & Recording Artist
                  </h3>
                  <span className="cv-entry-company">
                    International Concert Stages & Studios
                  </span>
                </div>
                <div className="cv-entry-badge">2001 — PRESENT</div>
              </div>
              <p className="cv-entry-summary">
                World-class performer specializing in 17th and 18th-century repertoire, directing
                early music ensembles, and producing commercial recordings.
              </p>
              <ul className="cv-entry-bullets">
                <li>
                  Recorded over 12 critically acclaimed commercial CDs and performed in major
                  concert halls across Europe, the Americas, and Asia.
                </li>
                <li>
                  Brings decades of real-time execution, intensive collaboration, complex
                  structural pattern recognition, and focus into software engineering.
                </li>
              </ul>
            </article>

            {/* Role 3 */}
            <article className="cv-entry">
              <div className="cv-entry-header">
                <div className="cv-entry-role-group">
                  <h3 className="cv-entry-title">Editor</h3>
                  <span className="cv-entry-company">
                    Cambridge University Press
                  </span>
                </div>
                <div className="cv-entry-badge">2001 — 2018</div>
              </div>
              <p className="cv-entry-summary">
                17 years directing editorial quality, structural consistency, and typesetting
                standards for one of the world’s most respected academic publishers.
              </p>
              <ul className="cv-entry-bullets">
                <li>
                  Enforced uncompromising standards of accuracy, cross-referencing, and structural
                  integrity across high-level academic and technical manuscripts.
                </li>
                <li>
                  Honed an instinct for visual clarity, typographic hierarchy, and defect-free
                  production that directly powers my frontend engineering today.
                </li>
              </ul>
            </article>

            {/* Role 4 */}
            <article className="cv-entry">
              <div className="cv-entry-header">
                <div className="cv-entry-role-group">
                  <h3 className="cv-entry-title">Account Leader — Palm Computing, Inc.</h3>
                  <span className="cv-entry-company">Sykes Enterprises</span>
                </div>
                <div className="cv-entry-badge">1999 — 2001</div>
              </div>
              <p className="cv-entry-summary">
                Led technical account management, customer support operations, and technical
                escalations during the foundational rise of handheld computing and mobile
                operating systems.
              </p>
            </article>

            {/* Role 5 */}
            <article className="cv-entry">
              <div className="cv-entry-header">
                <div className="cv-entry-role-group">
                  <h3 className="cv-entry-title">Founder & General Manager</h3>
                  <span className="cv-entry-company">Diseño y Gráfica · Rosario, Argentina</span>
                </div>
                <div className="cv-entry-badge">1995 — 1997</div>
              </div>
              <p className="cv-entry-summary">
                Founded and managed a commercial printing and prepress editorial house. Directed
                typography, sales, press production, supply-chain logistics, and client accounts.
              </p>
            </article>
          </div>
        </section>

        {/* Education & Credentials */}
        <section className="cv-section cv-section--education">
          <div className="cv-section-tag">
            <span>EDUCATION & CREDENTIALS</span>
          </div>

          <div className="cv-edu-grid">
            <div className="cv-edu-card">
              <div className="cv-edu-badge">DECEMBER 2020</div>
              <h3 className="cv-edu-title">Diploma in Software Development</h3>
              <p className="cv-edu-school">Code Institute · Dublin, Ireland</p>
              <p className="cv-edu-note">
                <strong>First Class Honours.</strong>
                {" "}
                Full-stack engineering programme covering Python, Flask, Django,
                JavaScript, SQL, and MongoDB.
              </p>
            </div>

            <div className="cv-edu-card">
              <div className="cv-edu-badge">CONSERVATORY DEGREES</div>
              <h3 className="cv-edu-title">
                Bachelor & Master in Historical Music Performance
              </h3>
              <p className="cv-edu-school">
                Koninklijk Conservatorium Den Haag & Conservatorium van Amsterdam
              </p>
              <p className="cv-edu-note">
                Advanced performance, historical acoustics, conducting, and structural analysis.
              </p>
            </div>

            <div className="cv-edu-card">
              <div className="cv-edu-badge">BUSINESS ADMINISTRATION</div>
              <h3 className="cv-edu-title">Bachelor in Business Administration</h3>
              <p className="cv-edu-school">
                Centro de Estudios Latinoamericanos (CEL) · Rosario, Argentina
              </p>
              <p className="cv-edu-note">
                Organizational management, accounting, strategic planning, and commercial law.
              </p>
            </div>

            <div className="cv-edu-card">
              <div className="cv-edu-badge">SECONDARY EDUCATION</div>
              <h3 className="cv-edu-title">Commercial Bachelor</h3>
              <p className="cv-edu-school">Colegio La Salle · Rosario, Argentina</p>
              <p className="cv-edu-note">
                Economics, trade principles, commerce, and mathematics.
              </p>
            </div>
          </div>
        </section>

        {/* Selected Projects Showcase */}
        <section className="cv-section cv-section--projects">
          <div className="cv-section-tag">
            <span>SELECTED PRODUCTION WORK</span>
          </div>

          <div className="cv-projects-table">
            <div className="cv-project-row">
              <div className="cv-project-main">
                <strong className="cv-project-name">Guillermo’s Blog</strong>
                <span className="cv-project-desc">
                  Bilingual dev publication & field notes on automation and web tech
                </span>
              </div>
              <div className="cv-project-stack">Astro · Tailwind · Markdown</div>
              <a
                href="https://blog.gbrachetta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link"
              >
                <span>blog.gbrachetta.com</span>
                {" "}
                <Arrow />
              </a>
            </div>

            <div className="cv-project-row">
              <div className="cv-project-main">
                <strong className="cv-project-name">Menno van Delft</strong>
                <span className="cv-project-desc">
                  Concert artist showcase, audio previews, and discography
                </span>
              </div>
              <div className="cv-project-stack">Astro · Sanity CMS · Audio</div>
              <a
                href="https://www.mennovandelft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link"
              >
                <span>mennovandelft.com</span>
                {" "}
                <Arrow />
              </a>
            </div>

            <div className="cv-project-row">
              <div className="cv-project-main">
                <strong className="cv-project-name">White Queen</strong>
                <span className="cv-project-desc">
                  Safety consultancy corporate platform & client onboarding
                </span>
              </div>
              <div className="cv-project-stack">React · SCSS · Modern UI</div>
              <a
                href="https://www.whitequeen.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link"
              >
                <span>whitequeen.nl</span>
                {" "}
                <Arrow />
              </a>
            </div>

            <div className="cv-project-row">
              <div className="cv-project-main">
                <strong className="cv-project-name">Mozart’s Musical Dice Game</strong>
                <span className="cv-project-desc">
                  18th-century algorithmic dice puzzle game in the browser
                </span>
              </div>
              <div className="cv-project-stack">Web Audio API · Vanilla JS</div>
              <a
                href="https://new-musical-dice.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link"
              >
                <span>new-musical-dice.vercel.app</span>
                {" "}
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* Bottom Contact Callout */}
        <section className="cv-contact-cta">
          <div className="cv-cta-card">
            <h2 className="cv-cta-title">HAVE A PROJECT OR ROLE IN MIND?</h2>
            <p className="cv-cta-desc">
              Whether you need a full-stack engineer, an artist platform, or an editorially
              rigorous collaborator, let’s build something with character.
            </p>
            <Link
              to="/#contact"
              className="cv-btn cv-btn--print cv-btn--cta"
              aria-label="Send a message through the contact postcard form on the homepage"
            >
              <span>GET IN TOUCH // SEND A POSTCARD</span>
              <Arrow />
            </Link>
          </div>
        </section>

        {/* Print Only Footer / Contact */}
        <footer className="cv-print-footer">
          <p>
            Guillermo Brachetta · brachetta@me.com · +31 6 51063002 · gbrachetta.com · Melick, NL
          </p>
        </footer>
      </main>

      {/* Screen Footer */}
      <footer className="site-footer cv-screen-footer">
        <div className="footer-bottom">
          <span>
            ©
            {" "}
            {new Date().getFullYear()}
            {" "}
            Guillermo Brachetta · Classified Dossier
          </span>
          <div className="cv-footer-links">
            <Link to="/#about">Back to Portfolio</Link>
            <Link to="/#contact">Get in touch</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CVPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Curriculum Vitae — Guillermo Brachetta | Web Developer</title>
    <meta
      name="description"
      content="Curriculum Vitae and background dossier of Guillermo Brachetta. Full-stack web developer, former Cambridge University Press editor, and baroque concert harpsichordist."
    />
    <meta name="theme-color" content="#f1f0e9" />
  </>
);
