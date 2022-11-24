import React from "react";
import { useNavigate } from "react-router-dom";
import "./CatalogNavBar.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavBar from "../../UI/NavBar/NavBar";



export default function CatalogNavBar({ children }) {
  
  const goTo = useNavigate();

  return (
    <NavBar>
      <div className="catalog-navbar">
        <div
          className="catalog-navbar__left-icon _icon-click"
          onClick={() => goTo("/store_client_side")}
        >
          <HomeIcon />
        </div>
        <div className="catalog-navbar__title">{children}</div>
        <div
          className="catalog-navbar__right-icon _icon-click"
          onClick={() => goTo("/store_client_side/basket")}
        >
          <ShoppingCartIcon />
        </div>
      </div>
    </NavBar>
  );
}