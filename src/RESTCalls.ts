
import axios from 'axios'
export function callJoke() {
    const response =  axios.get('http://localhost:3000/')
    return response;
}


