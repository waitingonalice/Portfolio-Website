import React, { useState } from "react";
import "../Styles/Content/projects.scss";
import { Card } from "./Card/Card";
import { Carousel } from "react-bootstrap";
import linkedIn from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import github from "../images/github.png";
function Projects() {
  const [index, setIndex] = useState(0);
  const handleChange = (idx) => {
    setIndex(idx);
  };
  return (
    <div className="project-wrapper">
      <div className="projects">
        <h1>
          <strong>Projects</strong>
        </h1>
        <Card>
          <Carousel activeIndex={index} onSelect={handleChange}>
            <Carousel.Item>
              <img src={linkedIn} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={gmail} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={github} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
