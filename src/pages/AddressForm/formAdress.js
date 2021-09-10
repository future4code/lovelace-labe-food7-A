import React from "react";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { addAdress } from "../../services/users";
import { ContainerFormAdress } from "./styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const FormAdress = () => {
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const history = useHistory();
  const onSubmitFormAdress = (event) => {
    event.preventDefault();
    addAdress(form, clear, history);
    console.log(addAdress);
  };

  return (
    <ContainerFormAdress>
      <form onSubmit={onSubmitFormAdress}>
        <TextField
          name={"street"}
          value={form.street}
          onChange={onChange}
          label={"Logradouro"}
          placeholder={"Rua / Av."}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"street"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"number"}
          value={form.number}
          onChange={onChange}
          label={"Número"}
          placeholder={"Número"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"number"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          label={"Complemento"}
          placeholder={"Apto. / Bloco"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"complement"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          label={"Bairro"}
          placeholder={"Bairro"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"neighbourhood"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"city"}
          value={form.city}
          onChange={onChange}
          label={"Cidade"}
          placeholder={"Cidade"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"city"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"state"}
          value={form.state}
          onChange={onChange}
          label={"Estado"}
          placeholder={"Estado"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"state"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          fullWidth
          variant={"contained"}
          color={"primary"}
          type={"submit"}
        >
          Salvar
        </Button>
      </form>
    </ContainerFormAdress>
  );
};

export default FormAdress;
