import { HttpException } from '@nestjs/common';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

// buat instance axios untuk service jalur dengan baseURL 'http://localhost:3001/api/jalur' dan timeout 1000ms
export const jalur_api = axios.create({
  baseURL: 'http://localhost:3001/api/jalur',
  timeout: 1000,
});

// tambahkan interceptor untuk menambahkan header 'x-internal-secret' pada setiap request ke service jalur
jalur_api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers['x-internal-secret'] = 'rahasia-banget-cik';
    return config;
  },
  (error) =>
    Promise.reject(error instanceof Error ? error : new Error(String(error))),
);

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
