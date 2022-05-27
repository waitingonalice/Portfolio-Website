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
                        <Nav.Link href="https://github.com/waitingonalice">
                            GitHub
                        </Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#link">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contacts">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <section className="Intro">
                <TypeWriterEffect
                    startDelay={100}
                    text="Hello! My name is Wilson!"
                    typeSpeed={100}
                    hideCursorAfterText={true}
                ></TypeWriterEffect>
            </section>
        </div>
    );
}

export default PortfolioNavbar;
