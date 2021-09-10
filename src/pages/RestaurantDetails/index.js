import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import GlobalContext from "../../global/GlobalContext";
import {
  Container,
  Name,
  ContainerData,
  Shipping,
  Image,
  DeliveryTime,
  Category,
  Address,
  CategoryTitle,
  BottomMenuDetails,
} from "./styles";

function RestaurantDetails(props) {
  const { id } = useParams();
  const history = useHistory();
  const {
    states: { restaurant },
    setters: { setRestaurant },
    requests: { getRestaurant },
  } = useContext(GlobalContext);

  useEffect(() => {
    getRestaurant(id);

    return () => {
      setRestaurant(undefined);
    };
  }, [id]);

  if (!restaurant) {
    return <p>Carregando...</p>;
  }

  const categories = restaurant?.products?.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.category]: prev[curr.category]
        ? [...prev[curr.category], curr]
        : [curr],
    };
  }, {});

  console.log({ categories }, Object.entries(categories));

  console.log(restaurant);

  const renderMenu = () => {
    return Object.entries(categories).map(([category, products]) => {
      return (
        <div key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} restaurant={restaurant} />
          ))}
        </div>
      );
    });
  };

  return (
    <>
      <Header title="Restaurante" />
      <Container>
        <Image src={restaurant.logoUrl} alt="Imagem do restaurante" />
        <ContainerData>
          <Name>{restaurant.name}</Name>
          <Category>{restaurant.category}</Category>
          <div>
            <DeliveryTime>{restaurant.deliveryTime} min</DeliveryTime>
            <Shipping>Frete: R${restaurant.shipping}</Shipping>
          </div>
          <Address>{restaurant.address}</Address>
        </ContainerData>

        {renderMenu()}
        <BottomMenuDetails />
      </Container>
    </>
  );
}

export default RestaurantDetails;
