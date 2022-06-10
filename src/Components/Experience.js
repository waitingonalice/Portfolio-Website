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
                        <h5>National Kidney Foundation</h5>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Experience;
