import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.82.13.140:3000',
});

export default api;