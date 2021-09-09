import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { login } from "../../services/users";
import { ContainerFormLogin } from "./styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router";

const FormLogin = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  const [values, setValues] = useState({
    showPassword: false,
  });

  const onSubmitFormLogin = (event) => {
    event.preventDefault();
    login(form, clear, history);
    console.log(login);
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
        <Button
          fullWidth
          variant={"contained"}
          color={"primary"}
          type={"submit"}
        >
          Entrar
        </Button>
      </form>
    </ContainerFormLogin>
  );
};

export default FormLogin;
