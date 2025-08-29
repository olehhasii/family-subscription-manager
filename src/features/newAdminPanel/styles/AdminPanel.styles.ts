import styled from 'styled-components';

export const PanelMembersList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--spacing-12);
  margin-top: var(--spacing-16);
`;

export const AdminPanelContainer = styled.div`
  padding: var(--spacing-16);
  border-radius: var(--spacing-16);
  color: var(--color-text-primary);
  background-color: var(--color-bg-main);
  border: var(--border);
  min-height: 600px;

  @media (max-width: 768px) {
    max-width: 340px;
  }
`;

export const AdminPanelContent = styled.div``;
