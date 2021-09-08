import React from "react";

import {
  Container,
  Image,
  TextContainer,
  Name,
  Ingredients,
  Price,
  Button,
  Amount,
} from "./styles";

function ProductCard({ image, name, ingredients, price }) {
  return (
    <Container>
      <Image src={image} />
      <TextContainer>
        <Name>{name}</Name>
        <Amount>3</Amount>
        <Ingredients>{ingredients}</Ingredients>
        <Price>R${price}</Price>
        <Button>adicionar</Button>
      </TextContainer>
    </Container>
  );
}

export default ProductCard;
