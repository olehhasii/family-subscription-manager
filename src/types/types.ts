import type { MotionProps, Variants } from 'motion/react';

export type IconComponentProps = {
  size?: number | string;
  color?: string;
};

export type MotionIconComponentProps = IconComponentProps &
  MotionProps & {
    variants?: Variants;
  };

export type Member = {
  id: bigint;
  name: string;
  email: string;
  paidUntill: string;
  shouldPay: boolean;
  avatarUrl: string;
};

export type StatusKeys = 'success' | 'danger' | 'due';
