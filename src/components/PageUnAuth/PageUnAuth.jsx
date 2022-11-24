import React, { useState } from "react";
import LoginForm from "../UI/Forms/LoginForm";
import RegisterForm from "../UI/Forms/RegisterForm";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import "./PageUnAuth.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export const PageUnAuth = () => {

  const [isLog, setIsLog] = useState(false);
  const [isReg, setIsReg] = useState(false);

  const gotTo = useNavigate();
  return (
    <div className="notauth-block">
      <div className="notauth-block__container _container">
        <div className="notauth-block__icon" onClick={() => gotTo(-1)}>
          <ArrowBackIosIcon sx={{ fontSize: 30, margin: 2 }} />
        </div>
        <div className="notauth-block__title">
          your account is not authorized
        </div>
        <div className="notauth-block__notauth-button-block">
          <div
            className="notauth-button-block__button"
            onClick={() => setIsLog(true)}
          >
            Log In
          </div>
          <div
            className="notauth-button-block__button"
            onClick={() => setIsReg(true)}
          >
            Sign In
          </div>
        </div>
      </div>
      <ModalWindow isActive={isLog} setIsActive={setIsLog}>
        <LoginForm setIsActive={setIsLog} />
      </ModalWindow>
      <ModalWindow isActive={isReg} setIsActive={setIsReg}>
        <RegisterForm setIsActive={setIsReg} />
      </ModalWindow>
    </div>
  );
};
