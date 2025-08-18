import styled from 'styled-components';

export const StyledIsland = styled.div`
  border-radius: var(--spacing-28);
  padding-inline: var(--spacing-16);
  max-width: 360px;
  overflow: hidden;
  min-height: 30px;
  background-color: var(--color-dark);
  color: var(--color-text-primary);
`;

export const Wrapper = styled.div`
  align-items: end;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
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
