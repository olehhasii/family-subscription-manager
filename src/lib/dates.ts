import { getTranslations } from '../translations/translations';

export const getClosestNextMonth = () => {
  const currentDate = new Date();

  const firstDateOfNextMonth = currentDate.setMonth(currentDate.getMonth() + 1, 1);

  return new Date(firstDateOfNextMonth).toISOString().slice(0, 10);
};

const createDateFormatter = (locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const getFormattedDate = (date: string, lang: 'UA' | 'EN' = 'EN') => {
  const dateObj = new Date(date);

  const locale = lang === 'UA' ? 'uk-UA' : 'en-US';
  const dateFormatter = createDateFormatter(locale);

  return dateFormatter.format(dateObj);
};

export const checkDateStatus = (paidUntillDate: Date, lang: 'UA' | 'EN' = 'EN') => {
  const currentDate = new Date();

  const differenceInDates = paidUntillDate.getTime() - currentDate.getTime();

  const oneDayInMs = 1000 * 60 * 60 * 24;
  const diffInDays = Math.round(differenceInDates / oneDayInMs);

  const t = getTranslations(lang);

  if (diffInDays <= 0) {
    return { label: t.overdue, variant: 'danger' };
  }

  if (diffInDays <= 7) {
    return { label: t.expiringSoon, variant: 'due' };
  }

  return { label: t.paid, variant: 'success' };
};
