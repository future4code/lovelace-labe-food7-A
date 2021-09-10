import React from "react";
import FormAdress from "./formAdress";
import { ScreenAddressForm, Logo, Title } from "./styles";
import Rappi4 from "../../images/logo-future-eats-invert.svg";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddresForm = () => {
  useProtectedPage();

  return (
    <ScreenAddressForm>
      <Logo src={Rappi4} />
      <Title>Cadastro de Endereço</Title>
      <FormAdress />
    </ScreenAddressForm>
  );
};

export default AddresForm;
