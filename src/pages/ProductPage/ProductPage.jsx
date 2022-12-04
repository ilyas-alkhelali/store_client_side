import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  actions,
  controllers,
  CreateFetchApi,
} from "../../fetchHandler/CreateFetchApi";
import "./ProductPage.css";
import CatalogNavBar from "../../components/CatalogPageComp/CatalogNavBar/CatalogNavBar";
import Product from "../../components/ProductPageComp/Product";
import { useFetching } from "../../customHooks/useFetching";
import { CircularProgress } from "@mui/material";

const ProductPage = () => {
  const param = useParams();
  const [product, setProduct] = useState({});
  const [getProductById, isLoading, error] = useFetching(async () => {
    await CreateFetchApi(controllers.product, actions.getProductById)
      .getById(param.id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((res) => console.log(res));
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    getProductById();
  }, []);

  return (
    <div className="product">
      {error && <div>{error}</div>}
      {isLoading ? (
        <div className="_custom_loader _loader"><CircularProgress /></div>
      ) : (
        <>
          <CatalogNavBar>{product.version}</CatalogNavBar>
          <Product product={product} />
        </>
      )}
    </div>
  );
};
export default ProductPage;