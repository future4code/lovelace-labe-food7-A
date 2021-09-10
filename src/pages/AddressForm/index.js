import React from "react";
import FormAdress from "./formAdress";
import { ScreenAddressForm, Logo, Title } from "./styles";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header";
const AddresForm = () => {
  useProtectedPage();

  return (
    <ScreenAddressForm>
      <Header />
      <Title>Meu Endereço</Title>
      <FormAdress />
    </ScreenAddressForm>
  );
};

export default AddresForm;
