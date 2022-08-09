import React from "react";
import { Nav } from "react-bootstrap";
import { useEffect } from "react";
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

export function DropDownMenu({ toggle, handleToggle }) {
  const links = [
    { link: "#about", text: "About" },
    { link: "#experience", text: "Experience" },
    { link: "#project", text: "Projects" },
    { link: "#contact", text: "Contact" },
  ];
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
      document.getElementById("wrapper").style.filter = "blur(5px)";
    } else {
      document.body.style.overflow = "auto";
      document.getElementById("wrapper").style.filter = null;
    }
  }, [toggle]);

  return (
    <div className={`menu ${toggle && "active"}`}>
      <ul>
        {links.map((nav) => (
          <li key={nav.text}>
            <Nav.Link href={nav.link} onClick={handleToggle}>
              {nav.text}
            </Nav.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
