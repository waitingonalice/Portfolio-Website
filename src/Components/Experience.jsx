import React from "react";
import { Card } from "../Components/Card/Card";
import "../Styles/Content/experience.scss";

function Experience() {
  const experience = [
    {
      company: "Trustana",
      date: `June 2022 - Present`,
      position: "Associate Software Engineer",
      description: (
        <ol>
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
            Collaborated with designers and product managers to build dashboards
            that supported data visualization, data filtering, data exporting
            and generation.
          </li>
          <li>
            Was involved in setting up numerous projects and pipelines that
            enabled developers to have a better experience in developing and
            deploying their code.
          </li>
          <li>
            Adopted practices such as caching and debouncing of data to reduce
            load on the server/browser, reducing cost, improving product search
            times and user experience.
          </li>
          <li>
            Wrote numerous APIs and AWS Lambda functions that was orchestrated
            by a Step function to provide a service that generated product data
            for customers/vendors. Also worked on improving the flow by
            leveraging on parallelism in order to reduce the time taken to
            generate product data.
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
