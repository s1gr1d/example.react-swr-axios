import { useSWRAxios } from '../../lib/swr/useSWRAxios';
import { getAPOD } from './fetchers';
import { SWRCacheKeyGetter } from '../../lib/swr/cacheKeyGetter';

/*
 * This file contains reusable swr hooks
 */

export const useApodSWR = () => useSWRAxios(SWRCacheKeyGetter.APOD(), getAPOD);
