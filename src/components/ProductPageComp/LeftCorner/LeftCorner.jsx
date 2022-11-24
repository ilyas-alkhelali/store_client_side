import React from "react";
import "./LeftCorner.css";
import testPhoto from "./../../../pictures/testPic.png";
import Rating from "@mui/material/Rating";
import AppleIcon from "@mui/icons-material/Apple";
const LeftCorner = () => {
  return (
    <div className="product-block__left-block">
      <div className="left-block__image-block">
        <img className="image-block__image" src={testPhoto} />
      </div>
      <div className="left-block__text-block">
        <div className="text-block__item">**Free delivery across Belarus</div>
        <div className="text-block__item">**Quality accurance</div>
      </div>
    </div>
  );
};

export default LeftCorner;
