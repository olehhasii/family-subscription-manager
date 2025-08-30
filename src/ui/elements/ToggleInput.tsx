import { useState } from 'react';
import styled, { css } from 'styled-components';

type Sizes = 'small' | 'medium' | 'large';

const ToggleSizes = {
  label: {
    small: css`
      font-size: var(--text-md);
    `,
    medium: css`
      font-size: var(--text-base);
    `,
    large: css`
      font-size: var(--text-l);
    `,
  },

  toggleBox: {
    small: css`
      width: 40px;
      height: 20px;
    `,
    medium: css`
      width: 55px;
      height: 26px;
    `,

    large: css`
      width: 65px;
      height: 30px;
    `,
  },

  circle: {
    small: css`
      width: 16px;
      height: 16px;
      top: 1px;
      left: 2px;
    `,
    medium: css`
      width: 20px;
      height: 20px;
      top: 2px;
      left: 3px;
    `,

    large: css`
      width: 25px;
      height: 25px;
      top: 2px;
      left: 4px;
    `,
  },
} as const;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-12);
`;

const Label = styled.label<{ $size: Sizes }>`
  ${(props) => ToggleSizes.label[props.$size]}
`;

const ToggleBox = styled.label<{ $size: Sizes; $checked: boolean }>`
  position: relative;
  background-color: ${(props) => (props.$checked ? 'var(--color-bg-primary)' : 'var(--color-bg-accent)')};
  border: var(--border);
  border-radius: var(--spacing-24);
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  ${(props) => ToggleSizes.toggleBox[props.$size]}

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Circle = styled.div<{ $size: Sizes; $checked: boolean }>`
  border-radius: 99999px;
  position: absolute;

  background-color: ${(props) => (props.$checked ? 'var(--color-bg-accent)' : 'var(--color-bg-primary)')};

  /* transform: ${(props) => (props.$checked ? 'translateX(140%)' : 'translateX(0)')}; */

  transform: ${(props) => {
    const sizes = {
      small: 'translateX(20px)',
      medium: 'translateX(30px)',
      large: 'translateX(34px)',
    };
    return props.$checked ? sizes[props.$size] : 'translateX(0)';
  }};

  transition: 0.2s all ease-in-out;

  ${(props) => ToggleSizes.circle[props.$size]}
`;

interface ToggleInputProps {
  label: string;
  id?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  size?: Sizes;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function ToggleInput({
  label,
  id,
  name,
  checked,
  defaultChecked = false,
  size = 'medium',
  onChange,
  disabled,
}: ToggleInputProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !currentChecked;

    if (isControlled) {
      onChange?.({
        target: {
          checked: newValue,
          name,
          id,
          type: 'checkbox',
        } as HTMLInputElement,
      } as React.ChangeEvent<HTMLInputElement>);
    } else {
      setInternalChecked(newValue);

      onChange?.({
        target: {
          checked: newValue,
          name,
          id,
          type: 'checkbox',
        } as HTMLInputElement,
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <ToggleContainer>
      {label && (
        <Label $size={size} htmlFor={id}>
          {label}
        </Label>
      )}
      <ToggleBox $size={size} htmlFor={id} $checked={currentChecked}>
        <Input type="checkbox" checked={currentChecked} id={id} name={name} onChange={handleToggle} />
        <Circle $size={size} $checked={currentChecked} />
      </ToggleBox>
    </ToggleContainer>
  );
}
