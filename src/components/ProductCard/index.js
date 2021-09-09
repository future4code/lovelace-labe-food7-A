import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { SettingsOverscanSharp } from "@material-ui/icons";
import React, { useContext, useState } from "react";
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

function ProductCard({ product }) {
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);

  const {
    states: { restaurant, cart },
    setters: { addToCart, removeFromCart },
  } = useContext(GlobalContext);

  const productInCart = cart.find((p) => p.id === product.id);
  const { photoUrl, name, description, price, quantity } =
    productInCart || product;

  const handleCloseModal = () => {
    setShowQuantityModal(false);
    setProductQuantity(0);
  };

  const handleAddProduct = () => {
    addToCart(product, productQuantity);
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
            <Button onClick={() => removeFromCart(product)}>remover</Button>
          ) : (
            <Button onClick={() => setShowQuantityModal(true)}>
              adicionar
            </Button>
          )}
        </TextContainer>
      </Container>

      <Dialog open={showQuantityModal} onClose={handleCloseModal}>
        <DialogTitle>Selecione a quantidade desejada</DialogTitle>
        <DialogContent>
          <FormControl>
            <InputLabel id="product-quantity-select">Quantidade</InputLabel>
            <Select
              labelId="product-quantity-select"
              value={productQuantity}
              onChange={(e) => {
                setProductQuantity(Number(e.target.value));
              }}
            >
              {Array(31)
                .fill("")
                .map((_, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <button onClick={handleAddProduct} disabled={!productQuantity}>
            Adicionar ao carrinho
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProductCard;
