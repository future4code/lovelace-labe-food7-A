import React from "react";
import { useHistory } from "react-router";
// import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import FormAdress from "./formAdress";
import {ScreenAddressForm, Logo, Title} from './styles';
import Rappi4 from "../../images/logo-future-eats-invert.svg";

const AddresForm = () => {
  // useUnprotectedPage()
  const history = useHistory()


  return (
    <ScreenAddressForm>
      <Logo src={Rappi4} />
       <Title>Cadastro de Endereço</Title>
      <FormAdress />
    </ScreenAddressForm>
  );
}

export default AddresForm;
