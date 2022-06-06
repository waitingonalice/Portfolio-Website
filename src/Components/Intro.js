import React from "react";
import "../Styles/intro.scss";
import TypeWriterEffect from "react-typewriter-effect";
import gmail from "../images/gmail.png";
import linkedIn from "../images/linkedin.png";
import github from "../images/github.png";

function Intro() {
    return (
        <div className="wrapper">
            <div className="job-intro">
                <div className="name">
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: "League Spartan",
                            fontWeight: 700,
                        }}
                        startDelay={0}
                        text="Hello World, I'm Wilson."
                        typeSpeed={80}
                        hideCursorAfterText={true}
                    />
                </div>

                <div className="interest">
                    <h1> App developer, Problem solver.</h1>
                </div>

                <div className="job-title">
                    <p>
                        Software Engineer @{" "}
                        <strong>
                            <a href="https://www.trustana.com/">Trustana.</a>
                        </strong>
                    </p>
                </div>
                <div className="img-links">
                    <a href="mailto:wilsonsie97@gmail.com">
                        <img alt="gmail-icon" src={gmail}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/wilson-sie-6a3485155/">
                        <img alt="linkedIn-icon" src={linkedIn}></img>
                    </a>
                    <a href="https://github.com/waitingonalice">
                        <img alt="github-icon" src={github}></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro;
