import React from "react";
import "./OfferTextBlocks.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckIcon from "@mui/icons-material/Check";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import OfferItem from "./OfferItem/OfferItem";
const OfferTextBlocks = () => {

  const iconSize = 60;
  
  return (
    <div className="offer-text-block">
      <div className="offer-text-block__container _container">
        <div className="offer-text-block__content">
        <OfferItem
          title={"Free delivery across Belarus"}
          mainText={"Contact or contactless delivery by courier"}
          icon={<LocalShippingIcon sx={{fontSize: iconSize}}/>}
        />
        <OfferItem
          title={"Quality assurance"}
          mainText={"All products come with a 1 year warranty"}
          icon={<CheckIcon sx={{fontSize: iconSize}}/>}
        />
        <OfferItem
          title={" Trade-in "}
          mainText={
            "Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device"
          }
          icon={<AttachMoneyIcon sx={{fontSize: iconSize}}/>}
        />
        </div>
      </div>
    </div>
  );
};

export default OfferTextBlocks;