import axios from 'axios';
import {BASE_URL} from '../constants/url';
import {headers} from '../constants/autorization';

export const login = (body, clear) =>{
    axios.post(`${BASE_URL}/login`,body, headers)
    .then((res) =>{
        localStorage.setItem('token', res.data.token)
        clear()
    })
    .catch((err) => alert(err.response.data.errors))
}
