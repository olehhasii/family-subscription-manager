import styled from 'styled-components';

export const StyledIsland = styled.div`
  border-radius: var(--spacing-28);
  padding-inline: var(--spacing-16);
  max-width: 360px;
  overflow: hidden;
  min-height: 30px;
  background-color: var(--color-bg-main);
  color: var(--color-text-primary);
  border: var(--border);
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
