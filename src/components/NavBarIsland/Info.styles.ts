import styled from 'styled-components';

export const InfoWrapper = styled.div`
  width: 360px;
  min-height: 400px;
  background-color: var(--color-dark);
  border-radius: var(--spacing-28);
  padding: var(--spacing-16);
  color: var(--color-text-primary);
  position: absolute;
  bottom: 300px;
  left: 50%;
  transform: translateX(-50%);
`;

export const InfoImgWrapper = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -16px;

  & img {
    border-top-right-radius: var(--spacing-28);
    border-top-left-radius: var(--spacing-28);
    width: 100%;
  }
`;
