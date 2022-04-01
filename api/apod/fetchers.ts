import { AxiosResponse } from 'axios';
import { nasaInstance } from '../../lib/axios/axiosInstance';
import { APOD } from '../../types/apod';

/*
 * This file contains basic request declarations
 * (fetcher function that calls an endpoint)
 */

export const getAPOD = (): Promise<AxiosResponse<APOD>> =>
  nasaInstance.get(`/planetary/apod`, {
    params: { api_key: 'DEMO_KEY' },
  });
