import React from "react";
import HomeNavBar from "../HomeNavBar/HomeNavBar";
import "./Main.css";
import LeftTextBlock from "./LeftTextBlock/LeftTextBlock";
import RightTextBlock from "./RightTextBlock/RightTextBlock";

const Main = () => {
  return (
    <div className="main">
      <HomeNavBar />
      <div className="main__main-block main-block">
        <div className="main__container _container">
          <div className="main-block__text-block">
            <LeftTextBlock />
            <RightTextBlock />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
