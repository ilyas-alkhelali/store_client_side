import React, { useState } from "react";
import "./Forms.css";
import { TextField } from "@mui/material";
import {
  actions,
  controllers,
  CreateFetchApi,
} from "../../../fetchHandler/CreateFetchApi";
import { useFetching } from "../../../customHooks/useFetching";

const RegisterForm = ({ setIsActive }) => {

  const [user, setUser] = useState({
    age: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [handleSubmit, isLoading, error] = useFetching(async () => {
    await CreateFetchApi(controllers.auth, actions.register)
      .register(user)
      .then((res) => {
        setIsActive(false);
        console.log(res);
      })
  });

  return (
    <>
    {error && <div className="form-block">{error}</div>}
    {isLoading 
    ? <div className="form-block"></div>
    : <form className="form-block">
    <div className="form-block__title">Sign Up</div>
    <div className="from-block__form-group">
      <TextField
        className="form-group__input"
        label="Age"
        variant="standard"
        value={user.age}
        onChange={(event) => setUser({ ...user, age: event.target.value })}
      />
    </div>
    <div className="from-block__form-group">
      <TextField
        className="form-group__input"
        label="Name"
        variant="standard"
        value={user.name}
        onChange={(event) => setUser({ ...user, name: event.target.value })}
      />
    </div>
    <div className="from-block__form-group">
      <TextField
        className="form-group__input"
        label="Email"
        variant="standard"
        value={user.email}
        onChange={(event) => setUser({ ...user, email: event.target.value })}
      />
    </div>
    <div className="from-block__form-group">
      <TextField
        className="form-group__input"
        type={"password"}
        label="Password"
        variant="standard"
        value={user.password}
        onChange={(event) =>
          setUser({ ...user, password: event.target.value })
        }
      />
    </div>
    <div className="from-block__form-group">
      <TextField
        className="form-group__input"
        label="Phone Number"
        variant="standard"
        value={user.phoneNumber}
        onChange={(event) =>
          setUser({ ...user, phoneNumber: event.target.value })
        }
      />
    </div>
    <div className="form-block__form-buttom" onClick={() => handleSubmit()}>
      <div className="form-button__button">Sign up</div>
    </div>
  </form> }
    </>
  );
};
export default RegisterForm;
