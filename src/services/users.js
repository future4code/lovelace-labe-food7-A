import axios from 'axios';
import { BASE_URL } from '../constants/url';
import { headers } from '../constants/authorization';

export const login = (body, clear) => {
    axios.post(`${BASE_URL}/login`, body, headers)
        .then((res) => {
            localStorage.setItem('tokenRappi4C', res.data.token)
            clear()
        })
        .catch((err) => alert(err.response.data.errors))
}