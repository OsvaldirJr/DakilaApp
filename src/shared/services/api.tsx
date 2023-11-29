import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.dakilatecnologia.com.br',
});

export default api;