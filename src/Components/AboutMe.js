import React from "react";
import "../Styles/Content/aboutMe.scss";
export default function AboutMe() {
    return (
        <div className="about-wrapper">
            <div className="title">
                <h1> About Me</h1>
            </div>
            <div className="paragraph">
                <div className="p1">
                    <p>
                        I graduated with honours with a Bachelor of Science, in{" "}
                        Computing and Information Systems from the{" "}
                        <strong>
                            <a href="https://london.ac.uk/">
                                University of London
                            </a>
                        </strong>{" "}
                        in July 2022. I started software engineering in 2021
                        when I was tasked to build my first educational
                        application{" "}
                        <a href="https://waitingonalice.github.io/Visual-Algo/">
                            Visual Algo
                        </a>
                        .
                    </p>
                </div>
                <div className="p2">
                    <p>
                        In software engineering, I found the translation of an
                        abstract idea to developing a fully functional and
                        scalable piece of software fascinating. This fueled my
                        passion for learning and tinkering with new
                        technologies, and creating software projects that I am
                        proud of. <br />
                        At the moment, I mainly do front-end web development,
                        but I'm also keen in learning back-end development to
                        become a full-stack software engineer.
                    </p>
                </div>
                <div className="p3">
                    <p>
                        Besides web development, I have worked on cryptography
                        and neural network projects. All my works can be found
                        on{" "}
                        <strong>
                            <a href="https://github.com/waitingonalice">
                                Github
                            </a>
                        </strong>{" "}
                        which I update regularly.
                    </p>
                </div>
            </div>
            <div className="skills">Skills</div>
        </div>
    );
}
