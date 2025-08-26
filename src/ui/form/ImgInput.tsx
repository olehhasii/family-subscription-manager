import styled from 'styled-components';

import defaultAvatar from '../../assets/avatarPlaceholder.svg';
import { useState } from 'react';

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

export default function ImgInput({ defaultImg }: { defaultImg?: string }) {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };

  let avatarSrc;

  if (defaultImg && !file) {
    avatarSrc = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${defaultImg}`;
  }

  if (!defaultImg && !file) {
    avatarSrc = defaultAvatar;
  }

  if (file) {
    avatarSrc = URL.createObjectURL(file);
  }

  return (
    <StyledImgInput>
      <label htmlFor="avatar">
        <StyledAvatar src={avatarSrc} />

        <span>Upload Avatar</span>
      </label>
      <HiddenImgInput type="file" id="avatar" name="avatar" onChange={handleFileChange} />
    </StyledImgInput>
  );
}
