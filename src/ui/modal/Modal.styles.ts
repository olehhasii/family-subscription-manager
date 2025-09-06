import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-bg-main);
  border: var(--border);
  border-radius: var(--spacing-16);
  max-width: 500px;

  padding: var(--spacing-16) var(--spacing-20);
`;

export const ModalHeader = styled.header`
  & > h3 {
    font-size: var(--text-l);
    color: var(--color-text-primary);
  }
`;

export const ModalDescription = styled.div`
  & > p {
    margin-top: var(--spacing-8);
    color: var(--color-text-secondary);
  }
`;

export const ModalActionsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: var(--spacing-12);
  margin-top: var(--spacing-12);
`;
