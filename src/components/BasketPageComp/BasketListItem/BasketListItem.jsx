import React, { useState } from "react";
import testPhoto from "./../../../pictures/testPic.png";
import "./BasketListItem.css";
import AppleIcon from "@mui/icons-material/Apple";
import { Rating } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect } from "react";

const BasketListItem = ({ product, remove }) => {

  const [amount, setAmount] = useState(1);

  useEffect(() => {
    product.sum = amount;
  }, [amount]);

  const removeHandler = (product) => {
    remove(product);
  };

  const plus = () => {
    if (amount < product.amount) {
      setAmount(amount + 1);
    }
  };

  const minus = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="basket-block__basket-item">
      <div className="basket-item__basket-image-block">
        <p className="_center">
          <img
            className="basket-image-block__image"
            src={testPhoto}
            alt={"load"}
            crossOrigin=""
          />
        </p>
      </div>
      <div className="basket-item__basket-text-block">
        <div className="basket-text-block__title">
          {product.typeName} {product.version}
        </div>
        <div className="basket-text-block__subtitle">
          Stitching is allowed, for more information contact the number below
        </div>
        <div className="basket-text-block__tiny-subtitle">
          Price: {product.price} $
        </div>
        <div className="basket-text-block__tiny-subtitle">
          Capacity: {product.capacity}
        </div>
        <div className="basket-text-block__icons">
          <div className="icons__label basket-text-block__tiny-subtitle">
            Rating:
          </div>
          <Rating
            readOnly={true}
            name="customized-color"
            value={product.rating}
            size="large"
            precision={0.1}
            icon={<AppleIcon sx={{ fontSize: 40, color: "rgb(2, 171, 8)" }} />}
            emptyIcon={
              <AppleIcon sx={{ fontSize: 40, color: "rgba(0,0,0,0.8)" }} />
            }
          />
        </div>
        <div className="basket-text-block__basket-active-content">
          <div className="basket-active-content__cliker">
            <div className="cliker__result">amount: {amount}</div>
            <div className="cliker_count">
              <div className="cliker_icon" onClick={() => plus()}>
                <AddIcon sx={{ fontSize: 30 }} />
              </div>
              <div className="cliker_icon" onClick={() => minus()}>
                <RemoveIcon sx={{ fontSize: 30 }} />
              </div>
            </div>
          </div>
          <div
            className="basket-active-content__remove-button-block"
            onClick={() => removeHandler(product)}
          >
            <div className="remove-button-block__button">Remove</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketListItem;
