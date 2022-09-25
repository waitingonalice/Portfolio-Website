import "../Styles/Content/contact.scss";
import React, { useEffect, useState, useReducer } from "react";
import {
  HiOutlineMail,
  HiOutlineMailOpen,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FormLabel, FormInput, FormText } from "../Components/Form/Form";
import { sendTelegramMessage } from "../utils/api";
import { toLocalDate } from "../utils/formatter";
import Notification from "./Notifications/notification";
const fields = {
  name: "",
  email: "",
  message: "",
  notification: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "handleInput":
      return { ...state, [action.field]: action.payload };
    case "handleReset":
      return { ...fields };
    case "handleNotificationOn":
      return { notification: true };
    case "handleNotificationOff":
      return { notification: false };
    default:
      return state;
  }
};

function ContactMe() {
  const [mailIcon, setMailIcon] = useState(<HiOutlineMail />);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useReducer(formReducer, fields);
  const handleInput = (e) => {
    setFormValues({
      type: "handleInput",
      field: e.target.id,
      payload: e.target.value,
    });
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormValues({
      type: "handleReset",
    });
    const form = document.getElementById("form");
    form.reset();
    await sendTelegramMessage({ ...formValues, timestamp: toLocalDate() });
    setIsSubmitting(false);
  };

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

  const checkMandatoryFields = Object.values(formValues).includes("");
  console.log(formValues);
  useEffect(() => {
    if (isSubmitting) {
      setFormValues({ type: "handleNotificationOn" });
      setTimeout(() => {
        setFormValues({ type: "handleNotificationOff" });
      }, 3000);
    }
  }, [isSubmitting]);

  return (
    <div className="contact-wrapper">
      {formValues.notification && (
        <Notification children={"Submission success!"} />
      )}
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
      <form className="form" id="form">
        <div className="contact-form form-floating">
          <FormInput type={"text"} id={"name"} onChange={handleInput} />
          <FormLabel htmlFor={"name"} children={"Name"} />
        </div>
        <div className="contact-form form-floating">
          <FormInput type={"email"} id={"email"} onChange={handleInput} />
          <FormLabel htmlFor={"email"} children={"Email"} />
        </div>
        <div className="contact-form form-floating">
          <FormText id={"message"} onChange={handleInput} />
          <FormLabel htmlFor={"message"} children={"Leave a comment"} />
        </div>
        <div className="submit-btn-position">
          <button
            className="submit-btn"
            disabled={checkMandatoryFields}
            onClick={handleOnClick}
          >
            {isSubmitting ? (
              <>Submitting...</>
            ) : (
              <>
                Submit <HiOutlinePaperAirplane />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
