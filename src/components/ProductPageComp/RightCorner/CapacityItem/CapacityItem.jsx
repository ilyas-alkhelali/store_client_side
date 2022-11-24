import React, { useState } from "react";
import { useEffect } from "react";
import "./CapacityItem.css";

const CapacityItem = ({ gb, setChosenCapacity, chosenCapacity }) => {
  const [itemStyle, setItemStyle] = useState("");

  useEffect(() => {
    if (chosenCapacity == gb) {
      setItemStyle(" cliked");
    } else {
      setItemStyle("");
    }
  }, [chosenCapacity]);
  const clickHandler = () => {
    if (chosenCapacity !== gb) {
      setChosenCapacity(gb);
    }
  };

  return (
    <div className={`capacity-item${itemStyle}`} onClick={() => clickHandler()}>
      {gb}gb
    </div>
  );
};

export default CapacityItem;
