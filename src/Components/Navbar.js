import React from "react";
import { useState } from "react";
import "../Styles/Content/Navbar.scss";
import coding from "../images/coding.png";

import Hamburger from "./NavbarComponents/hamburger";
import { Menu, DropDownMenu } from "./NavbarComponents/menu";

function PortfolioNavbar() {
    const [toggle, setToggle] = useState(false);

    const handleHide = () => {
        setToggle(false);
    };
    const handleShow = () => {
        setToggle(true);
    };
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <header id="top">
            <nav id="navigation-bar">
                <img className="logo" alt="codeLogo" src={coding}></img>
                <Hamburger toggle={toggle} handleToggle={handleToggle} />
                <Menu />
            </nav>
            <DropDownMenu
                toggle={toggle}
                handleToggle={handleToggle}
                handleHide={handleHide}
                handleShow={handleShow}
            />
        </header>
    );
}

export default PortfolioNavbar;
