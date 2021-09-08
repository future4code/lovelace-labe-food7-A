import React from "react";
import { useHistory } from "react-router";
import { ScreenContainer, SignUpButton, Logo, Title } from "./styles";
import FormLogin from "../Login/formLogin";
import Rappi4 from "../../images/logo-future-eats-invert.svg";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

function Login() {
  useUnprotectedPage();
  const history = useHistory();

  const goToRegister = () => {
    history.push("/register");
  };

  return (
    <ScreenContainer>
      <Logo src={Rappi4} />
      <Title>Entrar</Title>
      <FormLogin />

      <SignUpButton onClick={goToRegister} fullWidth>
        Não possui cadastro? Clique aqui.
      </SignUpButton>
    </ScreenContainer>
  );
}

export default Login;
