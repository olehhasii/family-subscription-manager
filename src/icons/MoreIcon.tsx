import type { IconComponentProps } from '../types/types';

export default function MoreIcon({ width = '40px', height = '40px' }: IconComponentProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="12" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="12" cy="12" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="17" cy="12" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}
