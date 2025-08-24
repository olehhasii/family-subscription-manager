import styled from 'styled-components';

interface SelectProps {
  label: string;
  id: string;
  name: string;
  options: Array<string>;
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-4);
  }

  & > input {
    color: var(--color-text-main);
    background-color: var(--color-bg-secondary);
    border: var(--border);
    border-radius: var(--spacing-12);
    padding: var(--spacing-6);
    padding-left: var(--spacing-16);
    min-width: 250px;
  }

  & > select {
    color: var(--color-text-main);
    background-color: var(--color-bg-secondary);
    border: var(--border);
    border-radius: var(--spacing-12);
    padding: var(--spacing-6);
  }
`;

export default function FormSelect({ label, id, name, options }: SelectProps) {
  return (
    <SelectContainer>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
}
