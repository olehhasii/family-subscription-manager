export type Member = {
  id: number;
  name: string;
  email: string;
  paidUntil: string;
  isBillable: boolean;
  avatarUrl: string | null;
};

export const MEMBER_STATUSES = {
  ok: 'ok',
  due: 'due',
  overdue: 'overdue',
  special: 'special',
  unknown: 'unknown',
};

export type MemberStatusesType = keyof typeof MEMBER_STATUSES;
