import type { IconComponentProps } from '../types/types';

export default function DarkThemeIcon({ width = '40px', height = '40px' }: IconComponentProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M31.75,6.479c6.7339,3.8881,10.3177,11.5721,8.969,19.23-1.3496,7.6616-7.3484,13.6604-15.01,15.01-7.6579,1.3487-15.3419-2.2351-19.23-8.969"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.02,6.75c4.1858,7.2511,2.98,16.4095-2.94,22.33-5.9205,5.92-15.0789,7.1258-22.33,2.94"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
