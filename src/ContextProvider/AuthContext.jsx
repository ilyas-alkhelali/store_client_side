import { createContext, useMemo, useState } from "react";
import { JwtProvider } from "./JwtContext";

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);

  return (
    <JwtProvider>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </JwtProvider>
  );
};
