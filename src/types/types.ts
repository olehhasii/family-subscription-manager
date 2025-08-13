import type { MotionProps, Variants } from 'motion/react';

export type IconComponentProps = {
  size?: number | string;
  color?: string;
};

export type MotionIconComponentProps = IconComponentProps &
  MotionProps & {
    variants?: Variants;
  };
