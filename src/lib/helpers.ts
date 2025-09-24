import { getTranslations } from '../translations/translations';
import type { MemberStatusesType } from '../types/membersTypes';

export const getMemberStatus = (
  paidUntil: string,
  lang: 'UA' | 'EN' = 'EN'
): { label: string; variant: MemberStatusesType } => {
  const currentDate = new Date();
  const paidUntilDate = new Date(paidUntil);

  const differenceInDates = paidUntilDate.getTime() - currentDate.getTime();

  const oneDayInMs = 1000 * 60 * 60 * 24;

  const diffInDays = Math.round(differenceInDates / oneDayInMs);

  const t = getTranslations(lang);

  if (!paidUntil) {
    return { label: t.unknown, variant: 'unknown' };
  }

  if (diffInDays <= 0) {
    return { label: t.overdue, variant: 'overdue' };
  }

  if (diffInDays <= 7) {
    return { label: t.expiringSoon, variant: 'due' };
  }

  return { label: t.paid, variant: 'ok' };
};
