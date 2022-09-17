import React, { useEffect, useState, useReducer } from "react";
import "../Styles/Content/contact.scss";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
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
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="in-touch-header">
        <h1>
          <strong>Got a question?</strong>
        </h1>
      </div>
      <h4>
        Let's get in touch. Feel free to use the email button or contact form
        below.
      </h4>
      <span role="button" id="contact-btn">
        <a href="mailto:wilsonsie.fc@gmail.com">Email {mailIcon}</a>
      </span>
      <div className="contact-form"></div>
    </div>
  );
}

export default ContactMe;
