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
        <ul>
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
            Worked closely with UI/UX designers to build a new homepage for
            supplier facing portal that displays informative dashboards based on
            user data.
          </li>
        </ul>
      ),
    },
    {
      company: "National Kidney Foundation",
      date: `Aug 2021 - June 2022`,
      position: "Freelance Web Developer",
      description: (
        <ul>
          <li>
            Designed and formatted HTML EDMs to be published as newsletters with
            frontend tools.
          </li>
        </ul>
      ),
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
            <span key={idx}>
              <div className="job-title">
                <h5>
                  <strong>{ele.company}</strong>
                </h5>
                <strong>{ele.date}</strong>
              </div>
              <div className="position">{ele.position}</div>
              <div className="experience-description">{ele.description}</div>
            </span>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Experience;
