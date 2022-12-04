import React, { useEffect, useRef, useState } from "react";
import "./OfferItem.css";
const OfferItem = ({ icon, title, mainText }) => {
  const trakingElement = useRef();
  const observer = useRef();

  const [itemStyle, setitemStyle] = useState("");

  useEffect(() => {
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setitemStyle(" offer-text-block__item_visible");
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(trakingElement.current);
  }, []);

  return (
     <div className={`offer-text-block__item${itemStyle}`}>
        <div className="offer-text-block__item_icon">
          {icon}
        </div>
        <div className="offer-text-block__item_title">
          {title}
        </div>
        <div ref={trakingElement}></div>
        <div className="offer-text-block__item_main-text">
          {mainText}
        </div>
     </div>
  );
};

export default OfferItem;