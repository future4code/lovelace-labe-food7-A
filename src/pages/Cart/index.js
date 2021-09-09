import React, { useContext } from "react";

import GlobalContext from "../../global/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import ProductCard from "../../components/ProductCard";
import BottomMenu from "../../components/BottomMenu";

import {
  Container,
  Title,
  MyAddress,
  AddressTitle,
  Street,
  RestaurantInfoContainer,
  RestaurantName,
  RestaurantAddress,
  Delivery,
  ProductsContainer,
  ShippingPrice,
  Total,
  PaymentForm,
  PaymentTitleContainer,
  PaymentTitle,
  Input,
  Button,
  PricesContainer,
  // BottomMenuCart,
  FormGroup,
} from "./styles";

function Cart(props) {
  const {
    states: { restaurant, cart },
  } = useContext(GlobalContext);
  useProtectedPage();

  const renderCartItems = () => {
    if (cart.length === 0) {
      return <p>carrinho vazio</p>;
    }
    return cart.map((item) => <ProductCard key={item.id} product={item} />);
  };

  return (
    <>
      <Container>
        <Title>Meu carrinho</Title>

        <MyAddress>
          <AddressTitle>Endereço de entrega</AddressTitle>
          <Street>Rua Alessandra Vieira, 42</Street>
        </MyAddress>

        <RestaurantInfoContainer>
          <RestaurantName>Bullguer Vila Madalena</RestaurantName>
          <RestaurantAddress>
            R. Fradique Coutinho, 1136 - Vila Madalena
          </RestaurantAddress>
          <Delivery>30 - 45 min</Delivery>

          <ProductsContainer>{renderCartItems()}</ProductsContainer>

          <PricesContainer>
            <ShippingPrice>Frete R$ 6,00</ShippingPrice>
            <Total>
              <span>SUBTOTAL</span>R$ 67,00
            </Total>
          </PricesContainer>
        </RestaurantInfoContainer>

        <PaymentForm>
          <PaymentTitleContainer>
            <PaymentTitle>Forma de pagamento</PaymentTitle>
          </PaymentTitleContainer>
          <FormGroup>
            <Input type="radio" />
            <label>Dinheiro</label>
          </FormGroup>
          <FormGroup>
            <Input type="radio" />
            <label> Cartão de Crédito</label>
          </FormGroup>
          <Button>Confirmar</Button>
        </PaymentForm>
      </Container>
      <BottomMenu initialValue="cart" />
    </>
  );
}

export default Cart;
