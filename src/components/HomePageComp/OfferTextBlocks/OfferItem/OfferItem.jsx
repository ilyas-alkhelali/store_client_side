import React from "react";
import "./OfferItem.css";
const OfferItem = ({ icon, title, mainText }) => {
  return (
     <div className="offer-text-block__item">
        <div className="offer-text-block__item_icon">
          {icon}
        </div>
        <div className="offer-text-block__item_title">
          {title}
        </div>
        <div className="offer-text-block__item_main-text">
          {mainText}
        </div>
     </div>
  );
};

export default OfferItem;