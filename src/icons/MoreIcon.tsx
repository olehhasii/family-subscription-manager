import type { IconComponentProps } from '../types/types';

export default function MoreIcon({ size = 40, color = 'currentColor', ...props }: IconComponentProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
      <circle cx="7" cy="12" r="0.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="0.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="12" r="0.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
