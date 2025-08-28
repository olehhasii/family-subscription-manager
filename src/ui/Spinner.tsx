import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div<{ $absolute: boolean }>`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${spin} 1s linear infinite;
  position: ${(props) => (props.$absolute ? 'absolute' : 'static')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Spinner({ isAbsolute = true }: { isAbsolute?: boolean }) {
  return <StyledSpinner $absolute={isAbsolute}></StyledSpinner>;
}
