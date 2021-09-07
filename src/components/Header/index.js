import React from "react";

import Icon from "../../images/back.svg";
import { Container, Button, BackIcon } from "./styles";

function Header() {
  return (
    <Container>
      <Button>
        <BackIcon src={Icon} />
      </Button>
    </Container>
  );
}

export default Header;
