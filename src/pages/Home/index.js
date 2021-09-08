import React, { useContext, useEffect, useState } from "react";
import { Divider, ScreenContainer } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import MenuBar from "../../components/MenuBar";
import BottomMenu from "../../components/BottomMenu/index";
import GlobalContext from "../../global/GlobalContext";
import RestaurantCard from "../../components/RestaurantCard/index";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Home() {
  const history = useHistory();
  const classes = useStyles();

  const { states, requests } = useContext(GlobalContext);

  const [category, setCategory] = useState("");

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  const filteredList = states.restaurants?.filter((restaurant) => {
    if (restaurant.category === category) {
      return true;
    } else if (category === "") {
      return true;
    } else {
      return false;
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
      <h3>Rappi4</h3>
      <Divider />
      <TextField
        variant={"outlined"}
        className={classes.margin}
        placeholder={"Restaurante"}
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
      {restaurantList}
      <BottomMenu />
    </ScreenContainer>
  );
}

export default Home;
