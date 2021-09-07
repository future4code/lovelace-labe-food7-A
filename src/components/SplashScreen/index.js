import React from "react";

import LogoWhite from "../../images/logo-future-eats.svg";
import { Container, Logo } from "./styles";

function SplashScreen() {
  return (
    <Container>
      <Logo src={LogoWhite} />
    </Container>
  );
}

export default SplashScreen;
