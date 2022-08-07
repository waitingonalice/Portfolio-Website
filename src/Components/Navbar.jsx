import React from "react";
import { useState } from "react";
import "../Styles/Content/Navbar.scss";
import coding from "../images/coding.png";

import Hamburger from "./NavbarComponents/hamburger";
import { Menu, DropDownMenu } from "./NavbarComponents/menu";

function PortfolioNavbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  /*
   * Remove warning of hamburger
   */

  return (
    <header id="top">
      <nav className="navigation-bar">
        <img className="logo" alt="codeLogo" src={coding}></img>
        <Hamburger toggle={toggle} handleToggle={handleToggle} />
        <Menu />
      </nav>
      <DropDownMenu
        toggle={toggle}
        handleToggle={handleToggle}
        setToggle={setToggle}
      />
    </header>
  );
}

export default PortfolioNavbar;
