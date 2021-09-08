import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import GlobalContext from "../../global/GlobalContext";

function RestaurantDetails() {
  const { id } = useParams();
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

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Tela com detalhes do restaurante selecionado</p>
    </div>
  );
}

export default RestaurantDetails;
