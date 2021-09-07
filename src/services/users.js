import axios from 'axios';
import {BASE_URL} from '../constants/url';
import {headers} from '../constants/autorization';

export const login = (body, clear) =>{
    axios.post(`${BASE_URL}/login`,body, headers)
    .then((res) =>{
        console.log(res)
        clear()
    })
    .catch((err) => 
    console.log(err.response.data))
    alert('Usuário não encontrado!')
}

export const register = (body, clear) =>{
    axios.post(`${BASE_URL}/signup`, body, headers)
    .then((res) =>{
        console.log(res)
        clear()
    })
    .catch((err) =>{
        console.log(err.response.data)
        alert('Registro não Efetuado, tente de novo!!')
    })

}

export const addAdress = (body, clear ) =>{
    axios.post(`${BASE_URL}/address`, body, headers) //falta o token para funcionar 
    .then((res) =>{
        console.log(res)
        clear()
    })
    .catch((err) =>{
        console.log(err.response.data)
        alert('Erro no cadastro de endereço, tente de novo!!')
    })
}
