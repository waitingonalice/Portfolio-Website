import React, { useState } from "react";
import "../Styles/Content/projects.scss";
import { Card } from "./Card/Card";
import visualAlgo from "../images/visualAlgo.png";
import spaceX from "../images/spacex.png";
import portfolio from "../images/portfolio.png";
import { HiOutlineExternalLink } from "react-icons/hi";
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
          their launchsites.
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
          alt: "Tailwind",
        },
      ],
    },
    {
      image: portfolio,
      alt: "Portfolio Site",
      title: "Portfolio Site",
      link: "https://github.com/waitingonalice/Portfolio-Website",
      liveLink: "",
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
      liveSite: "www.xyz.com", // to add a live link
    },
    {
      image: visualAlgo,
      alt: "Visual Algo",
      title: "Visual Algo",
      link: "https://github.com/waitingonalice/Visual-Algo",
      liveLink: "https://waitingonalice.github.io/Visual-Algo/",
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
      liveSite: "https://waitingonalice.github.io/Visual-Algo/",
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
            {ele.image && (
              <img className="project-img" src={ele.image} alt={`${ele.alt}`} />
            )}
            <div className="content">
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
                      <div className="text">{item.alt}</div>
                    </div>
                  ))}
              </div>
              <button className="repo-btn">
                <a href={ele.link}>
                  Repository <HiOutlineExternalLink />
                </a>
              </button>
              {ele.liveSite && (
                <button className="site-btn">
                  <a href={ele.liveLink}>
                    Live site <HiOutlineExternalLink />
                  </a>
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
