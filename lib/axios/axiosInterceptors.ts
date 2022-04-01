import { AxiosInstance, AxiosRequestConfig } from 'axios';

export const addBaseInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers === undefined) {
      config.headers = {};
    }

    config.headers = {
      ...config.headers,
      /* add authorization headers etc.*/
    };

    return config;
  });
};
