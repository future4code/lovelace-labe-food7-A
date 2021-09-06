import React from "react";
import useForm from '../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { login } from "../../services/users";
import {ContainerFormLogin} from './styles';

const FormLogin = () => {
    const [form, onChange, clear] = useForm({ email: '', password: ''})

    const onSubmitFormLogin= (event) =>{
        event.preventDefault()
        login(form, clear)
        console.log()
    }

    return(
        <ContainerFormLogin>
            <form onSubmit={onSubmitFormLogin}> 
             <TextField 
              name={'email'}
              value={form.email}
              onChange={onChange}
              label={'Email'}
              variant={'outlined'}
              fullWidth
              margin={'normal'}
              required
              type={'email'}
             />
              <TextField 
              name={'password'}
              value={form.password}
              onChange={onChange}
              label={'Senha'}
              variant={'outlined'}
              fullWidth
              margin={'normal'}
              required
              type={'password'}
             />
              <Button
                fullWidth
                variant={'contained'}
                color={'primary'}
                type={'submit'}
                >
                Entrar
            </Button>
            </form>
        </ContainerFormLogin>
    )
}

export default FormLogin;