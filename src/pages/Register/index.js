import React from "react";
import { useHistory } from 'react-router';
import FormRegister from '../Register/formRegister';
import {ScreenContainerRegister, SignUpButtonContainer} from './styles';
import { Button } from '@material-ui/core';

const Register = () => {
  const history = useHistory()

  const goToLogin = () =>{
    history.push('/login')
  }

  return (
    <ScreenContainerRegister>
        <h1>Tela de cadastro</h1>
      <FormRegister />
      <SignUpButtonContainer>
        <Button
        onClick={goToLogin}
        fullWidth
        variant={'text'}
        color={'neutralColor'}
        type={'submit'}
        >
      </Button>
      </SignUpButtonContainer>
    </ScreenContainerRegister>
  );
}

export default Register;
