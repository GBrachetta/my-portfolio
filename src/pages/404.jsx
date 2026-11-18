import React from "react";
import { Link } from "gatsby";
import "../style/graphic.scss";

const Arrow = () => (
  <svg
    className="link-arrow"
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

const NotFoundPage = () => (
  <>
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Guillermo Brachetta home">
        GB
      </Link>
      <span className="header-note">WEB DEVELOPER. BAROQUE PERFORMER.</span>
    </header>
    <main className="not-found-page">
      <div className="not-found-kicker">
        <span className="status-dot" aria-hidden="true" />
        {" "}
        ERROR 404 / CADENCE INTERRUPTED
      </div>
      <h1>
        Tacet
        <span>.</span>
      </h1>
      <p>
        Looks like this page didn’t make it to the score, hit a sour note, or
        wandered off into the archives.
      </p>
      <Link className="round-link" to="/">
        <span>BACK TO SAFETY</span>
        <Arrow />
      </Link>
    </main>
    <footer className="site-footer">
      <div className="footer-bottom">
        <span>
          ©
          {new Date().getFullYear()}
          {" "}
          Guillermo Brachetta
        </span>
        <div>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </footer>
  </>
);

export default NotFoundPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Page Not Found — Guillermo Brachetta</title>
    <meta name="theme-color" content="#f1f0e9" />
  </>
);
