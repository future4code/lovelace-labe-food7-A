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
import { useState } from "react";

function Cart(props) {
  const {
    states: { cart, activeOrder },
    requests: { placeOrder },
  } = useContext(GlobalContext);
  useProtectedPage();

  console.log(activeOrder);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentForm = (e) => {
    console.log({ target: e.target });
    setPaymentMethod(e.target.value);
  };

  const onSubmitPaymentForm = (e) => {
    e.preventDefault();

    const body = {
      products: cart.products.map(({ id, quantity }) => ({ id, quantity })),
      paymentMethod,
    };

    placeOrder(cart.restaurantId, body);
  };

  const renderCartItems = () => {
    if (cart.products.length === 0) {
      return <p>carrinho vazio</p>;
    }
    return cart.products.map((item) => (
      <ProductCard key={item.id} product={item} />
    ));
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

        <PaymentForm onSubmit={onSubmitPaymentForm}>
          <PaymentTitleContainer>
            <PaymentTitle>Forma de pagamento</PaymentTitle>
          </PaymentTitleContainer>
          <FormGroup>
            <Input
              checked={paymentMethod === "money"}
              value="money"
              name="paymentMethod"
              onChange={handlePaymentForm}
              type="radio"
              id="money"
            />
            <label htmlFor="money">Dinheiro</label>
          </FormGroup>
          <FormGroup>
            <Input
              checked={paymentMethod === "creditcard"}
              value="creditcard"
              name="paymentMethod"
              onChange={handlePaymentForm}
              type="radio"
              id="creditcard"
            />
            <label htmlFor="creditcard">Cartão de Crédito</label>
          </FormGroup>
          <Button>Confirmar</Button>
        </PaymentForm>
      </Container>
      <BottomMenu initialValue="cart" />
    </>
  );
}

export default Cart;
