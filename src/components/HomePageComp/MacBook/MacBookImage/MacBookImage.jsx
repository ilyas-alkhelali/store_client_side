import React from "react";
import "./MacBookImage.css";
import macbook from "../../../../pictures/MacBook.png";

const MacBookImage = () => {
  return (
    <div className="macbook-commercial-block__macbook-image-block">
      <img className="macbook-image-block__image" src={macbook} alt={"load"} />
    </div>
  );
};

export default MacBookImage;
