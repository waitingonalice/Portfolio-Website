import React from "react";
import "./hamburger.scss";
import { useState } from "react";

function Hamburger({ toggle, handleToggle }) {
    // console.log(toggle);
    return (
        <div
            role={"button"}
            onClick={() => handleToggle(!toggle)}
            className={toggle === true ? "hamburger open" : "hamburger close"}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Hamburger;
