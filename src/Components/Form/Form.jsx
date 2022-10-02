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

export const FormInput = ({ type, onChange, className, id, error }) => {
  return (
    <>
      <input
        required
        type={type}
        className={clsx("form-control shadow-none", className)}
        onChange={onChange}
        id={id}
        name={id}
        placeholder={"name@example.com"}
      />
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export const FormText = ({ id, onChange }) => {
  return (
    <textarea
      required
      type="text"
      id={id}
      style={{ height: 180 + "px" }}
      className="form-control shadow-none"
      placeholder={"Leave a comment here"}
      name={id}
      autoComplete="on"
      onChange={onChange}
    />
  );
};
