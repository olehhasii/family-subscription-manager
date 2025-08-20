import type { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  id: string;
  name: string;
}

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    color: var(--color-text-secondary);
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
`;

export default function FormInput({ label, type = 'text', name, id }: InputProps) {
  return (
    <FormInputContainer>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} />
    </FormInputContainer>
  );
}
