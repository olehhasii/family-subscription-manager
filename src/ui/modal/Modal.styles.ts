import styled from 'styled-components';

export const DeleteModalContainer = styled.div`
  padding: var(--spacing-28);
  background-color: var(--color-bg-main);
  border-radius: var(--spacing-16);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeading = styled.h3`
  font-size: var(--text-l);
`;

export const ModalActions = styled.div`
  margin-top: var(--spacing-20);
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-16);
`;
