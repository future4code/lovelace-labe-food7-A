import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { headers } from "../constants/authorization";

export const login = (body, clear) => {
  axios
    .post(`${BASE_URL}/login`, body, headers)
    .then((res) => {
      localStorage.setItem("tokenRappi4C", res.data.token);
      clear();
    })
    .catch((err) => alert(err.response.data.errors));
};

export const register = (body, clear) => {
  axios
    .post(`${BASE_URL}/signup`, body, headers)
    .then((res) => {
      console.log(res);
      clear();
    })
    .catch((err) => {
      console.log(err.response.data);
      alert("Registro não Efetuado, tente de novo!!");
    });
};
