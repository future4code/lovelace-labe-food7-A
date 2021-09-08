import React, { useContext } from "react";

import GlobalContext from "../../global/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import ProductCard from "../../components/ProductCard";

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
  BottomMenuCart,
  FormGroup,
} from "./styles";

function Cart(props) {
  const {
    states: { restaurant },
    // setters: { setRestaurant },
    // requests: { getRestaurant },
  } = useContext(GlobalContext);
  useProtectedPage();
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

          <ProductsContainer>
            {/* <ProductCard
            // key={restaurant.id}
            image={restaurant.photoUrl}
            name={restaurant.name}
            ingredients={restaurant.description}
            price={restaurant.price}
          /> */}
          </ProductsContainer>

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
      <BottomMenuCart />
    </>
  );
}

export default Cart;
