import React, { useEffect, useRef, useState } from "react";
import "./MacBookImage.css";
import macbook from "../../../../pictures/MacBook.png";

const MacBookImage = () => {
  const trakingElement = useRef();
  const observer = useRef()

  const[itemStyle, setitemStyle] = useState('');

  useEffect(() => {
        var callback = function(entries, observer){
           if(entries[0].isIntersecting){
            setitemStyle(' macbook-image-block__image_visible')
           }
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(trakingElement.current)
  },[])
  return (
    <>
    <div ref={trakingElement}></div>
    <div className="macbook-commercial-block__macbook-image-block">
      <img className={`macbook-image-block__image${itemStyle}`} src={macbook} alt={"load"} />
    </div>
    </>
  );
};

export default MacBookImage;
