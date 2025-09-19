import type { MemberStatusesType } from '../types/membersTypes';

export const getMemberStatus = (paidUntil: string): { label: string; variant: MemberStatusesType } => {
  const currentDate = new Date();
  const paidUntilDate = new Date(paidUntil);

  const differenceInDates = paidUntilDate.getTime() - currentDate.getTime();

  const oneDayInMs = 1000 * 60 * 60 * 24;

  const diffInDays = Math.round(differenceInDates / oneDayInMs);

  if (!paidUntil) {
    return { label: '❔Unknown', variant: 'unknown' };
  }

  if (diffInDays <= 0) {
    return { label: '🆘 Overdue', variant: 'overdue' };
  }

  if (diffInDays <= 7) {
    return { label: '⚠️ Due soon', variant: 'due' };
  }

  return { label: '✅ Up to date', variant: 'ok' };
};
