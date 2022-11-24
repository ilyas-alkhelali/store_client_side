import React from "react";
import "./IPhone.css";
import IPhoneImages from "./IPhoneImages/IPhoneImages";
import IPhoneText from "./IPhoneText/IPhoneText";

const IPhone = () => {
  return (
    <div className="iphone-promo-block">
      <div className="iphone-promo-block__container _container">
        <IPhoneImages />
        <IPhoneText />
      </div>
    </div>
  );
};

export default IPhone;
