import styled from 'styled-components';

export const StyledMenu = styled.ul`
  padding-top: var(--spacing-8);
  padding-bottom: var(--spacing-8);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  list-style: none;
  height: 60px;
`;

export const MenuItem = styled.li``;

export const StyledMenuButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-6) var(--spacing-8);
  height: 40px;
  border-radius: 999999px;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;

  &:visited {
    text-decoration: none;
  }

  & span:nth-of-type(2) {
    font-size: var(--text-s);
    font-weight: 700;
    color: var(--color-text-dark);
    white-space: nowrap;
    line-height: 1;
    text-align: center;
  }
`;
