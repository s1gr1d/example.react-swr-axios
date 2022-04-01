import { useSWRAxios } from '../../lib/swr/useSWRAxios';
import { SWRCacheKeyGetter } from '../../lib/swr/cacheKeyGetter';
import { getDonkiNotifications } from './fetchers';

export const useDonkiNoficationsSWR = (startDate: string, endDate: string) =>
  useSWRAxios(SWRCacheKeyGetter.DONKI_NOTIFICATIONS(startDate, endDate), () =>
    getDonkiNotifications(startDate, endDate)
  );
