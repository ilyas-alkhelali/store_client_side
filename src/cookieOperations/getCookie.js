import cookie from "js-cookie";

export const getCookie = (name) => {
  return cookie.get(name);
};
