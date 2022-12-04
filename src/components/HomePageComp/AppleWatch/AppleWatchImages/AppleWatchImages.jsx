import React, { useEffect, useRef, useState } from "react";
import "./AppleWatchImages.css";
import AppleWatchFirst from "../../../../pictures/AppleWatchFirst.png";
import AppleWatchSecond from "../../../../pictures/AppleWatchSecond.png";
import AppleWatchThird from "../../../../pictures/AppleWatchThird.png";
import AppleWatchImage from "../AppleWatchImage/AppleWatchImage";

const AppleWatchImages = () => {
  return (
    <>
      <div className="apple-watch-commercial__images-block">
        <AppleWatchImage src={AppleWatchFirst} className={"apple-watch-commercial__images-block_image-left"} addStyle={"image-left_visible"}/>
        <AppleWatchImage src={AppleWatchSecond} className={"apple-watch-commercial__images-block_image-center"} addStyle={"image-center_visible"}/>
        <AppleWatchImage src={AppleWatchThird} className={"apple-watch-commercial__images-block_image-right"} addStyle={"image-right_visible"}/>
      </div>
    </>
  );
};

export default AppleWatchImages;
