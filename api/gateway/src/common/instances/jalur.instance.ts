import axios from 'axios';

export const jalur_api = axios.create({
  baseURL: 'http://localhost:3001/api/jalur',
});
