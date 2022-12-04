import cookie from "js-cookie";
import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PageUnAuth } from "../components/PageUnAuth/PageUnAuth";
import { AuthContext } from "../ContextProvider/AuthContext";
import BasketPage from "../pages/BasketPage/BasketPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import { PrivateRoute } from "./PrivateRoute";


const RouterHandler = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const auth = cookie.get("authenticate");

  useEffect(() => {
    if (auth != undefined) {
      if (JSON.parse(auth) == true) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    }
  }, [isAuth]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store_client_side" element={<HomePage />} />
      <Route path="/store_client_side/catalog" element={<CatalogPage />} />
      <Route path="/store_client_side/product/:id" element={<ProductPage />} />
      <Route path="/store_client_side/catalog/:typeName" element={<CatalogPage />} />
      <Route
        path="/store_client_side/basket"
        element={
          <PrivateRoute>
            <BasketPage />
          </PrivateRoute>
        }
      />
      <Route path="/store_client_side/notAuthorized" element={<PageUnAuth />} />
    </Routes>
  );
};

export default RouterHandler;
