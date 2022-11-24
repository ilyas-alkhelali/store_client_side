import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RightTextBlock.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import iphonePicture from "./../../../../pictures/IphonePicture.png";

const RightTextBlock = () => {

  const gotTo = useNavigate();

  const trakingElement = useRef();
  const observer = useRef();
  
  const[imageStyle, setImageStyle] = useState('');

  useEffect(() => {
        var callback = function(entries, observer){
           if(entries[0].isIntersecting){
            setImageStyle(' images-block__right-image_visible')
           }
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(trakingElement.current)
  },[])

  return (
    <div className="text-block__right-block">
      <div className="right-block__title">
        <span className="right-block__title_bold">NEW</span>
        iPhone 13 Pro
      </div>

      <div className="right-block__huge-text">GREEN</div>
      <div className="right-block__link">
        <div className="right-block__link_text" onClick={() => gotTo("//store_client_side/product/851dc8a0-39ba-4aa1-b188-08dac75928bd")} >learn more</div>
        <div className="right-block__link_icon">
          <ArrowRightAltIcon sx={{ fontSize: 40, ml: 2 }} />
        </div>
      </div>
      <img
        src={iphonePicture}
        alt={"load"}
        className={`images-block__right-image${imageStyle}`}
      />
      <div ref={trakingElement}></div>
    </div>
  );
};
export default RightTextBlock;
