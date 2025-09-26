import styled from 'styled-components';

export const InfoWrapper = styled.div`
  background-color: var(--color-bg-main);
  border-radius: var(--spacing-28);
  color: var(--color-text-primary);
  position: absolute;
  border-radius: var(--spacing-28);
  padding-inline: var(--spacing-16);
  padding-bottom: 10px;
  max-width: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InfoImgWrapper = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -16px;

  & img {
    border-top-right-radius: var(--spacing-28);
    border-top-left-radius: var(--spacing-28);
    width: 360px;
    height: 220px;
    object-fit: cover;
  }
`;

export const InfoTextContainer = styled.div`
  margin-top: var(--spacing-12);
`;

export const InfoText = styled.p`
  margin-top: var(--spacing-8);
  text-align: justify;
`;

export const InfoLink = styled.a`
  color: #f43f5e;
`;
