import styled, { css } from 'styled-components';
import type { MemberStatusesType } from '../../../../types/membersTypes';

export const MemberContainer = styled.div<{ $isBillable?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-36);
  background-color: ${(props) => (props.$isBillable ? 'var(--color-bg-main)' : 'var(--color-bg-main)')};
  color: ${(props) => (props.$isBillable ? 'inherit' : 'var(--color-text-primary)')};
  padding: var(--spacing-8) var(--spacing-12);
  border-radius: var(--spacing-16);
  border: ${(props) => (props.$isBillable ? 'var(--border)' : 'var(--border)')};
  cursor: pointer;

  transition: 0.2s background-color ease-in;

  &:hover {
    background-color: var(--color-bg-accent);
  }
`;

export const MemberHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
`;

export const MemberAvatar = styled.img`
  width: 40px;
  height: 40px;
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
    color: var(--color-text-secondary);
    background-color: var(--color-bg-secondary);
    border-radius: var(--spacing-16);
  `,
  unknown: css`
    color: var(--color-text-secondary);
  `,
};

export const MemberPaidDate = styled.span`
  font-size: var(--text-s);
  color: var(--color-text-secondary);
`;

export const MemberStatus = styled.span<{ $variant: MemberStatusesType }>`
  font-size: var(--text-s);
  border: var(--border);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--spacing-4) var(--spacing-6);
  ${(props) => memberStatusVariants[props.$variant]}
`;

export const NoMembers = styled.div`
  margin-top: var(--spacing-24);
  text-align: center;
`;
