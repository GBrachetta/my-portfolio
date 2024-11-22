import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import PortfolioContext from "../context/context";
import { Title } from "./title";

export const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Sample Projects" />
          {projects.map((project) => {
            const {
              title, info, info2, url, repo, img, id,
            } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        <p>{info}</p>
                        <p className="mb-4">{info2}</p>
                      </div>
                      {url && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url}
                      >
                        See Live
                      </a>
                      )}

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          style={!url ? { paddingLeft: 0 } : {}}
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          scale={1}
                          tiltMaxAngleY={5}
                          tiltMaxAngleX={5}
                          glareEnable
                          glareColor="#ffffff"
                          glareMaxOpacity={0.35}
                          glarePosition="all"
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImage alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const ProjectImage = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `);

  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const imageFluid = image.node.childImageSharp.fluid;

  return <Image alt={alt} fluid={imageFluid} />;
};

ProjectImage.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
