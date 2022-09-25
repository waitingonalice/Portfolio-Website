import React, { useState } from "react";
import "./notification.scss";

import { HiOutlineCheckCircle, HiX, HiOutlineXCircle } from "react-icons/hi";
import { useEffect } from "react";
const Notification = ({ status = "success", children }) => {
  const [fade, setFade] = useState(false);
  const notificationStatus = {
    status: status,
    icon: <HiOutlineCheckCircle size={25} />,
  };

  const dynamicStatus = () => {
    switch (notificationStatus.status) {
      case "danger":
        return { ...notificationStatus, icon: <HiOutlineXCircle size={25} /> };
      default:
        return { ...notificationStatus, status: "success" };
    }
  };

  return (
    <div
      className={`alert alert-${dynamicStatus().status} ${fade && "fade"}`}
      role="alert"
    >
      <div className="notification-content">
        <div className="icon">{dynamicStatus().icon}</div>
        <strong>{children}</strong>
      </div>
      <div role={"button"} onClick={() => setFade(true)} tabIndex="0">
        <HiX />
      </div>
    </div>
  );
};

export default Notification;
