import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import ChevronDown from '../../icons/ChevronDown';

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

const selectSize = {
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

const CustomSelectContainer = styled.div`
  position: relative;
`;

const CustomSelectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const SelectLabel = styled.label<{ $size: keyof typeof labelSizes }>`
  ${(props) => labelSizes[props.$size]}
`;

const SelectTrigger = styled.button<{ $size: keyof typeof selectSize }>`
  background-color: var(--color-bg-secondary);
  border: var(--border);
  color: var(--color-text-secondary);
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) => selectSize[props.$size]}
`;

const SelectContent = styled.div<{ $position: { top: number; left: number; width: number } }>`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding: var(--spacing-4) var(--spacing-8);
  position: fixed;
  top: ${(props) => props.$position.top + 5}px;
  left: ${(props) => props.$position.left}px;
  z-index: 1000;

  width: ${(props) => props.$position.width / 2}px;
  min-width: max-content;

  border-radius: var(--spacing-8);
  border: var(--border);
  background-color: var(--color-bg-secondary);
`;

const SelectContentHeader = styled.span<{ $size: keyof typeof labelSizes }>`
  color: var(--color-text-secondary);

  ${(props) => labelSizes[props.$size]}
`;

const SelectItem = styled.span<{ $size: keyof typeof labelSizes }>`
  color: var(--color-text-primary);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--spacing-8);
  cursor: pointer;
  transition: 0.2s background-color ease-in;

  ${(props) => labelSizes[props.$size]}

  &:hover {
    background-color: var(--color-bg-accent);
  }
`;

const HiddenInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

interface SelectOption {
  label: string;
  value: number | string;
}

interface SelectProps {
  name?: string;
  id?: string;
  size?: keyof typeof labelSizes;
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  contentHeader?: string;
  options: SelectOption[];
  defaultOption?: SelectOption | null;
  value?: SelectOption | null;
}

export default function Select({
  label,
  size = 'small',
  id,
  name,
  contentHeader = '',
  options,
  defaultOption,
}: SelectProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const [selectedOption, setSelectedValue] = useState<SelectOption | null>(defaultOption || null);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
    setIsOpened(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };

    if (isOpened) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpened]);

  const handleSelectOption = (option: SelectOption) => {
    setSelectedValue(option);
    setIsOpened(false);
  };

  return (
    <CustomSelectContainer>
      <CustomSelectHeader>
        {label && <SelectLabel $size={size}>{label}</SelectLabel>}
        <SelectTrigger $size={size} type="button" onClick={handleOpen} ref={triggerRef}>
          {selectedOption ? selectedOption.label : 'Select Group Owner'}
          <ChevronDown size={25} />
        </SelectTrigger>
      </CustomSelectHeader>
      {isOpened && (
        <SelectContent ref={containerRef} $position={dropdownPosition}>
          <SelectContentHeader $size={size}>{contentHeader}</SelectContentHeader>
          {options.map((option) => (
            <SelectItem $size={size} onClick={() => handleSelectOption(option)} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      )}
      <HiddenInput type="hidden" name={name} id={id} value={selectedOption?.value} />
    </CustomSelectContainer>
  );
}
