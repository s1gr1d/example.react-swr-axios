import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import { AxiosResponse, AxiosError } from 'axios';

/* Inspired by SWR Example:
 * https://github.com/vercel/swr/blob/main/examples/axios-typescript/libs/useRequest.ts
 */

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
  isLoading: boolean;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    'fallbackData'
  > {
  fallbackData?: Data;
}

export const useSWRAxios = <Data = unknown, Error = unknown>(
  key: string | null /* 'null' to conditionally fetch data */,
  axiosFetcher: (...args: any) => Promise<AxiosResponse<Data>>,
  config: SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>> = {}
): Return<Data, Error> => {
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(key, axiosFetcher, config);

  const data = response && response.data;
  const isLoading = !error && !data;

  return {
    data,
    response,
    error,
    isValidating,
    isLoading,
    mutate,
  };
};
