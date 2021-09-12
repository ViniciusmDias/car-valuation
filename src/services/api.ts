import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://creditas-price-api-v2.herokuapp.com',
});
