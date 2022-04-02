import { useSWRAxios } from '../../lib/swr/useSWRAxios';
import { SWRCacheKey } from '../../lib/swr/cacheKeyGenerator';
import { getDonkiNotifications } from './fetchers';

export const useDonkiNoficationsSWR = (startDate: string, endDate: string) =>
  useSWRAxios(SWRCacheKey.DONKI_NOTIFICATIONS(startDate, endDate), () =>
    getDonkiNotifications(startDate, endDate)
  );
