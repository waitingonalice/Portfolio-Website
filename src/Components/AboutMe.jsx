import React from "react";
import "../Styles/Content/aboutMe.scss";
import { Card } from "./Card/Card";

export default function AboutMe() {
  const primarySkills = [
    {
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      alt: "Javascript",
    },
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
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git",
    },
    {
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
      alt: "Nodejs",
    },
  ];

  const secondarySkills = [
    {
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
    },
    {
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Java",
    },
    {
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "mySQL",
    },
    {
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      alt: "GraphQL",
    },
    {
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      alt: "Tailwindcss",
    },
    {
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      alt: "Sass",
    },
    {
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "Figma",
    },
  ];

  return (
    <div id="about-wrapper">
      <div className="about">
        <h1>
          <strong>About Me</strong>
        </h1>
        <div className="paragraph">
          <div className="p1">
            <p>
              Graduated with honours with a Bachelor of Science, in Computing
              and Information Systems from the University of London in July
              2022. My interest for software engineering started when I was
              tasked to build my first educational application{" "}
              <strong>
                <a href="https://waitingonalice.github.io/Visual-Algo/">
                  Visual Algo
                </a>
              </strong>
              .
            </p>
          </div>
          <div className="p2">
            <p>
              In software engineering, I found the translation of an abstract
              idea to developing a fully functional and scalable piece of
              software fascinating. This fueled my passion for learning and
              tinkering with new technologies, and creating software projects
              that I am proud of. At the moment, I mainly do{" "}
              <strong>front-end web development</strong>, but I'm also keen in
              learning back-end development to become a full-stack software
              engineer.
            </p>
          </div>
          <div className="p3">
            <p>
              Besides web development, I have worked on cryptography and neural
              network projects. All my works can be found on{" "}
              <strong>
                <a href="https://github.com/waitingonalice">Github</a>
              </strong>{" "}
              which I update regularly.
            </p>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>
          <strong>Skills</strong>
        </h1>
        <Card>
          <div className="title">
            <h6>
              <strong>I mostly work with:</strong>
            </h6>
          </div>
          <div className="main">
            {primarySkills.map((item, idx) => (
              <span key={idx}>
                <div key={idx}>
                  <img alt={`${item.alt}`} src={`${item.imgLink}`}></img>
                  <div className="text">{item.alt}</div>
                </div>
              </span>
            ))}
          </div>

          <div className="title">
            <h6>
              <strong>I have experience with:</strong>
            </h6>
          </div>

          <div className="secondary">
            {secondarySkills.map((item, idx) => (
              <span key={idx}>
                <div>
                  <img alt={`${item.alt}`} src={`${item.imgLink}`}></img>
                  <div className="text">{item.alt}</div>
                </div>
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
