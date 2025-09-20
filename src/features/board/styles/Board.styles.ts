import styled from 'styled-components';

export const StyledBoard = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10; */
  background-color: var(--color-bg-main);
  color: var(--color-text-primary);
  padding: var(--spacing-8) var(--spacing-16) var(--spacing-16);
  border-radius: var(--spacing-28);
  width: 360px;
  min-height: 537px;
  border: var(--border);
`;

export const BoardHeader = styled.div`
  & > h2 {
    font-size: var(--text-xl);
    text-align: center;
  }

  & > span {
    font-size: var(--text-md);
    color: var(--color-text-secondary);
    text-align: center;
    display: block;
  }
`;

export const BoardUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  margin-top: var(--spacing-16);
`;
