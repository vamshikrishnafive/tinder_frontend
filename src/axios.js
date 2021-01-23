import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-vam.herokuapp.com/'
})

export default instance;