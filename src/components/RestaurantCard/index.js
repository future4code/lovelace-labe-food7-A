import React from "react";
import { Container, ContainerData, Name } from "./styles";

function RestaurantCard(props) {
  return (
    <Container>
      <img src={props.logoUrl} alt="Imagem do restaurante" />
      <Name>{props.name}</Name>
      <ContainerData>
        <p>{props.deliveryTime} min</p>
        <p>Frete: R${props.shipping}</p>
      </ContainerData>
    </Container>
  );
}

export default RestaurantCard;
