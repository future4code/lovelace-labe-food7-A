import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import api from "../config/api";
import * as restaurantsService from "../services/restaurants";

const GlobalState = (props) => {
  const [restaurant, setRestaurant] = useState();
  const [restaurants, setRestaurants] = useState();
  const [cart, setCart] = useState({
    products: [],
    restaurant: null,
  });
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);
  const [profile, setProfile] = useState();

  useEffect(() => {
    const localCart = localStorage.getItem('cartRaapi4C')
    localCart &&
      setCart(JSON.parse(localCart))
  }, [])

  useEffect(() => {
    localStorage.setItem('cartRaapi4C', JSON.stringify(cart))
  }, [cart])

  const addToCart = (restaurant, product, quantity = 1) => {
    const newProduct = { ...product, quantity };

    setCart((cart) => ({
      ...cart,
      restaurant,
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
    restaurantsService.getRestaurant(id).then(({ data }) => {
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

  const getProfileData = () => {
    api
      .get("/profile")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((e) => {
        console.log("Não pegou o perfil", { ...e });
      });
  };

  const states = {
    restaurants,
    restaurant,
    cart,
    orders,
    activeOrder,
    profile,
  };

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
    getProfileData,
  };

  return (
    <GlobalContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
