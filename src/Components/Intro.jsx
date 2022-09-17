import React from "react";
import "../Styles/Content/intro.scss";
import gmail from "../images/gmail.png";
import github from "../images/github.png";

function Intro() {
  return (
    <>
      <div id="wrapper">
        <div className="job-intro">
          <div className="name">
            <h1>Wilson Sie</h1>
          </div>

          <div className="job-title">
            <h2>
              Software Engineer @{" "}
              <a href="https://www.trustana.com/">Trustana.</a>
            </h2>
          </div>

          <div className="welcome">Welcome to my portfolio.</div>

          <div className="img-links">
            <a href="https://github.com/waitingonalice">
              <img alt="github-icon" src={github}></img>
            </a>
            <a href="mailto:wilsonsie97@gmail.com">
              <img alt="gmail-icon" src={gmail}></img>
            </a>
            <a href="https://www.linkedin.com/in/wilson-sie-6a3485155/">
              <img
                alt="linkedin"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
