import styled from 'styled-components';

interface DateInputProps {
  label: string;
  id: string;
  name: string;
  defaultValue?: string;
}

const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-4);
  }

  & > input {
  }
`;

export default function DateInput({ label, name, id, defaultValue }: DateInputProps) {
  const defaultMonthYear = defaultValue && /^\d{4}-\d{2}/.test(defaultValue) ? defaultValue.slice(0, 7) : undefined;

  return (
    <DateInputContainer>
      <label htmlFor={id}>{label}</label>
      <input type="month" id={id} name={name} defaultValue={defaultMonthYear} />
    </DateInputContainer>
  );
}
