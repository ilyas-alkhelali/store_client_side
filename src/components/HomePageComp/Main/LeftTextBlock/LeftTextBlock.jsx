import React from "react";
import { useNavigate } from "react-router-dom";
import "./LeftTextBlock.css";


const LeftTextBlock = () => {

  const goTo = useNavigate();
  
  return (
    <div className="text-block__left-block">
      <div className="left-block__title">
        <div>Apple</div>
        <div>Premium Reseller</div>
      </div>
      <div className="left-block__subtitle">
        apple original products in Belarus
      </div>
      <div className="left-block__button">
        <div className="button__content" onClick={() => goTo("/store_client_side/catalog/")}>shop now</div>
      </div>
    </div>
  );
};
export default LeftTextBlock;