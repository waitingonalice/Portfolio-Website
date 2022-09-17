import React from "react";
import { useState, useEffect, useRef } from "react";
import "../Styles/Content/Navbar.scss";
import coding from "../images/coding.png";
import Hamburger from "./NavbarComponents/hamburger";
import { Menu, DropDownMenu } from "./NavbarComponents/menu";

function PortfolioNavbar() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  /*
   * Remove warning for hamburger
   */
  useOnClickOutside(ref, () => setToggle(false));

  return (
    <header id="top">
      <nav className="navigation-bar">
        <a href="#introduction">
          <img className="logo" alt="codeLogo" src={coding} />
        </a>

        <div ref={ref}>
          <Hamburger toggle={toggle} handleToggle={handleToggle} />
          <Menu />
          <DropDownMenu
            toggle={toggle}
            handleToggle={handleToggle}
            reference={ref}
          />
        </div>
      </nav>
    </header>
  );
}

const useOnClickOutside = (ref, eventHandler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      eventHandler(event);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, eventHandler]);
};

export default PortfolioNavbar;
