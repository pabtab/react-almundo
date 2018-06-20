import axios from 'axios';

export const getHotelList = () => axios.get('/api');

axios.defaults.baseURL = 'http://localhost:3000';