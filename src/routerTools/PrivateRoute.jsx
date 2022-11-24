import { useContext } from "react";
import { PageUnAuth } from "../components/PageUnAuth/PageUnAuth";
import { AuthContext } from "../ContextProvider/AuthContext";


export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? children : <PageUnAuth />;
};
