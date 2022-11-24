import { CircularProgress } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  actions,
  controllers,
  CreateFetchApi,
} from "../../fetchHandler/CreateFetchApi";
import CatalogItem from "./CatalogItem/CatalogItem";
import "./Catalog.css";
import { useFetching } from "../../customHooks/useFetching";
import { useMemo } from "react";
import CatalogSort from "./CatalogSort/CatalogSort";

const Catalog = ({ typeName }) => {
  const [products, setProducts] = useState([]);

  const [selectedSort, setSelectedSort] = useState({
    value: "",
    descending: false,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const [fetchAllProducts, isAllLoading, allError] = useFetching(async () => {
    await CreateFetchApi(controllers.product, actions.getAllProducts)
      .getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((res) => console.log(res));
  });

  const [fetchProductsByTypeName, isByTypeLoading, byTypeError] = useFetching(
    async () => {
      await CreateFetchApi(controllers.product, actions.getProductsByTypeName)
        .getByTypeName(typeName)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((res) => console.log(res));
    }
  );

  useEffect(() => {
    if (typeName == undefined) {
      fetchAllProducts();
    } else {
      fetchProductsByTypeName();
    }
  }, [typeName]);
  useEffect(() => {
    console.log(allError);
  }, [allError]);
  const sortedProducts = useMemo(() => {
    if (selectedSort.value) {
      if (selectedSort.descending) {
        return [...products]
          .sort((a, b) =>
            a[selectedSort.value]
              .toString()
              .localeCompare(b[selectedSort.value], undefined, {
                numeric: true,
              })
          )
          .reverse();
      } else {
        return [...products].sort((a, b) =>
          a[selectedSort.value]
            .toString()
            .localeCompare(b[selectedSort.value], undefined, { numeric: true })
        );
      }
    } else {
      return products;
    }
  }, [selectedSort, products]);

  const searchedAndSortedProducts = useMemo(() => {
    return sortedProducts.filter((product) =>
      `${product.typeName} ${product.version}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedProducts]);

  return (
    <div className="catalog-block">
      <div className="catalog-block__container _container">
        {allError || byTypeError
          ? <div className="_error">{allError || byTypeError}</div> 
          : <div>
              <CatalogSort
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              {isAllLoading || isByTypeLoading 
                ? <div className="_loader">
                    <CircularProgress color="success" />
                  </div>
                : products.length == 0
                    ? <div className="_error">There is no {typeName ? typeName + "s" : "products"}</div>
                    : <div className="catalog-block__content">
                        {searchedAndSortedProducts.map((product) => (
                          <CatalogItem product={product} key={product.id} />
                        ))}
                      </div>
              }
            </div>
          }  
      </div>
    </div>
  );
};

export default Catalog;
