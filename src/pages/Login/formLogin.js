import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import TextField from "@material-ui/core/TextField";
import { login } from "../../services/users";
import { ContainerFormLogin } from "./styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router";
import Loader from "../../components/Loader";
import { ButtonLogin } from "./styles";

const FormLogin = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  const [values, setValues] = useState({
    showPassword: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitFormLogin = (event) => {
    event.preventDefault();

    setIsLoading(true);
    login(form, clear, history, setIsLoading);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ContainerFormLogin>
      <form onSubmit={onSubmitFormLogin}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"Email"}
          placeholder={"email@email.com"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          placeholder={"Mínimo 6 caracteres"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={values.showPassword ? "text" : "password"}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <ButtonLogin
          fullWidth
          variant={"contained"}
          color={"primary"}
          type={"submit"}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Entrar"}
        </ButtonLogin>
      </form>
    </ContainerFormLogin>
  );
};

export default FormLogin;
