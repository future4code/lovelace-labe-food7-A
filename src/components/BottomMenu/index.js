import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { StyledBottomNavigation } from "./styles";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function BottomMenu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.initialValue);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleHome = () => {
    props.clearCategory && props.clearCategory("");
    history.push("/list");
  };

  return (
    <StyledBottomNavigation
      value={value}
      onChange={handleChange}
      className={`${classes.root}`}
    >
      <BottomNavigationAction
        value="home"
        icon={<HomeOutlinedIcon />}
        onClick={handleHome}
      />
      <BottomNavigationAction
        value="cart"
        icon={<ShoppingCartOutlinedIcon />}
        onClick={() => history.push("/cart")}
      />
      <BottomNavigationAction
        value="profile"
        icon={<PersonOutlineOutlinedIcon />}
        onClick={() => history.push("/profile")}
      />
    </StyledBottomNavigation>
  );
}
