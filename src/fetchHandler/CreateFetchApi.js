import axios from "axios";
import cookie from "js-cookie";
import { getCookie } from "../cookieOperations/getCookie";

export const controllers = {
  auth: "Auth",
  product: "Products",
  user: "Users",
};
export const actions = {
  register: "register",
  login: "login",
  removeAccount: "removeAccount",
  getAllProducts: "getAllProducts",
  getProductById: "getProductById",
  getProductsByTypeName: "getProductsByTypeName",
  getOrders: "getOrders",
  updateProduct: "updateProduct",
  addProduct: "addProduct",
  deleteProduct: "deleteProduct",
  generateRating: "generateRating",
  buy: "buy",
  getUsers: "getUsers",
  getUserById: "getUserById",
};

export const CreateFetchApi = (controller, action) => {
  const url = "https://localhost:7080/api/" + controller + "/" + action + "/";
 
  const jwt = getCookie("jwt");

  return {
    get: () => axios.get(url),
    getAllProducts: () =>
      axios.get(url, {
        headers: {
          authorization: `bearer ${jwt}`,
        },
      }),
    register: (newUser) => axios.post(url, newUser),
    login: (user) => axios.post(url, user),
    getById: (id) => axios.get(url + id),
    deleteById: (id) => axios.delete(url + id),
    updateById: (id, obj) => axios.put(url + id, obj),
    add: (obj) => axios.post(url, obj),
    generateRating: (id, rating) => axios.put(url + id + "/" + rating),
    buy: (list, id) => axios.post(url + id, list),
    getByTypeName: (type) => axios.get(url + type),
  };
};
