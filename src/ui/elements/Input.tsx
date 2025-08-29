import type { HTMLInputTypeAttribute } from 'react';
import styled, { css } from 'styled-components';

const inputSizes = {
  small: css`
    padding: var(--spacing-4) var(--spacing-12);
    font-size: var(--text-md);
    border-radius: var(--spacing-8);
  `,
  medium: css`
    padding: var(--spacing-6) var(--spacing-16);
    font-size: var(--text-base);
    border-radius: var(--spacing-12);
  `,

  large: css`
    padding: var(--spacing-8) var(--spacing-16);
    font-size: var(--text-l);
    border-radius: var(--spacing-14);
  `,
};

const labelSizes = {
  small: css`
    font-size: var(--text-md);
  `,
  medium: css`
    font-size: var(--text-base);
  `,

  large: css`
    font-size: var(--text-l);
  `,
};

const StyledInput = styled.input<{ $size: keyof typeof inputSizes; $disabled: boolean }>`
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: var(--border);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* For Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${(props) => inputSizes[props.$size]}

  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const InputLabel = styled.label<{ $size: keyof typeof inputSizes }>`
  ${(props) => labelSizes[props.$size]}
`;

interface InputProps {
  type?: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  label?: string;
  size?: keyof typeof inputSizes;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = 'text',
  name,
  id,
  label,
  size = 'small',
  placeholder = '',
  disabled = false,
  onChange,
  defaultValue,
}: InputProps) {
  return (
    <InputContainer>
      {label && (
        <InputLabel $size={size} htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <StyledInput
        $size={size}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        $disabled={disabled}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </InputContainer>
  );
}
