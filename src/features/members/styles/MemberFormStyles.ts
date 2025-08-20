import styled from 'styled-components';

export const StyledForm = styled.form`
  /* background-color: var(--color-bg-secondary); */
  border: var(--border);
  border-radius: var(--spacing-16);
  padding: var(--spacing-16);
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  flex-wrap: wrap;
  margin: var(--spacing-16) 0;
`;

export const NameAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-32);
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-16);
`;
