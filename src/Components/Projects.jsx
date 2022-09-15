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
      link: "https://github.com/waitingonalice/SpaceX-Rockets",
      description: (
        <p>
          I needed to learn how to consume and mutate GraphQL APIs during my
          internship, hence this project was born. It is a simple React
          application that filters and displays all SpaceX rockets based on
          their launchsites. <br></br> By building this application, I learned
          the difference in concept between GraphQL and REST APIs and their
          respective use cases. Furthermore, I was able to pick up on Typescript
          and TailwindCSS along the way.
        </p>
      ),
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
      link: "",
      description: (
        <p>
          You are viewing it! This site was built with GatsbyJS and styled with
          SASS. Building this site enabled me to learn Sass, mobile responsive
          practices and practice CSS flexbox/grid. All of my achievements,
          experiences and past works can be found here.
        </p>
      ),
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
      link: "https://github.com/waitingonalice/Visual-Algo",
      description: (
        <p>
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae
          elit libero, a pharetra augue mollis interdum. Nulla vitae elit
          libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a
          pharetra augue mollis interdum.
        </p>
      ),
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
      link: "https://github.com/waitingonalice/Kohonen-Neural-Network-SOM-",
      description: (
        <p>
          {" "}
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae
          elit libero, a pharetra augue mollis interdum. Nulla vitae elit
          libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a
          pharetra augue mollis interdum.
        </p>
      ),
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
      link: "https://github.com/waitingonalice/Diffie-Hellman-ElGamal",
      description: (
        <p>
          "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
          vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit
          libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a
          pharetra augue mollis interdum."
        </p>
      ),

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
            <div className="title">
              <h3>
                <a href={ele.link}>
                  <strong>{ele.title}</strong>
                </a>
              </h3>
            </div>
            <div className="description">{ele.description}</div>
            <div className="icons">
              {ele.stack &&
                ele.stack.map((item, idx) => (
                  <div key={idx} className="icon-wrapper">
                    <img src={item.imgLink} alt={item.alt} />
                    <div className="desc">{item.alt}</div>
                  </div>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
