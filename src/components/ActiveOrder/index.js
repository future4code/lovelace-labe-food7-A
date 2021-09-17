import React, { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import Timer from "../../images/clock.svg";

import {
  Container,
  TimerContainer,
  TimerIcon,
  TextContent,
  Header,
  RestaurantName,
  Subtotal,
} from "./styles";

function ActiveOrder() {
  const {
    states: { activeOrder },
  } = useContext(GlobalContext);

  if (!activeOrder) return null;

  const { restaurantName, totalPrice } = activeOrder;

  return (
    <Container>
      <TimerContainer>
        <TimerIcon src={Timer} />
      </TimerContainer>

      <TextContent>
        <Header>Pedido em andamento</Header>
        <RestaurantName>{restaurantName}</RestaurantName>
        <Subtotal>SUBTOTAL R$ {totalPrice}</Subtotal>
      </TextContent>
    </Container>
  );
}

export default ActiveOrder;
