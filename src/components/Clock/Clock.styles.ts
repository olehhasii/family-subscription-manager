import styled from 'styled-components';

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Time = styled.time`
  font-size: var(--text-md);
`;
export const Date = styled.time`
  font-size: var(--text-s);
  color: var(--color-text-secondary);
`;
