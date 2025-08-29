import styled from 'styled-components';

const StyledErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: var(--text-l);
  gap: var(--spacing-16);
`;

export default function ErrorContainer({ children }: { children: React.ReactNode }) {
  return <StyledErrorContainer>{children}</StyledErrorContainer>;
}
