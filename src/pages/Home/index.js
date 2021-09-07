import React, { useContext, useEffect } from "react"
import { Divider, ScreenContainer } from './styles'
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import MenuBar from "../../components/MenuBar";
import BottomMenu from "../../components/BottomNavigation/BottomMenu";
import GlobalContext from "../../global/GlobalContext";
import RestaurantCard from '../../components/RestaurantCard/index'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }
}))

function Home() {

  const classes = useStyles()

  const { states, setters, requests } = useContext(GlobalContext)

  useEffect(() => {
    requests.getRestaurants()
  }, [])

  const restaurantList = states.restaurants?.map(restaurant => {
    return (
      <RestaurantCard
        key={restaurant.id}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
        logoUrl={restaurant.logoUrl}
      />
    )
  })

  return (
    <ScreenContainer>
      <h3>Rappi4</h3>
      <Divider />
      <TextField
        variant={'outlined'}
        className={classes.margin}
        placeholder={'Restaurante'}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
      <MenuBar />
      {restaurantList}
      <BottomMenu />
    </ScreenContainer>
  )
}

export default Home