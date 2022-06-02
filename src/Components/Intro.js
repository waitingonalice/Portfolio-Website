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
                            fontFamily: "Montserrat",
                            fontWeight: 600,
                        }}
                        startDelay={100}
                        text="Hello World, I am Wilson."
                        typeSpeed={50}
                        hideCursorAfterText={true}
                    />
                </div>
                <div className="job-title">
                    <p>
                        Currently working as a Software Engineer @{" "}
                        <a href="https://www.trustana.com/"> Trustana. </a>
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
