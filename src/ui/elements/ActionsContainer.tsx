import styled from 'styled-components';

const StyledActionsContainer = styled.div<{ $direction: 'column' | 'row'; $align: string }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  justify-content: ${(props) => props.$align};
  align-items: center;
  gap: var(--spacing-12);
`;

interface ActionsContainerProps {
  children: React.ReactNode;
  direction?: 'column' | 'row';
  align?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
}

export default function ActionsContainer({ children, direction = 'row', align = 'center' }: ActionsContainerProps) {
  return (
    <StyledActionsContainer $direction={direction} $align={align}>
      {children}
    </StyledActionsContainer>
  );
}
