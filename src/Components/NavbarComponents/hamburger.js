import React from "react";
import "./hamburger.scss";
import { useState } from "react";

function Hamburger({ toggle, handleToggle }) {
    // console.log(toggle);
    return (
        <div className="hamburger">
            <span
                role={"button"}
                onClick={() => handleToggle(!toggle)}
                className={toggle === true ? "open" : "close"}
            >
                <div></div>
                <div></div>
                <div></div>
            </span>
        </div>
    );
}

export default Hamburger;
