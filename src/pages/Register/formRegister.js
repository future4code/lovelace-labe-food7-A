import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { register } from "../../services/users";
import { ContainerFormRegister } from "./styles";
import { Button, IconButton, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const FormRegister = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitFormRegister = (event) => {
    event.preventDefault();
    register(form, clear);
    console.log(register);
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
          type={"password"}
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
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder={"Confirme a senha anterior"}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
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
          Criar
        </Button>
      </form>
    </ContainerFormRegister>
  );
};

export default FormRegister;
