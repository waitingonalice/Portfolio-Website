import React from "react";
import { Card } from "../Components/Card/Card.js";
import "../Styles/Content/experience.scss";
function Experience() {
    return (
        <div id="experience-wrapper">
            <div className="experience">
                <h1>
                    <strong>Experience</strong>
                </h1>
                <Card>
                    <div className="job-title">
                        <h5>
                            <strong>Trustana</strong>
                        </h5>

                        <strong>June 2022 - Present</strong>
                    </div>
                    <div className="position">Software Engineer Intern</div>
                    <div className="experience-description">
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className="job-title">
                        <h5>
                            <strong>National Kidney Foundation</strong>
                        </h5>
                        <strong>Aug 2021 - June 2022</strong>
                    </div>
                    <div className="position">Freelance Web Developer</div>

                    <div className="experience-description">
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Experience;
