import React, { useEffect, useRef } from "react";
import "./IPhoneImages.css";
import firstIPhoneImCommer from "./../../../../pictures/firstIPhoneImCommer.png";
import secondIPhoneImCommer from "./../../../../pictures/secondIPhoneImCommer.png";
import fourthIPhoneImCommer from "./../../../../pictures/fourthIPhoneImCommer.png";
import fifthIPhoneImCommer from "./../../../../pictures/fifthIPhoneImCommer.png";
import { useState } from "react";

const IPhoneImages = () => {
  const trakingElement = useRef();
  const observer = useRef();

  const [itemStyle, setitemStyle] = useState("");
  const [bigItemStyle, setBigItemStyle] = useState("");
  const [twoItemsStyle, setTwoItemsStyle] = useState("");

  useEffect(() => {
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setitemStyle(" iphone-images-block__item_visible");
        setBigItemStyle(" iphone-images-block__item_big_visible");
        setTwoItemsStyle(" iphone-images-block__item_2-items_visible");
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(trakingElement.current);
  }, []);

  return (
    <>
      <div ref={trakingElement}></div>
      <div className="iphone-images-block">
        <img
          className={`iphone-images-block__item${itemStyle}`}
          src={firstIPhoneImCommer}
          alt={"load"}
        />
        <img
          className={`iphone-images-block__item${itemStyle}`}
          src={secondIPhoneImCommer}
          alt={"load"}
        />
        <img
          className={`iphone-images-block__item_big${bigItemStyle}`}
          src={fourthIPhoneImCommer}
          alt={"load"}
        />
        <img
          className={`iphone-images-block__item_2-items${twoItemsStyle}`}
          src={fifthIPhoneImCommer}
          alt={"load"}
        />
      </div>
    </>
  );
};

export default IPhoneImages;
