import { Grid } from "@mui/material";
import React from "react";
import LeftCorner from "./LeftCorner/LeftCorner";
import "./Product.css";
import RightCorner from "./RightCorner/RightCorner";
const Product = ({ product }) => {
  return (
    <div className="product-block">
      <div className="product-block__container _container">
        <div className="product-block__content">
          <LeftCorner product={product.image} />
          <RightCorner product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
