import { AxiosResponse } from 'axios';
import { nasaInstance } from '../../lib/axios/axiosInstance';
import { DONKI } from '../../types/donki';

/*
 * This file contains basic request declarations
 * (fetcher function that calls an endpoint)
 */

export const getDonkiNotifications = (
  startDate: string,
  endDate: string
): Promise<AxiosResponse<DONKI[]>> =>
  nasaInstance.get(`/DONKI/notifications`, {
    params: {
      api_key: 'DEMO_KEY',
      startDate,
      endDate,
      type: 'all',
    },
  });
