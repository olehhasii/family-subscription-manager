import styled from 'styled-components';

export const StyledAdminPanel = styled.div`
  color: var(--color-text-primary);
  background-color: var(--color-bg-main);
  border-radius: var(--spacing-28);
  min-height: 615px;

  display: flex;
`;

export const PanelMembersList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  margin-top: var(--spacing-16);
`;
