import React from "react";
import "./card.scss";
export function AboutCard() {
    return (
        <div id="about-card-wrapper">
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
        </div>
    );
}
