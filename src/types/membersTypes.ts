export type Member = {
  id: number;
  name: string;
  email: string;
  paidUntil: string;
  shouldPay: boolean;
  avatarUrl: string;
};

export const MEMBER_STATUSES = {
  ok: 'ok',
  due: 'due',
  overdue: 'overdue',
  special: 'special',
};

export type MemberStatusesType = keyof typeof MEMBER_STATUSES;
