import axios from "axios"
import React, { useState, useEffect } from "react"
import GlobalContext from "./GlobalContext"
import { BASE_URL } from "../constants/urls"

const GlobalState = (props) => {

    const [restaurants, setRestaurants] = useState([])

    const token = localStorage.getItem('tokenRappi4C')

    const headers = {
        headers: {
            auth: token
        }
    }

    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`, headers)
        .then(res => {
            setRestaurants(res.data.restaurants)
        }).catch(err => {
            console.log(err.response)
        })
    }

    

    const states = { restaurants }
    const setters = {  }
    const requests = { getRestaurants }

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState