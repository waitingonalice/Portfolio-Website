import React, { useState, useEffect } from "react";
import "./notification.scss";
import clsx from "clsx";
import { HiOutlineCheckCircle, HiX, HiOutlineXCircle } from "react-icons/hi";

const Notification = ({ className, resCode }) => {
  const [fade, setFade] = useState(false);

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
          children: "Submission failed, please refresh your page.",
          icon: <HiOutlineXCircle size={25} />,
        };
      default:
        return notificationStatus;
    }
  };

  return (
    <>
      {
        <div
          className={clsx(
            `alert alert-${dynamicStatus().status} ${fade && "fade"}`,
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
