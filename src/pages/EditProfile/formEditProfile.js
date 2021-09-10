import React from "react";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import {  updateProfile } from "../../services/users";
import {ContainerFormEditProfile} from './styles';

const FormEditProfile = () =>{
    const [form, onChange, clear] = useForm({ 
    name: "",
    email: "",
    cpf: "" 
    })
    const history = useHistory()
    const onSubmitFormEditProfile = (event) =>{
        event.preventDefault()
        updateProfile(form,history,clear)
        console.log(updateProfile)
    }

    return(
        <ContainerFormEditProfile>
            <form onSubmit={onSubmitFormEditProfile}>
                <TextField 
                  name={"name"}
                  value={form.name}
                  onChange={onChange}
                  label={"Nome"}
                  placeholder={"Nome"}
                  variant={"outlined"}
                  fullWidth
                  margin={"normal"}
                  type={"name"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField 
                  name={"email"}
                  value={form.email}
                  onChange={onChange}
                  label={"Email"}
                  placeholder={"Email"}
                  variant={"outlined"}
                  fullWidth
                  margin={"normal"}
                  type={"email"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField 
                 name={"cpf"}
                 value={form.cpf}
                 onChange={onChange}
                 label={"CPF"}
                 placeholder={"000.000.000-00"}
                 variant={"outlined"}
                 fullWidth
                 margin={"normal"}
                 type={"cpf"}
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
        </ContainerFormEditProfile>
    )

}

export default FormEditProfile;