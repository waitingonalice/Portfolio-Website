import React from "react";
import "../Styles/Content/intro.scss";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import { HiChevronDoubleUp } from "react-icons/hi";
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
              Frontend Software Developer @{" "}
              <a href="https://www.trustana.com/">Trustana.</a>
            </h2>
          </div>

          <div className="welcome">An insight into my life on the web.</div>

          <div className="links">
            <a className="portfolio-btn" href="#about">
              Portfolio <IoMdArrowDropright />
            </a>
            <div className="icon-wrapper">
              <a
                href="https://github.com/waitingonalice/CV/blob/main/Resume.pdf"
                className="link-btn"
              >
                <MdOutlineDescription />
                <p>Resume</p>
              </a>
              <a
                href="https://www.linkedin.com/in/wilson-sie-6a3485155/"
                className="link-btn"
              >
                <RiLinkedinFill />
                <p>LinkedIn</p>
              </a>
              <a href="https://github.com/waitingonalice" className="link-btn">
                <FaGithub />
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="back-to-landing"
        tabIndex={0}
        role="button"
        onClick={() => {
          const rootElement = document.documentElement;
          rootElement.scrollTo({
            top: 0,
          });
        }}
      >
        <HiChevronDoubleUp />
      </div>
    </>
  );
}

export default Intro;
