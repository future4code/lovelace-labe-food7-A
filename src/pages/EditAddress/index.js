import React from "react";
import { useHistory } from "react-router";
import FormEditAddress from "./formEditAddress";
import { ScreenAddressForm, Title } from "./styles";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header";

const EditAddress = () => {
  useProtectedPage();
  const history = useHistory();

  return (
    <ScreenAddressForm>
      <Header />
      <Title>Meu Endereço</Title>
      <FormEditAddress />
    </ScreenAddressForm>
  );
};

export default EditAddress;