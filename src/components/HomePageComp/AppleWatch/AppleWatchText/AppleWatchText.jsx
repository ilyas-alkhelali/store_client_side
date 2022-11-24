import React from "react";
import "./AppleWatchText.css";
import AppleIcon from "@mui/icons-material/Apple";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
const AppleWatchText = () => {

  const iconSize = 70;

  const goTo = useNavigate();
  
  return (
    <div className="apple-watch-commercial__text-block">
      <div className="apple-watch-commercial__text-block_icon">
        <AppleIcon sx={{ fontSize: iconSize }} />
      </div>
      <div className="apple-watch-commercial__text-block_text">
        <div className="apple-watch-commercial__text-block_title">WATCH</div>
        <div className="apple-watch-commercial__text-block_subtitle">
          SERIES 7
        </div>
      </div>
      <div className="apple-watch-commercial__text-block_icon">
        <ArrowRightAltIcon
          onClick={() => goTo(`/store_client_side/catalog/Apple Watch`)}
          sx={{ fontSize: iconSize }}
        />
      </div>
    </div>
  );
};

export default AppleWatchText;