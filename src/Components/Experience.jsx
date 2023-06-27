import React from "react";
import { Card } from "../Components/Card/Card";
import "../Styles/Content/experience.scss";

function Experience() {
  const experience = [
    {
      company: "Trustana",
      date: `December 2022 - Present`,
      position: "Associate Software Engineer",
      description: (
        <ol>
          <li>
            Was wholly responsible for building a feature that allowed suppliers
            and internal users to import products with a given excel template.
            This sped up the manual process of importing products individually
            by supporting multiple product uploads with a single file.
          </li>
          <li>
            Built reusable components for the codebase. Most notably, a
            component that allowed users to upload multiple files at once that
            connected to AWS S3, with custom validations and UI.
          </li>
          <li>
            Helped to establish company's component library using Storybook that
            was published as a package via AWS Codeartifact. Built and migrated
            existing components from the codebase to the component library to be
            used across different projects to ensure UI consistency and improve
            developer efficiency. (Eventually)
          </li>
          <li>
            Was responsible for building multiple key services for Sass
            platforms on the frontend, mainly the Product Management, Internal
            Admin and Product Catalog portals.
          </li>
          <li>
            Wrote automation scripts to improve developer experience and
            increase work efficiency. This reduced the number of bugs written by
            automating manual processes and was also used as a measure to scale
            to the increasing size of the codebase.
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
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          alt: "NodeJS",
        },
        {
          imgLink:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          alt: "NextJS",
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
      company: "Trustana",
      date: `June 2022 - November 2022`,
      position: "Software Engineer Intern",
      description: (
        <ol>
          <li>
            Researched, documented and performed a proof of concept to integrate
            localisation software into Saas platform. Also played a key role in
            integrating localisation software into the platform.
          </li>
          <li>
            Contributed to the overall improvement of UX for supplier portal by
            refactoring how components are displayed and implementing skeleton
            loaders into website flow.
          </li>
          <li>
            Worked in an agile development environment that required active
            participation in the requirements gathering, design and development
            phases. Utilised tools such as Confluence and Jira.
          </li>
        </ol>
      ),
    },
    {
      company: "National Kidney Foundation",
      date: `Aug 2021 - June 2022`,
      position: "Freelance Web Developer",
      description: (
        <ol>
          <li>
            Worked closely with other designers to design and develop reusable
            email templates to be used for marketing campaigns.
          </li>
          <li>
            Worked on email template formatting with frontend tools such as HTML
            and CSS.
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
