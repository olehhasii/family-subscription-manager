import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-16);
  width: 100%;
  height: 100vh;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(14px);
  width: 100%;
  background-color: rgb(0 0 0 / 0.2);
  height: 100vh;
`;
