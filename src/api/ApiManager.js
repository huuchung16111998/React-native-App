import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/auth',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
