import styled from 'styled-components';

export const AdminNavigationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-12);
  list-style: none;
  margin-bottom: var(--spacing-12);

  @media (max-width: 768px) {
    gap: var(--spacing-8);
  }
`;

export const AdminNavGroup = styled.li``;

export const AdminNavButton = styled.button<{ $active?: boolean }>`
  padding: var(--spacing-4) var(--spacing-8);
  background-color: ${(props) => (props.$active ? 'var(--color-bg-accent)' : 'transparent')};
  color: ${(props) => (props.$active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)')};
  border: none;
  border-radius: var(--spacing-12);
  outline: none;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: var(--spacing-4) var(--spacing-4);
    font-size: var(--text-md);
  }

  &:hover {
    color: var(--color-text-primary);
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;
