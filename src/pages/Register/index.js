import React from "react";
import { useHistory } from "react-router";
import FormRegister from "../Register/formRegister";
import {
  ScreenContainerRegister,
  SignUpButtonContainer,
  Title,
  LogoRappi,
} from "./styles";
import { Button } from "@material-ui/core";
import Rappi4 from "../../images/logo-future-eats-invert.svg";
import Header from "../../components/Header";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const Register = () => {
  useUnprotectedPage();
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <ScreenContainerRegister>
      <Header />
      <LogoRappi src={Rappi4} />
      <Title> Cadastrar </Title>
      <FormRegister />
      <SignUpButtonContainer>
        <Button
          onClick={goToLogin}
          fullWidth
          variant={"text"}
          color={"neutralColor"}
          type={"submit"}
        ></Button>
      </SignUpButtonContainer>
    </ScreenContainerRegister>
  );
};

export default Register;
