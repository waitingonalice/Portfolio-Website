import React from "react";
import { Nav } from "react-bootstrap";
import { useEffect, useRef } from "react";
import "./menu.scss";
import "../../Styles/Content/index.scss";
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

export function DropDownMenu({ toggle, handleToggle, setToggle }) {
  const links = [
    { link: "#about", text: "About" },
    { link: "#experience", text: "Experience" },
    { link: "#project", text: "Projects" },
    { link: "#contact", text: "Contact" },
  ];
  function blur() {
    document.getElementById("wrapper").style.filter = "blur(5px)";
  }
  function notBlur() {
    document.getElementById("wrapper").style.filter = null;
  }

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
      blur();
    } else {
      document.body.style.overflow = "auto";
      notBlur();
    }
  }, [toggle]);

  /*
   * @todo - useRef to close menu when clicked outside of menu
   */

  return (
    <div className={toggle ? "menu active" : "menu"}>
      <ul>
        {links.map((nav) => (
          <li key={nav.text}>
            <Nav.Link href={nav.link} onClick={() => handleToggle()}>
              {nav.text}
            </Nav.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
