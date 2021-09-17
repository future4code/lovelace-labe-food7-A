import React, { useContext, useState } from "react";
import GlobalContext from "../../global/GlobalContext";

import Modal from "../Modal";

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

function ProductCard({ product, restaurant }) {
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);

  const {
    states: { cart },
    setters: { addToCart, removeFromCart },
  } = useContext(GlobalContext);

  const productInCart = cart.products.find((p) => p.id === product.id);
  const { photoUrl, name, description, price, quantity } =
    productInCart || product;

  const handleCloseModal = () => {
    setShowQuantityModal(false);
    setProductQuantity(0);
  };

  const handleAddProduct = () => {
    addToCart(restaurant, product, productQuantity);
    handleCloseModal();
  };

  return (
    <>
      <Container>
        <Image src={photoUrl} />
        <TextContainer>
          <Name>{name}</Name>
          {quantity && <Amount>{quantity}</Amount>}
          <Ingredients>{description}</Ingredients>
          <Price>R${price}</Price>
          {productInCart ? (
            <Button active onClick={() => removeFromCart(product)}>
              remover
            </Button>
          ) : (
            <Button onClick={() => setShowQuantityModal(true)}>
              adicionar
            </Button>
          )}
        </TextContainer>

        <Modal
          open={showQuantityModal}
          onClose={handleCloseModal}
          value={productQuantity}
          onChange={setProductQuantity}
          onClick={handleAddProduct}
        />
      </Container>
    </>
  );
}

export default ProductCard;
