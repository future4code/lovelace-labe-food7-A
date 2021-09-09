import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import api from "../config/api";

const GlobalState = (props) => {
  const [restaurant, setRestaurant] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const newProduct = { ...product, quantity };
    const newCart = [...cart, newProduct];
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter(
      (productInCart) => productInCart.id !== product.id
    );
    setCart(newCart);
  };

  const getRestaurants = () => {
    api
      .get("/restaurants")
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getRestaurant = (id) => {
    api.get(`/restaurants/${id}`).then(({ data }) => {
      setRestaurant(data.restaurant);
    });
  };

  const placeOrder = (id, body) => {
    api
      .post(`/restaurants/${id}/order`, body)
      .then((res) => {
        setOrders(res.data);
        console.log("Deu certo", res.data);
      })
      .catch((err) => {
        console.log("deu errado", { ...err });
      });
  };

  const states = { restaurants, restaurant, cart };
  const setters = { setRestaurant, addToCart, removeFromCart };
  const requests = { getRestaurants, getRestaurant, placeOrder };

  return (
    <GlobalContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
