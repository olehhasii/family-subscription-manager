import styled from 'styled-components';

const buttonVariants = {
  default: {
    color: 'var(--color-bg-secondary)',
  },

  danger: {
    color: 'var(--color-red)',
  },
};

type Variant = keyof typeof buttonVariants;

interface AdminPanelButtonProps {
  label: string;
  variant?: Variant;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}

const StyledAdminPanelButton = styled.button<{ $variant: Variant }>`
  width: 100%;
  min-width: 150px;
  padding: var(--spacing-8) var(--spacing-16);
  border-radius: var(--spacing-12);
  background-color: ${(props) => buttonVariants[props.$variant].color};
  color: var(--color-text-primary);
  border: var(--border);
  outline: none;
  cursor: pointer;
`;

export default function AdminPanelButton({
  label,
  variant = 'default',
  type = 'button',
  onClick,
}: AdminPanelButtonProps) {
  return (
    <StyledAdminPanelButton $variant={variant} type={type} onClick={onClick}>
      {label}
    </StyledAdminPanelButton>
  );
}
