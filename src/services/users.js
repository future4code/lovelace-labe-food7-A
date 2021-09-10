import api from "../config/api";

export const login = (body, clear, history, setIsLoading) => {
  api
    .post("/login", body)
    .then((res) => {
      console.log(res.data.token);
      localStorage.setItem("tokenRappi4C", res.data.token);
      if (res.data.user.hasAddress) {
        history.push("/list");
      } else {
        history.push("/address/form");
      }
      clear();
    })
    .catch((err) => {
      alert(err.response.data.message);
      clear();
      setIsLoading(false);
    });
};

export const register = (body, clear, history, setIsLoading) => {
  api
    .post("/signup", body)
    .then((res) => {
      localStorage.setItem("tokenRappi4C", res.data.token);
      history.push("/address/form");
      clear();
    })
    .catch((err) => {
      console.log(err.response.data);
      alert(err.response.data.message);
      setIsLoading(false);
    });
};

export const addAdress = (body, clear, history, setIsLoading) => {
  api
    .put("/address", body)
    .then((res) => {
      localStorage.setItem("tokenRappi4C", res.data.token);
      console.log(res);
      history.push("/");
      clear();
    })
    .catch((err) => {
      console.log(err.response.data);
      alert("Erro no cadastro de endereço, tente novamente!!");
      setIsLoading(false);
    });
};

export const updateProfile = (body, history, clear) => {
  api
    .put("/profile", body)
    .then((res) => {
      console.log(res, history, clear);
      history.push("/");
      clear();
    })
    .catch((err) => {
      console.log({ ...err });
      alert("Erro na atualização do cadastro, tente novamente!!");
    });
};
