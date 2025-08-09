import type { IconComponentProps } from '../types/types';

export default function InfoIcon({ width = '40px', height = '40px' }: IconComponentProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13"
        stroke="#323232"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 16H12.01" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
