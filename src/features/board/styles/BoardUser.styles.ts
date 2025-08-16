import styled from 'styled-components';

export const StyledBoardUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg-secondary);
  border-radius: var(--spacing-14);
  padding: var(--spacing-4) var(--spacing-8);
  font-size: var(--text-md);

  border: 1px solid rgb(255 255 255 / 0.15);
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: var(--text-base);
  font-weight: 700;
`;

export const PaidUntil = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaidUntilPlaceholderText = styled.span`
  text-align: end;
  color: var(--color-text-secondary);
`;
