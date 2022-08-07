import React, { useState } from "react";
import "../Styles/Content/projects.scss";
import { Card } from "./Card/Card";
import visualAlgo from "../images/visualAlgo.png";
import spaceX from "../images/spacex.png";
import portfolio from "../images/portfolio.png";
function Projects() {
  const projectMapper = [
    {
      image: spaceX,
      alt: "SpaceX",
      title: "SpaceX Rockets",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: visualAlgo,
      alt: "Visual Algo",
      title: "Visual Algo",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: portfolio,
      alt: "Portfolio Site",
      title: "Portfolio Site",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: visualAlgo,
      alt: "Kohonen Neural Network",
      title: "Image optimizer with SOM neural network",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];

  return (
    <div className="project-wrapper">
      <div className="projects">
        <h1>
          <strong>Projects</strong>
        </h1>
        {projectMapper.map((ele) => (
          <Card key={ele.title} classStyle={"project-container"}>
            <img src={ele.image} alt={`${ele.alt}`} />
            <div className="description">
              <div className="title">
                <h3>{ele.title}</h3>
              </div>
              <p>{ele.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
