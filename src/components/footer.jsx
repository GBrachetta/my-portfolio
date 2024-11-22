import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import PortfolioContext from "../context/context";

export const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks
            && networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr className="hr-footer" />
        <p className="footer__text">
          ©
          {" "}
          {new Date().getFullYear()}
          {" "}
          -
          {" "}
          <a href="https://github.com/gbrachetta" target="_blank" rel="noopener noreferrer">
            Guillermo Brachetta
          </a>
        </p>
      </Container>
    </footer>
  );
};