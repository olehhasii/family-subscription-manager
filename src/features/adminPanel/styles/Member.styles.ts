import styled from 'styled-components';
import type { StatusKeys } from '../../../types/types';

export const MemberItem = styled.li`
  display: flex;
  align-items: center;
  background-color: var(--color-bg-secondary);
  padding: var(--spacing-8);
  border-radius: var(--spacing-16);
  border: var(--border);
  min-width: 310px;
  cursor: pointer;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 999999px;
  }
`;

export const MemberItemInfo = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-left: var(--spacing-8);

    display: flex;
    flex-direction: column;
  }
`;

export const MemberName = styled.span``;

export const MemberDate = styled.span`
  color: var(--color-text-secondary);
  font-size: var(--text-md);
`;

const badgeVariants = {
  success: { color: 'var(--color-green)' },
  danger: { color: 'var(--color-red)' },
  due: { color: 'var(--color-yellow)' },
};

export const MemberBadge = styled.span<{ $variant: StatusKeys }>`
  margin-left: var(--spacing-36);
  padding: var(--spacing-8);
  border-radius: var(--spacing-24);
  background-color: ${({ $variant }) => badgeVariants[$variant].color};
  font-size: var(--text-s);
`;
