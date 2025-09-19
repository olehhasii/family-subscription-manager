import styled from 'styled-components';

const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`;

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, onSubmit }: FormProps) {
  return <StyledFrom onSubmit={onSubmit}>{children}</StyledFrom>;
}
