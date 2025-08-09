import styled from 'styled-components';

export const Wrapper = styled.nav`
  border-radius: var(--spacing-28);
  padding-inline: var(--spacing-16);
  display: flex;
  gap: var(--spacing-16);
  align-items: center;
  position: absolute;
  bottom: 70px;
  left: 0;
  right: 0;
  margin-inline: auto;
  min-width: 300px;
  max-width: 360px;
  height: 60px;
  background-color: var(--color-dark);
  color: var(--color-text-primary);
`;

export const Logo = styled.div`
  background-color: var(--color-light);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

export const Actions = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-left: auto;
`;

export const HorizontalLine = styled.div`
  width: 1px;
  height: 40px;
  margin-inline: 5px;
  background-color: var(--color-gray);
`;
