import styled from 'styled-components';

interface CheckboxProps {
  label: string;
  id: string;
  name: string;
  defaultChecked?: boolean;
}

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  & > label {
    color: var(--color-text-secondary);
    max-width: 300px;
  }

  & > input {
    color: var(--color-text-main);
    background-color: var(--color-bg-secondary);
    border: var(--border);
    border-radius: var(--spacing-12);
    padding: var(--spacing-6);
    padding-left: var(--spacing-16);
    width: 25px;
    height: 25px;
  }
`;

export default function Checkbox({ id, name, label, defaultChecked }: CheckboxProps) {
  console.log(defaultChecked === undefined ? true : defaultChecked);

  return (
    <CheckboxContainer>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        name={name}
        defaultChecked={defaultChecked === undefined ? true : defaultChecked}
      />
    </CheckboxContainer>
  );
}
