import axios from 'axios';

const http = axios.create({
  baseURL: 'http://192.168.1.2:3000',
});

export default http;