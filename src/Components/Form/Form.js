import React, { useState } from "react";
import "./form.scss";
import clsx from "clsx";

export const FormLabel = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {children}
    </label>
  );
};

export const FormInput = ({ type, onChange, className, id }) => {
  return (
    <input
      required
      type={type}
      className={clsx("form-control shadow-none", className)}
      onChange={onChange}
      id={id}
      placeholder={"name@example.com"}
    />
  );
};

export const FormText = ({ id, name, onChange }) => {
  return (
    <textarea
      required
      type="text"
      id={id}
      style={{ height: 120 + "px" }}
      className="form-control shadow-none"
      placeholder={"Leave a comment here"}
      name={name}
      autoComplete="on"
      onChange={onChange}
    />
  );
};
