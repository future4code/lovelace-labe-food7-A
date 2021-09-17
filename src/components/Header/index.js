import React from "react";
import { useHistory } from "react-router";

import Icon from "../../images/back.svg";
import { Container, Button, BackIcon, Title } from "./styles";

function Header(props) {
  const history = useHistory();

  const handleButtonClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <Button onClick={handleButtonClick}>
        <BackIcon src={Icon} />
      </Button>
      <Title>{props.title}</Title>
    </Container>
  );
}

export default Header;
