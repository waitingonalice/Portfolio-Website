import React from "react";
import { Card } from "../Components/Card/Card";
import "../Styles/Content/experience.scss";

function Experience() {
  const experience = [
    {
      company: "Mastplot",
      date: `January 2024 - Present`,
      position: "Fullstack Software Developer",
      description: (
        <ol>
          <li>
            Built multiple services by implementing RESTful APIs with MVC
            architecture using Python FastAPI as a web server and handled API
            integrations on the frontend. Also collaborated with backend
            engineers to handle data migrations with Postgres in between
            releases.
          </li>
          <li>
            Led the development of the interactive frontend for a live
            navigation application used by seafarers, utilizing technologies
            such as NextJS, Typescript, DeckGL, Maplibre and Tileserver-GL to
            ensure smooth navigation even with limited internet connectivity.
          </li>
          <li>
            Boosted developer efficiency by 50% by introducing Docker Compose.
            This addressed challenges of inconsistent environments and
            difficulty replicating production issues, leading to a smoother
            development workflow.
          </li>
          <li>
            Built container images for services (e.g. Python FastAPI, NextJS)
            and architected CI pipelines using Github Actions and bash scripting
            to easily deploy applications to on-premise servers with every push.
          </li>
          <li>
            Mentored junior developers, fostering knowledge sharing and best
            practices through code reviews.
          </li>
        </ol>
      ),
      stack: [
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          alt: "Typescript",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          alt: "Python",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          alt: "React",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          alt: "NextJS",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          alt: "NodeJS",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
          alt: "FastAPI",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
          alt: "PostgreSQL",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          alt: "Github",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          alt: "Git",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
          alt: "Docker",
        },
      ],
    },
    {
      company: "Trustana",
      date: `June 2022 - January 2024`,
      position: "Associate Software Engineer",
      description: (
        <ol>
          <li>
            Led the integration of Product Generation, Product Editing and
            Attribute Management APIs into the frontend application by
            collaborating closely with backend developers, ensuring smooth
            communication between front-end and back-end services.
          </li>
          <li>
            Engineered AWS Lambda functions and APIs orchestrated by a Step
            function, leveraging parallelism to significantly reduce product
            data generation time.
          </li>
          <li>
            Successfully built and deployed multiple frontend features
            leveraging optimization strategies such as caching and debouncing,
            resulting in reduced server load and improving product search times.
          </li>
          <li>
            Played a key role in establishing the company's component library
            using Storybook that was published as a package via AWS
            Codeartifact.
          </li>
          <li>
            Built and maintained reusable components for the component library
            to be used across different projects to ensure UI consistency and
            improve developer efficiency.
          </li>
          <li>
            Orchestrated the setup of multiple projects and pipelines, enhancing
            the development and deployment experience for fellow developers,
            utilizing Gitlab CICD and bash scripting.
          </li>
        </ol>
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
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          alt: "NextJS",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          alt: "NodeJS",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          alt: "GraphQL",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain.svg",
          alt: "Gitlab",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          alt: "Git",
        },
      ],
    },
    {
      company: "National Kidney Foundation",
      date: `Aug 2021 - June 2022`,
      position: "Freelance Web Developer",
      description: (
        <ol>
          <li>
            Collaborated closely with fellow designers to design and develop
            reusable email templates, contributing to successful marketing
            campaigns.
          </li>
          <li>
            Applied HTML and CSS expertise to ensure seamless email template
            formatting, resulting in improved click-through rates and user
            engagement.
          </li>
          <li>
            Overcame challenges related to email client compatibility in the
            development process.
          </li>
          <li>
            Engineered responsive design principles to optimize email template
            content for a diverse range of devices.
          </li>
        </ol>
      ),
      stack: [
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          alt: "HTML5",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          alt: "CSS3",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          alt: "Javascript",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
          alt: "Photoshop",
        },
      ],
    },
  ];

  return (
    <div id="experience-wrapper">
      <div className="experience">
        <h1>
          <strong>Experience</strong>
        </h1>
        <Card classStyle={"experience-container"}>
          {experience.map((ele, idx) => (
            <div className="job" key={idx}>
              <div className="job-title">
                <h3>
                  <strong>{ele.company}</strong>
                </h3>
                <strong>{ele.date}</strong>
              </div>
              <h5 className="position">{ele.position}</h5>
              <div className="experience-description">{ele.description}</div>
              {ele.stack && (
                <>
                  <h5>Tech stack:</h5>
                  <div className="icons">
                    {ele.stack.map((stack) => (
                      <div key={stack.alt}>
                        <img src={stack.imgLink} alt={stack.alt} />
                        <div className="text">{stack.alt}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <hr></hr>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Experience;
