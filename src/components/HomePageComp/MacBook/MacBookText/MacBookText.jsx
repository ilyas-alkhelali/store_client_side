import React from "react";
import "./MacBookText.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

const MacBookText = () => {

    const goTo = useNavigate();

  return (
    <div className="macbook-commercial-block__macbook-text-block">
    <div className="macbook-text-block__pretitle">13`` model</div>
    <div className="macbook-text-block__title">Power to go.</div>
    <div className="macbook-text-block__subtitle">From $1299</div>
    <div className="macbook-text-block__linked-text">
      <div className="macbook-text-block__button" onClick={() => goTo(`/store_client_side/product/3`)}>buy</div>
      <div className="macbook-text-block__link" onClick={() => goTo(`/store_client_side/catalog/Macbook`)}>
        go to macbooks
        <div className="macbook-text-block__link_icon">
          <ArrowRightAltIcon sx={{fontSize: 50}}/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MacBookText;