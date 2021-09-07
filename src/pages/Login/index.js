import React from "react";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { ScreenContainer, SignUpButtonContainer, SignUpButton } from './styles';
import FormLogin from '../Login/formLogin'


function Login() {
  const history = useHistory()

  return (
    <ScreenContainer>
      <h1>Login</h1>
      <FormLogin />
      <SignUpButtonContainer>
        <Button
          // onClick={}
          fullWidth
          variant={'text'}
          color={'neutralColor'}
          type={'submit'}
          size={'small'}
        >
          Não possui cadastro ? Clique aqui!!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default Login;
