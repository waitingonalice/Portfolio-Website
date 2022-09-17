import React from "react";
import "./card.scss";
export function Card({ children, classStyle }) {
  return (
    <div id="card-wrapper" className={classStyle}>
      {children}
    </div>
  );
}
