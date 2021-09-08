import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import api from "../config/api";

const GlobalState = (props) => {
  const [restaurant, setRestaurant] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isProductAlreadyInCart = cart.find(
      (productInCart) => productInCart.id === product.id
    );

    if (isProductAlreadyInCart) {
      const newCart = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          const newProduct = {
            ...productInCart,
            quantity: productInCart.quantity + 1,
          };
          return newProduct;
        }
        return productInCart;
      });

      setCart(newCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
      const newCart = [...cart, newProduct];
      setCart(newCart);
    }
  };

  const removeFromCart = (product) => {
    let newCart = cart.map((productInCart) => {
      if (productInCart.id === product.id) {
        const newProduct = {
          ...productInCart,
          quantity: productInCart.quantity - 1,
        };
        return newProduct;
      }
      return productInCart;
    });

    newCart = newCart.filter((productInCart) => {
      if (productInCart.quantity < 1) {
        return false;
      } else {
        return true;
      }
    });

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

  const states = { restaurants, restaurant };
  const setters = { setRestaurant, addToCart, removeFromCart };
  const requests = { getRestaurants, getRestaurant };

  return (
    <GlobalContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
