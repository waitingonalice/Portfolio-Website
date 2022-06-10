import React from "react";
import "../Styles/Content/aboutMe.scss";
import { Card } from "../Components/Card/Card.js";

export default function AboutMe() {
    return (
        <div id="about-wrapper">
            <div className="about">
                <h1>
                    <strong>About Me</strong>
                </h1>
                <div className="paragraph">
                    <div className="p1">
                        <p>
                            I graduated with honours with a Bachelor of Science,
                            in Computing and Information Systems from the
                            University of London in July 2022. I started
                            software engineering in 2021 when I was tasked to
                            build my first educational application{" "}
                            <strong>
                                <a href="https://waitingonalice.github.io/Visual-Algo/">
                                    Visual Algo
                                </a>
                            </strong>
                            .
                        </p>
                    </div>
                    <div className="p2">
                        <p>
                            In software engineering, I found the translation of
                            an abstract idea to developing a fully functional
                            and scalable piece of software fascinating. This
                            fueled my passion for learning and tinkering with
                            new technologies, and creating software projects
                            that I am proud of. At the moment, I mainly do{" "}
                            <strong>front-end web development</strong>, but I'm
                            also keen in learning back-end development to become
                            a full-stack software engineer.
                        </p>
                    </div>
                    <div className="p3">
                        <p>
                            Besides web development, I have worked on
                            cryptography and neural network projects. All my
                            works can be found on{" "}
                            <strong>
                                <a href="https://github.com/waitingonalice">
                                    Github
                                </a>
                            </strong>{" "}
                            which I update regularly.
                        </p>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h1>
                    <strong>Skills</strong>
                </h1>
                <Card>
                    <div className="title">
                        <h6>
                            <strong>I mostly work with:</strong>
                        </h6>
                    </div>
                    <div className="main">
                        <div id="js">
                            <img
                                alt="javascript"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                            />
                            <span className="text">Javascript</span>
                        </div>

                        <div id="react">
                            <img
                                alt="react"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            />
                            <span className="text">React</span>
                        </div>

                        <div id="sass">
                            <img
                                alt="sass"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                            />
                            <span className="text">Sass</span>
                        </div>

                        <div id="git">
                            <img
                                alt=" git"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            />
                            <span className="text">Git</span>
                        </div>
                    </div>

                    <div className="title">
                        <h6>
                            <strong>I have experience with:</strong>
                        </h6>
                    </div>
                    <div className="secondary">
                        <div id="python">
                            <img
                                alt="python"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            />
                            <span className="text">Python</span>
                        </div>
                        <div id="java">
                            <img
                                alt="java"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                            />
                            <span className="text">Java</span>
                        </div>
                        <div id="mysql">
                            <img
                                alt="mysql"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                            />
                            <span className="text">mySQL</span>
                        </div>
                        <div id="jupyter">
                            <img
                                alt="jupyter"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
                            />
                            <span className="text">Jupyter</span>
                        </div>
                        <div id="figma">
                            <img
                                alt="figma"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                            />
                            <span className="text">Figma</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
