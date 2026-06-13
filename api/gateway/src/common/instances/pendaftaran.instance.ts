import { HttpException } from '@nestjs/common';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const pendaftaran_api = axios.create({
  baseURL: 'http://localhost:3002/api/pendaftaran',
  timeout: 1000,
});

// internal secret
pendaftaran_api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers['x-internal-secret'] = 'rahasia-banget-cik';
    return config;
  },
  (error) =>
    Promise.reject(error instanceof Error ? error : new Error(String(error))),
);

// error handling
pendaftaran_api.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    const message = error.response?.data;
    const status = error.response?.status;

    if (status && message) {
      throw new HttpException(message, status);
    }

    throw new HttpException('Internal Server Error', 500);
  },
);
