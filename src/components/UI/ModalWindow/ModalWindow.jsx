import React, { useState } from "react";
import { useEffect } from "react";
import "./ModalWindow.css";
const ModalWindow = ({ isActive, setIsActive, children }) => {
  const [modalStyle, setModalStyle] = useState("");
  const [modalContentStyle, setModalContentStyle] = useState("");

  useEffect(() => {
    if (isActive) {
      setModalStyle(" _active");
      setModalContentStyle(" _content_active");
    } else {
      setModalStyle("");
      setModalContentStyle("");
    }
  }, [isActive]);

  return (
    <div className={`modal${modalStyle}`} onClick={() => setIsActive(false)}>
      <div
        className={`modal_content${modalContentStyle}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default ModalWindow;
