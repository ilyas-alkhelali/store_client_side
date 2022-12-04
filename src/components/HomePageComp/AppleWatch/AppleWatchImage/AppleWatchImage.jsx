import React, { useEffect, useRef, useState } from "react";
import { Children } from "react";

const AppleWatchImage = ({src, className, addStyle}) => {
  const trakingElement = useRef();
  const observer = useRef();

  const [itemStyle, setItemStyle] = useState("");

  useEffect(() => {
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setItemStyle(` ${addStyle}`);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(trakingElement.current);
  }, []);
  return (
    <>
     <div ref={trakingElement}></div>
        <img
          className={`${className}${itemStyle}`}
          src={src}
          alt={"load"}
        />
    </>
  );
};

export default AppleWatchImage;
