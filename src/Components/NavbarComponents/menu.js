import React from "react";
import { Nav } from "react-bootstrap";

import "./menu.scss";

export function Menu() {
    return (
        <Nav className={"nav-links"}>
            <ul>
                <li>
                    <Nav.Link href="#about">About</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="#project">Projects</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </li>
            </ul>
        </Nav>
    );
}

export function DropDownMenu({ toggle }) {
    const links = [
        { link: "#about", text: "About" },
        { link: "#experience", text: "Experience" },
        { link: "#project", text: "Project" },
        { link: "#contact", text: "Contact" },
    ];

    return (
        <div className={"link-wrapper"}>
            <Nav className={toggle ? "DropdownExpanded" : "DropdownClose"}>
                <ul>
                    {links.map((nav) => (
                        <li key={nav.text}>
                            <a href={nav.link}>{nav.text}</a>
                        </li>
                    ))}
                </ul>
            </Nav>
        </div>
    );
}
