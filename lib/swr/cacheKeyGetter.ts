enum APOD {
  MAIN = 'apod',
}

enum DONKI {
  NOTIFICATIONS = 'donki-notifications',
}

export const SWRCacheKeyGetter = {
  APOD: () => `${APOD.MAIN}`,
  DONKI_NOTIFICATIONS: (startDate: string, endDate: string) =>
    `${DONKI.NOTIFICATIONS}-${startDate}-${endDate}`,
};
