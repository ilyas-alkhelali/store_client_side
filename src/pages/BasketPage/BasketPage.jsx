import { Grid } from "@mui/material";
import React from "react";
import BasketList from "../../components/BasketPageComp/BasketList";
import CatalogNavBar from "../../components/CatalogPageComp/CatalogNavBar/CatalogNavBar";
import "./BasketPage.css";
const BasketPage = () => {
  return (
    <div className="basket-block">
      <CatalogNavBar>Basket</CatalogNavBar>
      <BasketList />
    </div>
  );
};

export default BasketPage;
