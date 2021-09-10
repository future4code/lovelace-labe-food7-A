import React, { useContext, useEffect } from "react";

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
  FormGroup,
  EmptyCart,
} from "./styles";
import { useState } from "react";

function Cart(props) {
  const {
    states: { cart, profile },
    requests: { placeOrder, getProfileData },
  } = useContext(GlobalContext);
  useProtectedPage();

  useEffect(() => {
    getProfileData();
  }, []);

  console.log(cart.products);

  const handleTotal = () => {
    const cartTotal = cart.products?.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
    return cartTotal;
  };

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

    placeOrder(cart.restaurant?.id, body);
  };

  const renderCartItems = () => {
    if (cart.products.length === 0) {
      return <EmptyCart>Carrinho vazio</EmptyCart>;
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
          <Street>{profile?.user.address}</Street>
        </MyAddress>

        <RestaurantInfoContainer>
          {cart.restaurant && (
            <>
              <RestaurantName>{cart.restaurant?.name}</RestaurantName>
              <RestaurantAddress>{cart.restaurant?.address}</RestaurantAddress>
              <Delivery>{cart.restaurant?.deliveryTime} min</Delivery>
            </>
          )}

          <ProductsContainer>{renderCartItems()}</ProductsContainer>

          <PricesContainer>
            <ShippingPrice>Frete R$ {cart.restaurant?.shipping}</ShippingPrice>
            <Total>
              <span>SUBTOTAL</span>R$ {handleTotal()}
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
