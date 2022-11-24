import React from "react";
import { useNavigate } from "react-router-dom";
import "./IPhoneText.css";
const IPhoneText = () => {
  const goTo = useNavigate();
  return (
    <div className="iphone-text-block">
      <div className="iphone-text-block__title">Original iPhones From $429</div>
      <div className="iphone-text-block__subtitle">
        *Get $110–$700 off when you trade in an iPhone 8 or newer
      </div>
      <div className="iphone-text-block__button">
        <div className="iphone-button__content" onClick={() => goTo("/store_client_side/catalog/IPhone")}>buy</div>
      </div>
    </div>
  );
};

export default IPhoneText;