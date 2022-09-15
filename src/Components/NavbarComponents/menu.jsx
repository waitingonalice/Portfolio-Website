import React from "react";
import { useEffect } from "react";
import "./menu.scss";
import "../../Styles/Content/index.scss";

export function Menu() {
  return (
    <div className={"nav-links"}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
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
      document.getElementById("child-container").style.filter = "blur(5px)";
    } else {
      document.body.style.overflow = "auto";
      document.getElementById("child-container").style.filter = null;
    }
  }, [toggle]);

  return (
    <div className={`menu ${toggle && "active"}`}>
      <ul>
        {links.map((nav) => (
          <li key={nav.text}>
            <a href={nav.link} onClick={handleToggle}>
              {nav.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
