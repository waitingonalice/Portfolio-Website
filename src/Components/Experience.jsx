import React from "react";
import { Card } from "../Components/Card/Card";
import "../Styles/Content/experience.scss";

function Experience() {
  const currMonth = new Date().toLocaleString("default", { month: "long" });
  const currYear = new Date().getFullYear();
  const experience = [
    {
      company: "Trustana",
      date: `June 2022 - ${currMonth} ${currYear}`,
      position: "Software Engineer Intern",
      description: (
        <ol>
          <li>
            Learned clean code principles and code commit practices in a
            development environment.
          </li>
          <li>
            Worked in a CI/CD environment that utilises software such as JIRA,
            Confluence, Trello and Gitlab.
          </li>
          <li>
            Researched, documented and performed a Proof of Concept for
            localisation software to be integrated into supplier portal
            pipeline.
          </li>
          <li>
            Played a key role in integrating localisation for supplier portal.
          </li>
          <li>
            Worked closely with UI/UX designers to build a new homepage for
            supplier facing portal that displays informative dashboards based on
            user data.
          </li>
          <li>Improved overall UX for supplier portal and admin portal. </li>
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
            Worked closely with clients to gather requirements for the design of
            newletters.
          </li>
          <li>
            Designed and formatted HTML EDMs to be published as newsletters with
            frontend tools.
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
        <Card>
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

              <h5>Tech stack:</h5>
              <div className="icons">
                {ele.stack &&
                  ele.stack.map((stack) => (
                    <div key={stack.alt}>
                      <img src={stack.imgLink} alt={stack.alt} />
                      <div className="text">{stack.alt}</div>
                    </div>
                  ))}
              </div>
              <hr></hr>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Experience;
