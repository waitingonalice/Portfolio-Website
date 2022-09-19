import "../Styles/Content/contact.scss";
import React, { useEffect, useState, useReducer } from "react";
import {
  HiOutlineMail,
  HiOutlineMailOpen,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FormLabel, FormInput, FormText } from "../Components/Form/Form";

function ContactMe() {
  const [mailIcon, setMailIcon] = useState(<HiOutlineMail />);
  useEffect(() => {
    const mouseTarget = document.getElementById("contact-btn");
    mouseTarget.addEventListener("mouseenter", () =>
      setMailIcon(<HiOutlineMailOpen />)
    );
    mouseTarget.addEventListener("mouseleave", () =>
      setMailIcon(<HiOutlineMail />)
    );
    return () => {
      mouseTarget.removeEventListener("mouseenter", () =>
        setMailIcon(<HiOutlineMailOpen />)
      );
      mouseTarget.removeEventListener("mouseleave", () =>
        setMailIcon(<HiOutlineMail />)
      );
    };
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="in-touch-header">
        <h1>
          <strong>Got a question?</strong>
        </h1>
      </div>
      <h4>
        Let's get in touch. Feel free to use the contact form or email button
        below.
      </h4>
      <button id="contact-btn">
        <a href="mailto:wilsonsie.fc@gmail.com">Email {mailIcon}</a>
      </button>

      <div className="contact-form form-floating">
        <FormInput type={"text"} id={"name"} />
        <FormLabel htmlFor={"name"} children={"Name"} />
      </div>
      <div className="contact-form form-floating">
        <FormInput type={"email"} id={"email"} />
        <FormLabel htmlFor={"email"} children={"Email"} />
      </div>
      <div className="contact-form form-floating">
        <FormText id={"comment"} />
        <FormLabel htmlFor={"comment"} children={"Leave a comment"} />
      </div>
      <div className="submit-btn-position">
        <button className="submit-btn">
          Submit <HiOutlinePaperAirplane />
        </button>
      </div>
    </div>
  );
}

export default ContactMe;
