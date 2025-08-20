import styled from 'styled-components';

import defaultAvatar from '../../assets/avatarPlaceholder.svg';

const StyledImgInput = styled.div`
  color: var(--color-text-secondary);
  position: relative;

  & > label {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  & img {
    margin-bottom: var(--spacing-8);
  }
`;

const StyledAvatar = styled.img`
  width: 80px;
  height: 80px;
  background-color: var(--color-light);
  border-radius: 99999px;
  padding: var(--spacing-8);
`;

const HiddenImgInput = styled.input`
  opacity: 0;
  width: 1px;
  /*  height: 80px; */
  position: absolute;
  top: 0;
`;

export default function ImgInput() {
  return (
    <StyledImgInput>
      <label htmlFor="avatar">
        <StyledAvatar src={defaultAvatar} />
        <span>Upload Avatar</span>
      </label>
      <HiddenImgInput type="file" id="avatar" name="avatar" />
    </StyledImgInput>
  );
}
