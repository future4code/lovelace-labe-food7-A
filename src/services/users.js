import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { headers } from "../constants/authorization";

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/login`, body, headers)
    .then((res) => {
      localStorage.setItem("tokenRappi4C", res.data.token);
      if (res.data.user.hasAddress) {
        history.push("/");
      } else {
        history.push("/address/form");
      }
      clear();
    })
    .catch((err) => {
      alert(err.response.data.message);
      clear();
    });
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

export const addAdress = (body, clear) => {
  axios
    .put(`${BASE_URL}/address`, body, headers)
    .then((res) => {
      localStorage.setItem("tokenRappi4C", res.data.token);
      console.log(res);
      clear();
    })
    .catch((err) => {
      console.log(err.response.data);
      alert("Erro no cadastro de endereço, tente novamente!!");
    });
};
