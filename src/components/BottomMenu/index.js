import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { StyledBottomNavigation } from './styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: 375,
  }
})

export default function BottomMenu() {
  const classes = useStyles()
  const [value, setValue] = React.useState('home')
  const history = useHistory()

  const goToPage = (value) => {
    if (value === 'home') {
      history.push('/')
    } else {
      history.push(`/${value}`)
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
    goToPage(newValue)
  }

  return (
    <StyledBottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction value="home" icon={<HomeOutlinedIcon />} />
      <BottomNavigationAction value="cart" icon={<ShoppingCartOutlinedIcon />} />
      <BottomNavigationAction value="profile" icon={<PersonOutlineOutlinedIcon />} />
    </StyledBottomNavigation>
  )
}
