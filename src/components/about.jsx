import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  Col,
  Container, Row,
} from "react-bootstrap";
import PortfolioContext from "../context/context";
import { Title } from "./title";

export const About = () => {
  const { about } = useContext(PortfolioContext);
  const {
    img, paragraphOne, paragraphTwo, paragraphThree, resume,
  } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImage alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px" className="about-wrapper__info">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
                {resume && (
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                  >
                    Resume
                  </a>
                </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const AboutImage = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
        images: allFile(filter: {extension: {ne: "svg"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `);

  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const imageFixed = image.node.childImageSharp.fixed;

  return <Image className="rounded shadow-lg" alt={alt} fixed={imageFixed} />;
};

AboutImage.defaultProps = {
  filename: null,
};

AboutImage.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string.isRequired,
};
