import axios from 'axios';

const api = axios.create({
  // baseURL: process.env.SERVER_URL | 'http://localhost:8080',
  baseURL: 'http://localhost:8080',
});

export default api;
