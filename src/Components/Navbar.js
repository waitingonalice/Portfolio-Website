import React from "react";
import { useState } from "react";
import "../Styles/Navbar.scss";
import coding from "../images/coding.png";
import Hamburger from "./NavbarComponents/hamburger";
import { Menu, DropDownMenu } from "./NavbarComponents/menu";

function PortfolioNavbar() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = (open) => {
        setToggle(open);
    };
    // console.log(toggle);
    return (
        <header id="top">
            <nav className="navigation-bar">
                <img className="logo" alt="codeLogo" src={coding}></img>
                <Hamburger toggle={toggle} handleToggle={handleToggle} />
                <Menu />
            </nav>
            <DropDownMenu toggle={toggle}></DropDownMenu>
        </header>
    );
}

export default PortfolioNavbar;
