import React from "react";
import "./hamburger.scss";

function Hamburger({ toggle, handleToggle }) {
  return (
    <div
      role={"button"}
      tabIndex={0}
      onClick={handleToggle}
      className={toggle ? "hamburger open" : "hamburger close"}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Hamburger;
