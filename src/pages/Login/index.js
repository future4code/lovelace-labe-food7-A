import React from "react";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import {ScreenContainer, SignUpButtonContainer} from './styles';
import FormLogin from '../Login/formLogin'

function Login() {
  const history = useHistory()

  const goToRegister = () =>{
    history.push('/register')
  }
   

  return (
    <ScreenContainer>
      <h1>Login</h1>
      <FormLogin />
      <SignUpButtonContainer>
        <Button
           onClick={goToRegister}
          fullWidth
          variant={'text'}
          color={'neutralColor'}
          type={'submit'}
        >
        Não possui cadastro ? Clique aqui!!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default Login;
