import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import {
  actions,
  controllers,
  CreateFetchApi,
} from "../../../fetchHandler/CreateFetchApi";
import "./Forms.css";
import { AuthContext } from "../../../ContextProvider/AuthContext";
import { setCookie } from "../../../cookieOperations/setCookie";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../../../customHooks/useFetching";
import { CircularProgress } from "@mui/material";

const LoginForm = ({ setIsActive }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const goTo = useNavigate();
  const [handleSubmit, isLoading, error] = useFetching(async () => {
    await CreateFetchApi(controllers.auth, actions.login)
      .login(user)
      .then((res) => {
        setIsAuth(true);
        setIsActive(false);
        goTo("/store_client_side");
        setCookie(3, "jwt", res.data.token);
        setCookie(3, "user", JSON.stringify(res.data.user.id));
        setCookie(3, "authenticate", JSON.stringify(true));
      })

      .catch((res) => console.log(res));
  });

  return (
    <>
      {error && <div className="form-block">{error}</div>}
      {isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <form className="form-block">
          <div className="form-block__title">Log In</div>
          <div className="from-block__form-group">
            <TextField
              className="form-group__input"
              label="Email"
              variant="standard"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
          </div>
          <div className="from-block__form-group">
            <TextField
              type={"password"}
              className={"form-group__input"}
              label="Password"
              variant="standard"
              value={user.password}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
          </div>
          <div
            className="form-block__form-buttom"
            onClick={() => handleSubmit()}
          >
            <div className="form-button__button">Log In</div>
          </div>
        </form>
      )}
    </>
  );
};
export default LoginForm;
