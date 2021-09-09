import {useEffect, useState} from 'react'
import api from "../config/api";

const useRequestData = (params) =>{
    const [data, setData] = useState()

    useEffect(() => {
        api.get(params)
        .then((response) =>{
            setData(response.data)
          })
        .catch((err) =>{
            console.log(err)
            alert('Ocorreu um erro, tente novamente')
        }) 

    },[params])

    return(data)

}

export default useRequestData;