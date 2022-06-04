import React from "react";
import "../Styles/_AboutMe.scss";
export default function AboutMe() {
    return (
        <div className="about-wrapper">
            <div className="title">
                <h1>About Me</h1>
            </div>
            <div className="p-wrapper">
                <p className="p1">
                    Graduated with honours in Bachelor of Science, Computing and
                    Information Systems from University of London since July
                    2022. I started my software engineering journey in 2021 when
                    I was tasked to build my first educational application{" "}
                    <a href="#project">Visual Algo</a>. It was then I discovered
                    my passion for software engineering and the satisfaction it
                    brought to create projects that I am proud of.
                </p>
            </div>
            <div className="p2">
                <p> </p>
            </div>
        </div>
    );
}
