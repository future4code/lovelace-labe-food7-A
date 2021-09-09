import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import api from "../config/api";

const GlobalState = (props) => {
  const [restaurant, setRestaurant] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [cart, setCart] = useState({
    products: [],
    restaurantId: null,
  });
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  const addToCart = (restaurantId, product, quantity = 1) => {
    const newProduct = { ...product, quantity };

    setCart((cart) => ({
      ...cart,
      restaurantId,
      products: [...cart.products, newProduct],
    }));
  };

  const removeFromCart = (product) => {
    const newCart = cart.products.filter(
      (productInCart) => productInCart.id !== product.id
    );
    setCart((cart) => ({ ...cart, products: newCart }));
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
        getActiveOrder();
        console.log("Deu certo", res.data);
      })
      .catch((err) => {
        console.log("deu errado", { ...err });
      });
  };

  const getActiveOrder = () => {
    api
      .get("/active-order")
      .then((res) => {
        setActiveOrder(res.data.order);
      })
      .catch((e) => {
        console.log({ ...e });
      });
  };

  const states = { restaurants, restaurant, cart, orders, activeOrder };

  const setters = {
    setRestaurant,
    addToCart,
    removeFromCart,
  };
  const requests = {
    getRestaurants,
    getRestaurant,
    placeOrder,
    getActiveOrder,
  };

  return (
    <GlobalContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
