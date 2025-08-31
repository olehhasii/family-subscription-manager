import styled, { css } from 'styled-components';
import ChevronDown, { ChevronLeft, ChevronRight } from '../../icons/ChevronDown';
import { useEffect, useRef, useState } from 'react';
import { getFormattedDate } from '../../lib/dates';

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

const triggerSizes = {
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const Label = styled.label<{ $size: keyof typeof labelSizes }>`
  ${(props) => labelSizes[props.$size]}
`;

const MonthPickerTrigger = styled.button<{
  $size: keyof typeof triggerSizes;
  $selected: boolean;
  $fullWidth: boolean;
  $disabled: boolean;
}>`
  border: var(--border);
  color: ${(props) => (props.$selected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)')};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 150px;

  background-color: ${(props) => (props.$disabled ? 'var(--color-bg-main)' : 'var(--color-bg-secondary)')};
  width: ${(props) => (props.$fullWidth ? '100%' : 'max-content')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  ${(props) => triggerSizes[props.$size]}
`;

const PickerBox = styled.div<{ $position: { top: number; left: number } }>`
  border-radius: var(--spacing-8);
  border: var(--border);
  background-color: var(--color-bg-secondary);
  padding: var(--spacing-4) var(--spacing-8);
  width: fit-content;

  position: fixed;
  top: ${(props) => props.$position.top + 5}px;
  left: ${(props) => props.$position.left}px;
  z-index: 1000;
`;

const PickerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-16);
`;

const PickerNavButton = styled.button`
  border: none;
  outline: none;
  background: none;
  border-radius: var(--spacing-8);
  cursor: pointer;
  transition: 0.2s background-color ease-in;

  &:hover {
    background-color: var(--color-bg-accent);
  }
`;

const PickerContent = styled.div`
  margin-top: var(--spacing-8);
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: var(--spacing-8);
`;

const PickerContentItem = styled.div<{ $isOldDate: boolean }>`
  padding: var(--spacing-2) var(--spacing-6);
  border-radius: var(--spacing-8);
  width: max-content;
  cursor: pointer;
  color: ${(props) => (props.$isOldDate ? 'var(--color-text-secondary)' : 'var(--color-text-primary)')};
  transition: 0.2s background-color ease-in;

  &:hover {
    background-color: var(--color-bg-accent);
  }
`;

const HiddenInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

interface MonthPickerProps {
  inputText: string;
  label?: string;
  size?: keyof typeof labelSizes;
  id?: string;
  name?: string;
  defaultOption?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function MonthPicker({
  label,
  size = 'small',
  id,
  name,
  inputText,
  defaultOption,
  fullWidth = true,
  disabled = false,
}: MonthPickerProps) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(defaultOption || null);

  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
  });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const handleOpenDropdown = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }

    if (disabled) return;

    setIsOpen(true);
  };

  const handleNextYear = () => {
    const currentYear = new Date().getFullYear();

    if (year - currentYear >= 5) return;

    setYear((prevYear) => prevYear + 1);
  };

  const handlePrevYear = () => {
    const currentYear = new Date().getFullYear();

    if (currentYear - year >= 2) return;

    setYear((prevYear) => prevYear - 1);
  };

  const checkIfOldDate = (monthIndex: number) => {
    const currentDate = new Date();

    if (year < currentDate.getFullYear()) {
      return true;
    }

    if (monthIndex < currentDate.getMonth() && currentDate.getFullYear() === year) {
      return true;
    }

    return false;
  };

  const handleSelectDate = (month: number) => {
    const selectedMonth = month + 1;

    setSelectedDate(`${year}-${selectedMonth.toString().padStart(2, '0')}-01`);

    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <InputContainer>
      {label && <Label $size={size}>{label}</Label>}
      <MonthPickerTrigger
        $size={size}
        type="button"
        onClick={handleOpenDropdown}
        ref={triggerRef}
        $selected={Boolean(selectedDate)}
        $fullWidth={fullWidth}
        $disabled={disabled}
      >
        {selectedDate ? getFormattedDate(selectedDate) : inputText} <ChevronDown size={25} />
      </MonthPickerTrigger>
      {isOpen && (
        <PickerBox ref={containerRef} $position={dropdownPosition}>
          <PickerNav>
            <PickerNavButton type="button" onClick={handlePrevYear}>
              <ChevronLeft size={28} color="var(--color-text-secondary)" />
            </PickerNavButton>
            <span>{year}</span>
            <PickerNavButton type="button" onClick={handleNextYear}>
              <ChevronRight size={28} color="var(--color-text-secondary)" />
            </PickerNavButton>
          </PickerNav>
          <PickerContent>
            {months.map((month, index) => (
              <PickerContentItem key={month} $isOldDate={checkIfOldDate(index)} onClick={() => handleSelectDate(index)}>
                {month}
              </PickerContentItem>
            ))}
          </PickerContent>
        </PickerBox>
      )}
      <HiddenInput type="hidden" name={name} id={id} value={selectedDate || ''} />
    </InputContainer>
  );
}
