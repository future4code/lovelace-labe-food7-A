import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AddressForm from "../pages/AddressForm";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import RestaurantDetails from "../pages/RestaurantDetails";
import EditProfile from "../pages/EditProfile";
import SplashScreen from "../pages/SplashScreen/index";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/address/form" component={AddressForm} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/list" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/restaurant/details/:id"
          component={RestaurantDetails}
        />
        <Route exact path="/search" component={EditProfile} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
