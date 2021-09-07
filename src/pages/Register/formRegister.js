import React from 'react';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { register } from '../../services/users';
import {ContainerFormRegister} from './styles';
import { Button } from '@material-ui/core';


const FormRegister = () =>{
    const [form, onChange, clear] = useForm({name: '', email: '',cpf:'', password: ''})

    const onSubmitFormRegister = (event) =>{
        event.preventDefault()
        register(form,clear)
        console.log(register)

    }

    return(
        <ContainerFormRegister>
            <form onSubmit={onSubmitFormRegister}>
                <TextField 
                 name={'name'}
                 value={form.name}
                 onChange={onChange}
                 placeholder={'Nome e sobrenome'}
                 label={'Nome'}
                 variant={'outlined'}
                 fullWidth
                 margin={'normal'}
                 required
                 type={'name'}
                />
                <TextField 
                 name={'email'}
                 value={form.email}
                 onChange={onChange}
                 placeholder={'email@email.com'}
                 label={'Email'}
                 variant={'outlined'}
                 fullWidth
                 margin={'normal'}
                 required
                 type={'email'}
                />
                <TextField 
                 name={'cpf'}
                 value={form.cpf}
                 onChange={onChange}
                 placeholder={'000.000.000-00'}
                 label={'CPF'}
                 variant={'outlined'}
                 fullWidth
                 margin={'normal'}
                 required
                 type={'cpf'}
                />
                <TextField
                 name={'password'}
                 value={form.password}
                 onChange={onChange}
                 placeholder={'Mínimo de 6 caracteris'}
                 label={'Senha'}
                 variant={'outlined'}
                 fullWidth
                 margin={'normal'}
                 required
                 type={'password'} 
                />
                <TextField 
                   name={'password'}
                   value={form.password}
                   onChange={onChange}
                   placeholder={'Confirme a senha anterior'}
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
                    Criar
                </Button>
            </form>
        </ContainerFormRegister>
    )
}

export default FormRegister;