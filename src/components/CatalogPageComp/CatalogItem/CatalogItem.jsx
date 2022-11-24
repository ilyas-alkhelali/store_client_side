import React, { useContext, useState } from "react";
import "./CatalogItem.css";
import testPhoto from "./../../../pictures/testPic.png";
import { useNavigate } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { AuthContext } from "../../../ContextProvider/AuthContext";

const CatalogItem = ({ product }) => {
  const goTo = useNavigate();

  const [isAdded, setIsAdded] = useState(true);

  const { isAuth } = useContext(AuthContext);

  const addToBasketHandler = () => {
    if (isAuth) {
      setIsAdded(!isAdded);
      if (isAdded == true) {
        sessionStorage.setItem(product.dateOfAdd, JSON.stringify(product));
      } else {
        sessionStorage.removeItem(product.dateOfAdd);
      }
    } else {
      goTo("/store_client_side/notAuthorized");
    }
  };

  return (
    <div className="catalog-block__item">
      <div className="catalog-block__item_container">
        <div className="catalog-block__item-content">
          <div className="catalog-block__image-block">
            <img
              className="catalog-block__image-block_image"
              src={testPhoto}
              alt={"load"}
              crossOrigin=""
            />
          </div>
          <div className="catalog-block__item-text">
            <div className="catalog-block__title">
              {product.typeName} {product.version}
            </div>
            <div className="catalog-block__subtitle">{product.price} $</div>
            <div className="catalog-block__active-content">
              <div
                className="catalog-block__button"
                onClick={() => goTo(`/store_client_side/product/${product.id}`)}
              >
                Learn more
              </div>
              <div
                className="catalog-block__button"
                onClick={() => addToBasketHandler()}
              >
                {isAdded ? (
                  "Add to basket"
                ) : (
                  <div className="catalog-block__button_added">
                    Added <DoneAllIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CatalogItem;