import styled from 'styled-components';

export const PanelSide = styled.div`
  padding: var(--spacing-24);
  position: relative;
`;

export const PanelNav = styled.div`
  display: flex;
  gap: var(--spacing-12);
`;

export const PanelNavButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  outline: none;
  color: ${(props) => (props.$active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)')};
  text-decoration: ${(props) => (props.$active ? 'underline' : 'none')};
  cursor: pointer;
`;

export const PanelSideContent = styled.div`
  margin-top: var(--spacing-16);
`;
