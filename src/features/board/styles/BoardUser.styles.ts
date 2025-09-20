import styled, { css } from 'styled-components';
import type { MemberStatusesType } from '../../../types/membersTypes';

export const StyledBoardUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg-main);
  border-radius: var(--spacing-14);
  padding: var(--spacing-8) var(--spacing-12);
  font-size: var(--text-md);
  border: var(--border);

  &:hover {
    background-color: var(--color-bg-accent);
  }
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);

  & > img {
    width: 45px;
    height: 45px;
    border-radius: 999999px;
  }
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

const memberStatusVariants = {
  ok: css`
    color: var(--color-text-primary);
    background-color: rgba(34, 197, 94, 0.5);
  `,
  due: css`
    color: var(--color-primary);
    background-color: rgba(234, 178, 8, 0.5);
  `,
  overdue: css`
    color: var(--color-text-primary);
    background-color: rgba(220, 38, 38, 0.5);
  `,
  special: css`
    color: var(--color-text-primary);
    /* background-color: var(--color-bg-secondary); */
    background-color: rgba(59, 131, 246, 0.7);
  `,
  unknown: css`
    color: var(--color-text-secondary);
  `,
};

export const UserStatus = styled.span<{ $variant: MemberStatusesType }>`
  font-size: var(--text-s);
  border: var(--border);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--spacing-2) var(--spacing-6);
  border-radius: var(--spacing-16);
  ${(props) => memberStatusVariants[props.$variant]}

  @media (max-width: 768px) {
    padding: var(--spacing-4) var(--spacing-4);
  }
`;

const userDateVariants = {
  ok: css`
    color: rgba(34, 197, 94, 1);
  `,
  due: css`
    color: rgba(234, 178, 8, 1);
  `,
  overdue: css`
    color: rgba(220, 38, 38, 1);
  `,
  special: css`
    color: var(--color-text-primary);
  `,
  unknown: css`
    color: var(--color-text-secondary);
  `,
};

export const UserPaidDate = styled.span<{ $variant: MemberStatusesType }>`
  font-size: var(--text-s);

  ${(props) => userDateVariants[props.$variant]}
`;
