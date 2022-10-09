import "../Styles/Content/contact.scss";
import "../Styles/Global/spinner.scss";
import React, { useEffect, useState, useReducer } from "react";
import {
  HiOutlineMail,
  HiOutlineMailOpen,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FormLabel, FormInput, FormText } from "../Components/Form/Form";
import { sendTelegramMessage } from "../utils/api";
import { toLocalDate, toLocalYear } from "../utils/formatter";
import Notification from "./Notifications/notification";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
const initState = {
  name: "",
  email: "",
  message: "",
  isSubmitting: false,
};

const formReducer = (state, action) => {
  const form = document.getElementById("form");
  switch (action.type) {
    case "handleInput":
      return { ...state, [action.field]: action.payload };
    case "handleIsSubmitting":
      form.reset();
      return { ...initState, isSubmitting: action.payload };
    default:
      return state;
  }
};

const Spinner = () => {
  return <div className="spinner"></div>;
};
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function ContactMe() {
  const [mailIcon, setMailIcon] = useState(<HiOutlineMail />);
  const [formState, setFormState] = useReducer(formReducer, initState);
  const [resCode, setResCode] = useState();
  const [error, setError] = useState(false);
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
    if (!formState.email.match(emailRegex)) {
      return setError(true);
    }
    setError(false);
    //stops the other functions from being called upon validation failure
    setFormState({ type: "handleIsSubmitting", payload: true });
    delete formState.isSubmitting;
    const response = await sendTelegramMessage({
      ...formState,
      timestamp: toLocalDate(),
    });
    response && setResCode(response.status);
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
        <a href="mailto:wilson.sie.dev@gmail.com">Email {mailIcon}</a>
      </button>
      <form className="form" id="form">
        <div className="contact-form form-floating">
          <FormInput type={"text"} id={"name"} onChange={handleInput} />
          <FormLabel htmlFor={"name"} children={"Name"} />
        </div>
        <div className="contact-form form-floating">
          <FormInput
            type={"email"}
            id={"email"}
            onChange={handleInput}
            error={error && "Invalid email address"}
          />
          <FormLabel htmlFor={"email"} children={"Email"} />
        </div>
        <div className="contact-form form-floating">
          <FormText id={"message"} onChange={handleInput} />
          <FormLabel htmlFor={"message"} children={"Leave a comment"} />
        </div>
        <div className="submit-btn-position">
          <button
            type="submit"
            className="submit-btn"
            disabled={checkMandatoryFields || formState.isSubmitting}
            onClick={handleOnClick}
          >
            {formState.isSubmitting ? (
              <div className="submitting">
                <Spinner />
              </div>
            ) : (
              <>
                Submit <HiOutlinePaperAirplane />
              </>
            )}
          </button>
        </div>
      </form>

      <footer className="footer">
        <small>&copy; Copyright 2021 - {toLocalYear()}, Wilson Sie</small>
        <div className="icons">
          <a href="https://github.com/waitingonalice/CV/blob/main/Resume.pdf">
            <MdOutlineDescription />
          </a>
          <a href="https://www.linkedin.com/in/wilson-sie-6a3485155/">
            <RiLinkedinFill />
          </a>
          <a href="https://github.com/waitingonalice">
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContactMe;
