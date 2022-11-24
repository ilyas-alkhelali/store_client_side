import React from "react";
import "./MacBook.css";
import MacBookImage from "./MacBookImage/MacBookImage";
import MacBookText from "./MacBookText/MacBookText";
const MacBook = () => {
  return (
    <div className="macbook-commercial-block">
      <div className="macbook-commercial-block__container _container">
        <div className="macbook-commercial-block__content">
          <MacBookImage />
          <MacBookText />
        </div>
      </div>
    </div>
  );
};

export default MacBook;
