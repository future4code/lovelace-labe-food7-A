import React, { useContext, useEffect, useState } from "react";
import { ContainerCards, Divider, ScreenContainer } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import MenuBar from "../../components/MenuBar";
import BottomMenu from "../../components/BottomMenu/index";
import GlobalContext from "../../global/GlobalContext";
import RestaurantCard from "../../components/RestaurantCard/index";
import { useHistory } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import ActiveOrder from "../../components/ActiveOrder";

import { Title } from "./styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Home() {
  useProtectedPage();
  const history = useHistory();
  const classes = useStyles();

  const { states, requests } = useContext(GlobalContext);

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  const filteredList = states.restaurants?.filter((nameRest) => {
    if (nameRest.name.toLowerCase().includes(search.toLowerCase())) {
      if (nameRest.category === category) {
        return true;
      } else if (category === "") {
        return true;
      } else {
        return false;
      }
    }
  });

  const getDetails = (id) => {
    history.push(`/restaurant/details/${id}`);
  };

  const restaurantList = filteredList?.map((restaurant) => {
    return (
      <RestaurantCard
        onClick={() => getDetails(restaurant.id)}
        key={restaurant.id}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
        logoUrl={restaurant.logoUrl}
      />
    );
  });

  return (
    <ScreenContainer>
      <Title>Rappi4</Title>
      <Divider />
      <TextField
        variant={"outlined"}
        className={classes.margin}
        placeholder={"Restaurante"}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <MenuBar setCategory={setCategory} />
      <ContainerCards>{restaurantList}</ContainerCards>
      <ActiveOrder />


      <BottomMenu clearCategory={setCategory} initialValue="home" />
    </ScreenContainer>
  );
}

export default Home;
