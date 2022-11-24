import React, { useEffect, useRef, useState } from "react";
import "./AppleWatchImages.css";
import AppleWatchFirst from "../../../../pictures/AppleWatchFirst.png";
import AppleWatchSecond from "../../../../pictures/AppleWatchSecond.png";
import AppleWatchThird from "../../../../pictures/AppleWatchThird.png";

const AppleWatchImages = () => {
  const trakingElement = useRef();
  const observer = useRef();

  const [imgLeftStyle, setImgLeftStyle] = useState("");
  const [imgCenterStyle, setImgCenterStyle] = useState("");
  const [imgRightStyle, setImgRightStyle] = useState("");

  useEffect(() => {
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setImgLeftStyle(" image-left_visible");
        setImgCenterStyle(" image-center_visible");
        setImgRightStyle(" image-right_visible");
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(trakingElement.current);
  }, []);

  return (
    <>
      <div className="apple-watch-commercial__images-block">
        <div ref={trakingElement}></div>
        <img
          className={`apple-watch-commercial__images-block_image-left${imgLeftStyle}`}
          src={AppleWatchFirst}
          alt={"load"}
        />

        <img
          className={`apple-watch-commercial__images-block_image-center${imgCenterStyle}`}
          src={AppleWatchSecond}
          alt={"load"}
        />
        <img
          className={`apple-watch-commercial__images-block_image-right${imgRightStyle}`}
          src={AppleWatchThird}
          alt={"load"}
        />
      </div>
    </>
  );
};

export default AppleWatchImages;
