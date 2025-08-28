import styled, { css } from 'styled-components';
import type { MemberStatusesType } from '../../../../types/membersTypes';

export const MemberContainer = styled.div<{ $shouldPay?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-36);
  background-color: var(--color-bg-secondary);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--spacing-16);
  border: ${(props) => (props.$shouldPay ? 'var(--border)' : '1px solid green')};
  cursor: pointer;
`;

export const MemberHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
`;

export const MemberAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MemberName = styled.span``;

const memberStatusVariants = {
  ok: css`
    color: var(--color-green);
  `,
  due: css`
    color: var(--color-yellow);
  `,
  overdue: css`
    color: var(--color-red);
  `,
  special: css`
    color: var(--color-green);
  `,
};

export const MemberPaidDate = styled.span`
  font-size: var(--text-s);
  color: var(--color-text-secondary);
`;

export const MemberStatus = styled.span<{ $variant: MemberStatusesType }>`
  font-size: var(--text-base);

  ${(props) => memberStatusVariants[props.$variant]}
`;

export const NoMembers = styled.div`
  margin-top: var(--spacing-24);
  text-align: center;
`;
