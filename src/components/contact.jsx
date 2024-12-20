import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import PortfolioContext from "../context/context";
import { Title } from "./title";

export const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || "Would you like to work with me? Awesome!"}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}?subject=Let's talk!`}
            >
              {btn}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};
