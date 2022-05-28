import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Navbar.scss";
import { Nav, Navbar } from "react-bootstrap";
import coding from "../images/coding.png";
import TypeWriterEffect from "react-typewriter-effect";

function PortfolioNavbar() {
    return (
        <div>
            <Navbar bg="white" expand="md" sticky="top" className="p-4">
                <img className="logo" src={coding}></img>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="position-relative justify-content-end"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#link">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contacts">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
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
                {/* <a href="https://www.trustana.com/">Trustana</a>. */}
            </section>
        </div>
    );
}

export default PortfolioNavbar;
