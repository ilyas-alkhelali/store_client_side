import { createContext, useMemo, useState } from "react";

export const JwtContext = createContext("");

export const JwtProvider = ({ children }) => {
  const [jwt, setJwt] = useState("");
  const value = useMemo(() => ({ jwt, setJwt }), [jwt]);

  return <JwtContext.Provider value={value}>{children}</JwtContext.Provider>;
};
