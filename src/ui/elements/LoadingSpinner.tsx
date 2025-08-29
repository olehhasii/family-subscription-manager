import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div<{ $size: number }>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  margin: 0 auto;
  box-sizing: border-box;
  animation: ${spin} 1s linear infinite;
`;

export default function LoadingSpinner({ size = 48 }: { size?: number }) {
  return <StyledSpinner $size={size} />;
}
