import { HttpException } from '@nestjs/common';
import axios, { AxiosError } from 'axios';

export const jalur_api = axios.create({
  baseURL: 'http://localhost:3001/api/jalur',
});

jalur_api.interceptors.request.use((config) => {});

// tambahkan interceptor untuk menangani error dari service jalur
jalur_api.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    const message = error.response?.data;
    const status = error.response?.status;

    // kalau error dari service terbaca, lempar error dengan status dan message yang sesuai
    if (status && message) {
      throw new HttpException(message, status);
    }

    // kalau error dari service tidak terbaca, lempar error 500 Internal Server Error
    throw new HttpException('Internal Server Error', 500);
  },
);
