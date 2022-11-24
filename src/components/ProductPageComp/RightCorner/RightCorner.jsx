import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./RightCorner.css";
import AppleIcon from "@mui/icons-material/Apple";
import { Rating } from "@mui/material";
import { useState } from "react";
import {
  actions,
  controllers,
  CreateFetchApi,
} from "../../../fetchHandler/CreateFetchApi";
import { useFetching } from "../../../customHooks/useFetching";
import CapacityItem from "./CapacityItem/CapacityItem";

const RightCorner = ({ product }) => {
  const goTo = useNavigate();
  const [rating, setRating] = useState(5);
  const [chosenCapacity, setChosenCapacity] = useState(128);
  const capacity = [128, 256, 512];

  const [generateRating, isLoading, allError] = useFetching(async () => {
    await CreateFetchApi(controllers.product, actions.generateRating)
      .generateRating(product.id, rating)
      .then((res) => setRating(res.data));
  });

  const rate = useMemo(() => {
    if (rating != undefined && product.id != undefined) {
      generateRating();
    }
  }, [rating]);

  const buy = () => {
    product.capacity = chosenCapacity;
    sessionStorage.setItem(product.dateOfAdd, JSON.stringify(product, chosenCapacity));
    goTo("/store_client_side/basket");
  };

  return (
    <div className="product-block__right-block">
      <div className="right-block__text-block">
        <div className="text-block__pre-title">NEW</div>
        <div className="text-block__title">
          {product.typeName} {product.version}
        </div>
        <div className="text-block__subtitle">
          Get 110$ - 700$ when trade in an IPhone 8 or newer
        </div>
      </div>
      <div className="right-block__text-block">
        <div className="text-block__tiny-title">About this product</div>
        <div className="text-block__subtitle">{product.about}</div>
      </div>
      <div className="right-block__text-block">
        <div className="text-block__tiny-title">Choose Capacity</div>
        <div className="text-block__subtitle _wihout-underline">
          How much capacity is right for you?
        </div>
        <div className="text-block__active-content">
          {capacity.map((p) => (
            <CapacityItem
              gb={p}
              key={p}
              setChosenCapacity={setChosenCapacity}
              chosenCapacity={chosenCapacity}
            />
          ))}
        </div>
      </div>
      <div className="right-block__text-block">
        <div className="text-block__tiny-title">
          Rate this product, your opinion is very important
        </div>
        <div
          className="text-block__subtitle _wihout-underline"
          onClick={() => rate}
        >
          <Rating
            name="customized-color"
            size="large"
            value={Number(rating)}
            onChange={(event) => setRating(event.target.value)}
            precision={0.1}
            icon={<AppleIcon sx={{ fontSize: 40, color: "rgb(2, 171, 8)" }} />}
            emptyIcon={
              <AppleIcon sx={{ fontSize: 40, color: "rgba(0,0,0,0.8)" }} />
            }
          />
        </div>
      </div>
      <div className="text-block__button-block">
        <div className="button-block_button" onClick={() => buy()}>
          buy
        </div>
      </div>
    </div>
  );
};

export default RightCorner;
