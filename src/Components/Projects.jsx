import React from "react";
import "../Styles/Content/projects.scss";
import { Card } from "./Card/Card";
import visualAlgo from "../images/visualAlgo.png";
import portfolio from "../images/portfolio.png";
import designSystem from "../images/design-system.png";
import { HiOutlineExternalLink } from "react-icons/hi";
function Projects() {
  const projectMapper = [
    {
      image: designSystem,
      alt: "Design System",
      title: "Design System",
      link: "https://www.npmjs.com/package/@waitingonalice/design-system",
      description: (
        <p>
          A design system package that provides a set of UI components for me to
          reuse across different projects. It is built with React and tested
          with Storybook. Rollup is used to bundle the package and published to
          NPM via Github Actions.
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
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          alt: "TailwindCSS",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rollup/rollup-original.svg",
          alt: "Rollup",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",
          alt: "Storybook",
        },
      ],
    },
    {
      image: portfolio,
      alt: "Portfolio Site",
      title: "Portfolio Site",
      link: "https://github.com/waitingonalice/Portfolio-Website",
      description: (
        <p>
          You are viewing it! This site was built with GatsbyJS and styled with
          SASS. Building this site enabled me to learn Sass, mobile responsive
          practices and learn CSS flexbox/grid. All of my achievements,
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
      liveLink: "https://waitingonalice.github.io/Visual-Algo/",
      description: (
        <p>
          During the height of Covid-19, I had to learn data structures and
          algorithms for a module I was taking. Being a visual learner, I
          created an interactive application that allowed users to visualise how
          different sorting algorithms interacted with random numbers. Building
          this project served as an entry point to learn React.
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
              {ele.liveLink && (
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
