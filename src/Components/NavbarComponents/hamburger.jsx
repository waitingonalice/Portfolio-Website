import React from "react";
import "./hamburger.scss";

function Hamburger({ toggle, handleToggle }) {
  return (
    <div
      role={"button"}
      onClick={handleToggle}
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
