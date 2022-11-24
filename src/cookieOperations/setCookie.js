import cookie from "js-cookie";

export const setCookie = (expires, name, value) => {
  return cookie.set(name, value, {
    expires: expires,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
