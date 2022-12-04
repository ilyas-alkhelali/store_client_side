import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import AppleIcon from "@mui/icons-material/Apple";
import "./HomeNavBar.css";
import LoginForm from "../../UI/Forms/LoginForm";
import RegisterForm from "../../UI/Forms/RegisterForm";
import { AuthContext } from "../../../ContextProvider/AuthContext";
import cookie from "js-cookie";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import NavBar from "../../UI/NavBar/NavBar";
import { useFetching } from "../../../customHooks/useFetching";
import { actions, controllers, CreateFetchApi } from "../../../fetchHandler/CreateFetchApi";
import { getCookie } from "../../../cookieOperations/getCookie";

const HomeNavBar = () => {
  const goTo = useNavigate();
  const [isLog, setIsLog] = useState(false);
  const [isReg, setIsReg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("user");
  const [menuIconStyle, setMenuIconStyle] = useState("");
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const[removeFromDb, isLoading, error] = useFetching(async () => {
    await CreateFetchApi(controllers.auth, actions.removeAccount)
    .deleteById(JSON.parse(getCookie('user')))
  })
  const logout = () => {
    setIsAuth(false);
    cookie.remove('user')
    cookie.remove('jwt');
    cookie.remove('authenticate');
  };
  const loginOpenHandler = () => {
    setIsLog(true);
    setIsOpen(false);
    setMenuIconStyle("");
  };
  const regOpenHandler = () => {
    setIsReg(true);
    setIsOpen(false);
    setMenuIconStyle("");
  };
  const burgerOpenHandler = () => {
    setIsOpen(true);
    setMenuIconStyle(" navbar__burger_icon_opened");
  };
  const burgerCloseHandler = () => {
    setIsOpen(false);
    setMenuIconStyle("");
  };
  const removeAccount = () => {
    let isRemove = window.confirm("Remove your account?");
    if(isRemove){
      removeFromDb();
      logout();
    }
  }
console.log(userName)
  return (
    <>
      <NavBar>
        <div
          className="navbar__logo"
          onClick={() => goTo("/store_client_side")}
        >
          <AppleIcon fontSize="large" />
        </div>

        {/* WITHOUT BURGER ICON*/}
        <div className="navbar__menu menu">
          <div className="menu__list">
            <div
              className="menu__item"
              onClick={() => goTo(`/store_client_side/catalog/${"IPhone"}`)}
            >
              iPhone
            </div>
            <div
              className="menu__item"
              onClick={() => goTo(`/store_client_side/catalog/${"IPad"}`)}
            >
              iPad
            </div>
            <div
              className="menu__item"
              onClick={() => goTo(`/store_client_side/catalog/${"MacBook"}`)}
            >
              MacBook
            </div>
            <div
              className="menu__item"
              onClick={() =>
                goTo(`/store_client_side/catalog/${"Apple Watch"}`)
              }
            >
              Apple Watch
            </div>
          </div>
          <div className="menu__auth-content">
            {isAuth ? (
             <>
              <div className="menu__item" onClick={() => removeAccount()}>{userName.toUpperCase()}</div>
               <div className="menu__item" onClick={() => logout()}>
                Log out
              </div>
             </>
              
            ) : (
              <>
                <div className="menu__item" onClick={() => setIsLog(true)}>
                  Log In
                </div>
                <div className="menu__item" onClick={() => setIsReg(true)}>
                  Sign Up
                </div>
              </>
            )}
          </div>
        </div>

        {/* WITH BURGER ICON*/}
        <div className="navbar__burger">
          <div className={`navbar__burger_icon${menuIconStyle}`}>
            <MenuIcon onClick={() => burgerOpenHandler()} />
          </div>
          <div className="navbar__burger_content">
            <Drawer
              anchor={"right"}
              open={isOpen}
              onClose={() => burgerCloseHandler()}
            >
              <div className="menu__list">
                <div className="menu__title">Menu</div>
                <div
                  className="menu__item"
                  onClick={() => goTo(`/store_client_side/catalog/${"IPhone"}`)}
                >
                  iPhone
                </div>
                <div
                  className="menu__item"
                  onClick={() => goTo(`/store_client_side/catalog/${"IPad"}`)}
                >
                  iPad
                </div>
                <div
                  className="menu__item"
                  onClick={() =>
                    goTo(`/store_client_side/catalog/${"MacBook"}`)
                  }
                >
                  MacBook
                </div>
                <div
                  className="menu__item"
                  onClick={() =>
                    goTo(`/store_client_side/catalog/${"Apple Watch"}`)
                  }
                >
                  Apple Watch
                </div>
                {isAuth ? (
                  <div className="menu__item" onClick={() => logout()}>
                    Log out
                  </div>
                ) : (
                  <>
                    <div
                      className="menu__item"
                      onClick={() => loginOpenHandler()}
                    >
                      Log In
                    </div>
                    <div
                      className="menu__item"
                      onClick={() => regOpenHandler()}
                    >
                      Sign Up
                    </div>
                  </>
                )}
              </div>
            </Drawer>
          </div>
        </div>

        <ModalWindow isActive={isLog} setIsActive={setIsLog}>
          <LoginForm setIsActive={setIsLog} userName={userName} setUserName={setUserName}/>
        </ModalWindow>
        <ModalWindow isActive={isReg} setIsActive={setIsReg}>
          <RegisterForm setIsActive={setIsReg} />
        </ModalWindow>
      </NavBar>
    </>
  );
};
export default HomeNavBar;
