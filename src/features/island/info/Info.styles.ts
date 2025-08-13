import styled from 'styled-components';

export const InfoWrapper = styled.div`
  background-color: var(--color-dark);
  border-radius: var(--spacing-28);
  color: var(--color-text-primary);
  position: relative;
`;

export const InfoImgWrapper = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -16px;

  & img {
    border-top-right-radius: var(--spacing-28);
    border-top-left-radius: var(--spacing-28);
    width: 360px;
    height: 240px;
    object-fit: cover;
  }
`;
