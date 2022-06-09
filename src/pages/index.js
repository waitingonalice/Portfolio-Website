import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Content/index.scss";
import PortfolioNavbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Experience from "../Components/Experience";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import ContactMe from "../Components/ContactMe";
// markup
const IndexPage = () => {
    return (
        <div className="parent-container">
            <div id="navigation">
                <PortfolioNavbar />
            </div>
            <div className="landing">
                <div className="child-container">
                    <section id="introduction">
                        <Intro></Intro>
                    </section>
                    <section id="about">
                        <AboutMe></AboutMe>
                    </section>
                    <section id="experience">
                        <Experience></Experience>
                    </section>
                    <section id="project">
                        <Projects></Projects>
                    </section>
                    <section id="contact">
                        <ContactMe></ContactMe>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
