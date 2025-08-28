import styled, { css } from 'styled-components';

const buttonVariants = {
  primary: css`
    background-color: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border: var(--border);

    &:hover {
      transform: translateY(-1px);
    }
  `,

  danger: css`
    background-color: var(--color-red);
    color: var(--color-text-primary);
    border: 1px solid var(--color-red);

    &:hover {
      transform: translateY(-1px);
    }
  `,

  success: css`
    background-color: var(--color-green);
    color: var(--color-text-primary);
    border: 1px solid var(--color-green);

    &:hover {
      transform: translateY(-1px);
    }
  `,
};

const buttonSizes = {
  small: css`
    padding: var(--spacing-4) var(--spacing-8);
    font-size: var(--text-s);
    border-radius: var(--spacing-8);
  `,
  medium: css`
    padding: var(--spacing-6) var(--spacing-12);
    font-size: var(--text-base);
    border-radius: var(--spacing-12);
  `,

  large: css`
    padding: var(--spacing-8) var(--spacing-16);
    font-size: var(--text-l);
    border-radius: var(--spacing-16);
  `,
};

const StyledButton = styled.button<{
  $variant: keyof typeof buttonVariants;
  $size: keyof typeof buttonSizes;
  $isFullWidth?: boolean;
  $disabled?: boolean;
}>`
  outline: none;
  cursor: pointer;

  min-width: ${(props) => (props.$isFullWidth ? '100%' : 'auto')};

  ${(props) => buttonVariants[props.$variant]}
  ${(props) => buttonSizes[props.$size]}

  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

interface ButtonProps {
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  className,
}: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $isFullWidth={fullWidth}
      $disabled={disabled}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
}
