import styled from 'styled-components';

interface StyledActionButtonProps {
  $bgColor?: string;
}

export const StyledActionButton = styled.button<StyledActionButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgColor};
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const StyledCloseButton = styled.button<StyledActionButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 30px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: none;
  outline: none;
  z-index: 20;
  cursor: pointer;
`;
