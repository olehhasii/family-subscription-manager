import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  gap: var(--spacing-24);
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Logo = styled.div`
  background-color: var(--color-light);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: var(--border);
`;

export const Actions = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-left: var(--spacing-36);
  transform-origin: center center;
`;

export const HorizontalLine = styled.div`
  width: 1px;
  height: 40px;
  margin-inline: 5px;
  background-color: var(--color-gray);
`;
