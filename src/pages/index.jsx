import React, { useEffect, useState } from "react";
import {
  aboutData,
  contactData,
  footerData,
  headData,
  heroData,
  projectsData,
} from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.scss";
import { PortfolioProvider } from "../context/context";

import {
  About,
  Contact,
  Footer,
  Hero,
  Projects,
} from "../components";

const IndexPage = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <main key="body" id="___gatsby">
      <PortfolioProvider value={{
        hero,
        about,
        projects,
        contact,
        footer,
      }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  const { title, lang, description } = headData;

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title || "Guillermo Brachetta"}</title>
      <html lang={lang || "en"} />
      <meta name="description" content={description || "Guillermo Brachetta, web developer"} />
    </>
  );
};
