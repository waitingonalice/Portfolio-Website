import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/index.scss";
import PortfolioNavbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import ContactMe from "../Components/ContactMe";
// markup
const IndexPage = () => {
    return (
        <div className="parent-container">
            <PortfolioNavbar />
            <div className="child-container">
                <section className="introduction">
                    <Intro></Intro>
                </section>
                <section>
                    <AboutMe></AboutMe>
                </section>
                <section>
                    <Projects></Projects>
                </section>
                <section>
                    <ContactMe></ContactMe>
                </section>
            </div>
        </div>
    );
};

export default IndexPage;
