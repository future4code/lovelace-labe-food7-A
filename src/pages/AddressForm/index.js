import React from "react";
import { useHistory } from "react-router";
import FormAdress from "./formAdress";
import { ScreenAddressForm, Logo, Title } from "./styles";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header";
const AddresForm = () => {
  useProtectedPage();
  const history = useHistory();

  return (
    <ScreenAddressForm>
      <Header />
      <Title>Meu Endereço</Title>
      <FormAdress />
    </ScreenAddressForm>
  );
};

export default AddresForm;
