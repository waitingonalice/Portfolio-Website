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
      stack: [
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          alt: "Typescript",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          alt: "React",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          alt: "GraphQL",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          alt: "TailwindCSS",
        },
      ],
    },
    {
      image: portfolio,
      alt: "Portfolio Site",
      title: "Portfolio Site",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
      stack: [
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
          alt: "Javascript",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          alt: "React",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          alt: "Sass",
        },
      ],
    },
    {
      image: visualAlgo,
      alt: "Visual Algo",
      title: "Visual Algo",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
      stack: [
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
          alt: "Javascript",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          alt: "React",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          alt: "CSS3",
        },
      ],
    },
    {
      image: null,
      alt: "Kohonen Neural Network",
      title: "Image optimizer with SOM neural network",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
      stack: [
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          alt: "Python",
        },
      ],
    },
    {
      image: null,
      alt: "Kohonen Neural Network",
      title: "Diffie Hellman - El Gamal Asymmetric Cryptosystem",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
      stack: [
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          alt: "Python",
        },
      ],
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
            {ele.image && <img src={ele.image} alt={`${ele.alt}`} />}
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
