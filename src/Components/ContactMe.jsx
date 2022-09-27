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
const initState = {
  name: "",
  email: "",
  message: "",
  isSubmitting: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "handleInput":
      return { ...state, [action.field]: action.payload };
    case "handleIsSubmitting":
      return { ...initState, isSubmitting: action.payload };
    default:
      return state;
  }
};

function ContactMe() {
  const [mailIcon, setMailIcon] = useState(<HiOutlineMail />);
  const [formState, setFormState] = useReducer(formReducer, initState);
  const [resCode, setResCode] = useState();

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

  useEffect(() => {
    setTimeout(() => setResCode(undefined), 3000);
  }, [resCode]);

  const handleInput = (e) => {
    setFormState({
      type: "handleInput",
      field: e.target.id,
      payload: e.target.value,
    });
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    setFormState({ type: "handleIsSubmitting", payload: true });
    const form = document.getElementById("form");
    form.reset();
    const response = await sendTelegramMessage({
      ...formState,
      timestamp: toLocalDate(),
    });
    setResCode(response.status);
    setFormState({ type: "handleIsSubmitting", payload: false });
  };

  const checkMandatoryFields = Object.values(formState).includes("");

  return (
    <div className="contact-wrapper">
      {resCode && <Notification resCode={resCode} />}
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
            disabled={checkMandatoryFields || formState.isSubmitting}
            onClick={handleOnClick}
          >
            {formState.isSubmitting ? (
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
