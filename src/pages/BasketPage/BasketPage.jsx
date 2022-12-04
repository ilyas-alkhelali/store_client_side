import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import BasketList from "../../components/BasketPageComp/BasketList";
import CatalogNavBar from "../../components/CatalogPageComp/CatalogNavBar/CatalogNavBar";
import "./BasketPage.css";
const BasketPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="basket-block">
      <CatalogNavBar>Basket</CatalogNavBar>
      <BasketList />
    </div>
  );
};

export default BasketPage;
