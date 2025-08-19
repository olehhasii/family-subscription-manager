import styled from 'styled-components';

export const PanelSide = styled.div`
  padding: var(--spacing-24);
  border-right: var(--border);
`;

export const PanelNav = styled.div`
  display: flex;
  gap: var(--spacing-12);
`;

export const PanelNavButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: var(--color-text-primary);
  cursor: pointer;
`;

export const PanelSideContent = styled.div`
  margin-top: var(--spacing-16);
`;
