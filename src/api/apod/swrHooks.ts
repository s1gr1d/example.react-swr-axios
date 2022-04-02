import { useSWRAxios } from '../../lib/swr/useSWRAxios';
import { getAPOD } from './fetchers';
import { SWRCacheKey } from '../../lib/swr/cacheKeyGenerator';

/*
 * This file contains reusable swr hooks
 */

export const useApodSWR = () => useSWRAxios(SWRCacheKey.APOD(), getAPOD);
