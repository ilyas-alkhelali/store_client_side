import { Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {

  const goTo = useNavigate();
  
  const iconStyle = { fontSize: 40, marginRight: 2,};

  return (
    <div className="footer-block">
      <div className="footer-block__container _container">
        <div className="footer-block__title _text-with-icon">
          <AppleIcon sx={iconStyle} /> Premium Resseler
        </div>
        <div className="footer-block__content">
          <div className="content__item">
            <div className="content__item-title">Shop and learn</div>
            <div className="content__item-list">
              <div
                className="item-list__item"
                onClick={() => goTo(`/store_client_side/catalog/${"MacBook"}`)}
              >
                Mac
              </div>
              <div
                className="item-list__item"
                onClick={() => goTo(`/store_client_side/catalog/IPhone`)}
              >
                iPhone
              </div>
              <div
                className="item-list__item"
                onClick={() => goTo(`/store_client_side/catalog/${"IPad"}`)}
              >
                iPad
              </div>
              <div
                className="item-list__item"
                onClick={() => goTo(`/store_client_side/catalog/${"Apple Watch"}`)}
              >
                Apple Watch
              </div>
            </div>
          </div>
          <div className="content__item">
            <div className="content__item-title">Contacts</div>
            <div className="content__item-list">
              <div className="item-list__item _text-with-line">
                applepremiumreseller@gmail.com
              </div>
              <div className="item-list__item _text-with-line">
                +375 (29) 000-00-00
              </div>
            </div>
          </div>
          <div className="content__item">
            <div className="content__item-title">Follow us</div>
            <div className="content__item-list">
              <div className="item-list__item _text-with-icon _text-with-line">
                <InstagramIcon sx={iconStyle} />
                @applepremiumreseller
              </div>
              <div className="item-list__item _text-with-icon _text-with-line">
                <FacebookIcon sx={iconStyle} />
                @applepremiumreseller
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_flash-light"></div>
    </div>
  );
};

export default Footer;
