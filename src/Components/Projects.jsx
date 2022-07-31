import React, { useState } from "react";
import "../Styles/Content/projects.scss";
import { Card } from "./Card/Card";
import visualAlgo from "../images/visualAlgo.png";

function Projects() {
  const [index, setIndex] = useState(0);
  const handleChange = (idx) => {
    setIndex(idx);
  };

  const projectMapper = [
    {
      image: visualAlgo,
      alt: "visualAlgo",
      title: "Visual Algo",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: visualAlgo,
      alt: "visualAlgo",
      title: "Portfolio Site",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae  elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: visualAlgo,
      alt: "visualAlgo",
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
          <Card classStyle={"project-container"}>
            <img src={ele.image} alt={`${ele.alt}`} />
            <div className="description">
              <h3>{ele.title}</h3>
              <p>{ele.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
