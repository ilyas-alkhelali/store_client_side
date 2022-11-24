import React from "react";
import AppleWatchText from "./AppleWatchText/AppleWatchText";
import "./AppleWatch.css";
import AppleWatchImages from "./AppleWatchImages/AppleWatchImages";

const AppleWatch = () => {
  return (
    <div className="apple-watch-commercial-block">
      <div className="apple-watch-commercial-block__container _container">
        <div className="apple-watch-commercial-block__content">
          <AppleWatchImages />
          <AppleWatchText />
        </div>
      </div>
    </div>
  );
};

export default AppleWatch;
