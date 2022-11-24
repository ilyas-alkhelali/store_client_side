import React, { useEffect, useState } from "react";
import "./Confirmation.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useFetching } from "../../../customHooks/useFetching";
import {
  actions,
  controllers,
  CreateFetchApi,
} from "../../../fetchHandler/CreateFetchApi";
import { getCookie } from "../../../cookieOperations/getCookie";
import { CircularProgress } from "@mui/material";


const Confirmation = ({ basket, cost, setIsBuied }) => {
  const [confirmed, setConfirmed] = useState(false);

  const [fetchOrder, isLoading, error] = useFetching(async () => {
    await CreateFetchApi(controllers.product, actions.buy)
      .buy(dataForRequest, JSON.parse(getCookie("user")))
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  });

  let dataForRequest = [];

  useEffect(() => {
    basket.forEach((element) => {
      dataForRequest.push({
        product: {
          id: element.id,
          typeName: element.typeName,
          version: element.version,
          price: element.price,
          about: element.about,
          amount: element.amount,
          dateOfAdd: element.dateOfAdd,
          rating: element.rating,
          numberOfRated: element.numberOfRated,
          sumOfRates: element.sumOfRates,
          orders: element.orders,
        },
        sum: element.sum,
        capacity: element.capacity,
      });
    });
    console.log(dataForRequest);
  }, [basket]);

  const onConfirm = () => {
    fetchOrder();
    setConfirmed(true);
    setIsBuied(false);
  };

  return (
    <>
      {error && <div className="confirm-block">{error}</div>}
      {isLoading 
       ? <div className="confirm-block"><CircularProgress /></div>
       : <div className="confirm-block">
        {basket.length == 0 ? (
          <div>empty</div>
        ) : (
          basket.map((prod) => (
            <div className="confirm-block__confirm-text-block" key={prod.id}>
              {prod.typeName} {prod.version}
            </div>
          ))
        )}
        <div className="confirm-block__confirm-text-block">{cost} $</div>
        <div className="confirm-text-block__text">
          {confirmed ? (
            <div className="confirm-text-block__text_confirmed">
              <div className="text_confirmed">confirmed</div> <DoneAllIcon />
            </div>
          ) : (
            <div
              className="confirm-text-block__text_confirmed "
              onClick={() => onConfirm()}
            >
              confirm
            </div>
          )}
        </div>
      </div>}
    </>
  );
};

export default Confirmation;