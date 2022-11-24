import React, { useEffect, useState } from "react";
import BasketListItem from "./BasketListItem/BasketListItem";
import "./BasketList.css";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import Confirmation from "./Confirmation/Confirmation";
const BasketList = () => {
  
  const [isBuied, setIsBuied] = useState(false);
  const [cost, setCost] = useState();
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const basket = [];
    let cost = 0;
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      const newObj = JSON.parse(sessionStorage.getItem(key));
      basket.push(newObj);
      cost += newObj.price;
    }
    setBasket(basket);
    setCost(cost);
  }, [sessionStorage.length]);

  const remove = (product) => {
    setBasket(basket.filter((p) => p.id !== product.id));
    sessionStorage.removeItem(product.dateOfAdd);
  };
  return (
    <div className="basket-block__container _container">
      <div className="basket-block__content">
        {basket.map((product) => (
          <div key={product.id}>
            <BasketListItem product={product} remove={remove} />
          </div>
        ))}
        <div className="basket-block__bottom-text">
          <div className="basket-block__price-block">It costs {cost} $</div>
          <div className="basket-block__button-block">
            <div
              className="basket-block__button"
              onClick={() => setIsBuied(true)}
            >
              buy
            </div>
          </div>
        </div>
      </div>
      <ModalWindow isActive={isBuied} setIsActive={setIsBuied}>
        <Confirmation basket={basket} cost={cost} setIsBuied={setIsBuied} />
      </ModalWindow>
    </div>
  );
};

export default BasketList;