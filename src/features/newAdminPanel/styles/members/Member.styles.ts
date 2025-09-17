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

  @media (max-width: 768px) {
    gap: var(--spacing-12);
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
  border-radius: var(--spacing-16);
  ${(props) => memberStatusVariants[props.$variant]}

  @media (max-width: 768px) {
    padding: var(--spacing-4) var(--spacing-4);
  }
`;

export const NoMembers = styled.div`
  margin-top: var(--spacing-24);
  text-align: center;
`;
