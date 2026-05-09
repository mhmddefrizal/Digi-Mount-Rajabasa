import { HttpException } from '@nestjs/common';
import axios, { AxiosError } from 'axios';

export const jalur_api = axios.create({
  baseURL: 'http://localhost:3001/api/jalur',
});

// interceptor response
jalur_api.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    const message = error.response?.data;
    const status = error.response?.status;

    // kalau error dari service terbaca
    if (status && message) {
      throw new HttpException(message, status);
    }

    // fallback error
    throw new HttpException('Internal Server Error', 500);
  },
);
