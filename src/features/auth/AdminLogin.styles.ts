import styled from 'styled-components';

export const AuthWrapper = styled.div`
  background-color: var(--color-bg-main);
  border-radius: var(--spacing-14);
  color: var(--color-text-primary);
  position: absolute;
  border-radius: var(--spacing-28);
  padding: var(--spacing-16) var(--spacing-20);
  max-width: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: var(--border);
`;

export const AuthHeading = styled.h3`
  text-align: center;
  margin-top: var(--spacing-6);
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
`;
