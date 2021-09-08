import { SettingsOverscanSharp } from "@material-ui/icons";
import React, { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";

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
  const { states, setters, requests } = useContext(GlobalContext);
  return (
    <Container>
      <Image src={image} />
      <TextContainer>
        <Name>{name}</Name>
        <Amount>3</Amount>
        <Ingredients>{ingredients}</Ingredients>
        <Price>R${price}</Price>
        <Button onClick={setters.addToCart()}>adicionar</Button>
      </TextContainer>
    </Container>
  );
}

export default ProductCard;
