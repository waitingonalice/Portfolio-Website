import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Navbar.scss";
import coding from "../images/coding.png";
import Hamburger from "./NavbarComponents/hamburger";
import { Menu, DropDownMenu } from "./NavbarComponents/menu";
import TypeWriterEffect from "react-typewriter-effect";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import ContactMe from "../Components/ContactMe";
function PortfolioNavbar() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = (open) => {
        setToggle(open);
    };
    // console.log(toggle);
    return (
        <>
            <header id="top">
                {/* Start of nav bar */}
                <nav className="navigation-bar">
                    <img className="logo" alt="codeLogo" src={coding}></img>
                    <Hamburger toggle={toggle} handleToggle={handleToggle} />
                    <Menu />
                </nav>
                <DropDownMenu toggle={toggle}></DropDownMenu>
            </header>
            {/* end of nav bar */}

            {/* Start of introduction */}

            <div className="container">
                <section className="Intro">
                    <div>
                        <div id="job-intro">
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: "Montserrat",
                                    fontWeight: 600,
                                }}
                                startDelay={100}
                                text="Hello World, I'm Wilson!"
                                typeSpeed={70}
                                hideCursorAfterText={true}
                            />
                        </div>
                        Front-End Software Developer @
                        <a href="https://www.trustana.com/"> Trustana</a>.
                    </div>
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

            {/* end of introduction */}
        </>
    );
}

export default PortfolioNavbar;
