import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { register } from "../../services/users";
import { ContainerFormRegister, ButtonRegister } from "./styles";
import { Button, IconButton, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useHistory } from "react-router";
import Loader from "../../components/Loader";

const FormRegister = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [passwordConfirmation, onChangeConfirmPassword] = useForm({
    confirmPassword: "",
  });

  const history = useHistory();
  const [values, setValues] = useState({
    showPassword: false,
    showConfirmation: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitFormRegister = (event) => {
    event.preventDefault();
    if (form.password !== passwordConfirmation.confirmPassword) {
      alert("As senhas são diferentes");
    } else {
      setIsLoading(true);
      register(form, clear, history, setIsLoading);
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickConfirmationPassword = () => {
    setValues({ ...values, showConfirmation: !values.showConfirmation });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ContainerFormRegister>
      <form onSubmit={onSubmitFormRegister}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Nome"}
          placeholder={"Nome e sobrenome"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder={"email@email.com"}
          label={"Email"}
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
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          placeholder={"000.000.000-00"}
          label={"CPF"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"cpf"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder={"Mínimo de 6 caracteres"}
          label={"Senha"}
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
        <TextField
          name={"confirmPassword"}
          value={passwordConfirmation.confirmPassword}
          onChange={onChangeConfirmPassword}
          placeholder={"Confirme a senha anterior"}
          label={"Confirmar"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={values.showConfirmation ? "text" : "password"}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickConfirmationPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmation ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <ButtonRegister
          fullWidth
          variant={"contained"}
          color={"primary"}
          type={"submit"}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Criar"}
        </ButtonRegister>
      </form>
    </ContainerFormRegister>
  );
};

export default FormRegister;
