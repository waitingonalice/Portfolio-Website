import React, { useState, useEffect } from "react";
import "./notification.scss";
import clsx from "clsx";
import {
  HiOutlineCheckCircle,
  HiX,
  HiOutlineXCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";

const Notification = ({ className, resCode }) => {
  const [fade, setFade] = useState(false);
  const [notificationTimeout, setnotificationTimeout] = useState(false);
  const notificationStatus = {
    statusCode: resCode,
    status: "success",
    children: "Submission success!",
    icon: <HiOutlineCheckCircle size={25} />,
  };

  const dynamicStatus = () => {
    switch (resCode) {
      case 200:
        return { ...notificationStatus };
      case 400:
        return {
          status: "danger",
          children: "Submission failed.",
          icon: <HiOutlineXCircle size={25} />,
        };
      case 500:
        return {
          status: "danger",
          children: "Server Error, submission failed.",
          icon: <HiOutlineXCircle size={25} />,
        };
      default:
        return {
          status: "warning",
          children: "Unknown error.",
          icon: <HiOutlineExclamationCircle size={25} />,
        };
    }
  };
  useEffect(() => {
    setTimeout(() => setnotificationTimeout(true), 2500);
  }, []);
  return (
    <>
      {
        <div
          className={clsx(
            `alert alert-${dynamicStatus().status} ${
              fade || (notificationTimeout && "fade")
            }`,
            className
          )}
          role="alert"
        >
          <div className="notification-content">
            <div className="icon">{dynamicStatus().icon}</div>
            <strong>{dynamicStatus().children}</strong>
          </div>
          <div role={"button"} onClick={() => setFade(true)} tabIndex="0">
            <HiX />
          </div>
        </div>
      }
    </>
  );
};

export default Notification;
