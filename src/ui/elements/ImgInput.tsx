import { useState } from 'react';
import styled, { css } from 'styled-components';

const inputSizes = {
  small: css`
    padding: var(--spacing-4) var(--spacing-12);
    font-size: var(--text-md);
    border-radius: var(--spacing-8);
  `,
  medium: css`
    padding: var(--spacing-6) var(--spacing-16);
    font-size: var(--text-base);
    border-radius: var(--spacing-12);
  `,

  large: css`
    padding: var(--spacing-8) var(--spacing-16);
    font-size: var(--text-l);
    border-radius: var(--spacing-14);
  `,
};

const labelSizes = {
  small: css`
    font-size: var(--text-md);
  `,
  medium: css`
    font-size: var(--text-base);
  `,

  large: css`
    font-size: var(--text-l);
  `,
};

const avatarSizes = {
  small: css`
    width: 34px;
    height: 34px;
  `,
  medium: css`
    width: 48px;
    height: 48px;
  `,

  large: css`
    width: 56px;
    height: 56px;
  `,
};

const StyledImgInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const Label = styled.label<{ $size: keyof typeof inputSizes }>`
  ${(props) => labelSizes[props.$size]}
`;

const StyledImgInput = styled.input<{ $size: keyof typeof inputSizes; $disabled: boolean }>`
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: var(--border);
  color: var(--color-text-secondary);
  width: 100%;
  cursor: pointer;

  &::file-selector-button {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--color-text-primary);
    cursor: pointer;
  }

  ${(props) => inputSizes[props.$size]}

  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const File = styled.img<{ $size: keyof typeof avatarSizes }>`
  border: var(--border);
  border-radius: 99999999px;

  ${(props) => avatarSizes[props.$size]}
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
`;

interface BaseImgInputProps {
  id?: string;
  name?: string;
  label?: string;
  size?: keyof typeof inputSizes;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ImgInputPropsWithUploadedFile extends BaseImgInputProps {
  showUploadedFile: true;
  defaultImg: string; // Required
}

interface ImgInputPropsWithoutUploadedFile extends BaseImgInputProps {
  showUploadedFile?: false;
  defaultImg?: string; // Optional
}

type ImgInputProps = ImgInputPropsWithUploadedFile | ImgInputPropsWithoutUploadedFile;

export default function ImgInput({
  id,
  name,
  label,
  size = 'small',
  disabled = false,
  onChange,
  showUploadedFile = false,
  defaultImg,
}: ImgInputProps) {
  const [fileUrl, setFile] = useState<string | null>(null);

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange?.(event);
    }

    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0];

      setFile(URL.createObjectURL(uploadedFile));
    }
  };

  return (
    <StyledImgInputContainer>
      {label && (
        <Label htmlFor={id} $size={size}>
          {label}
        </Label>
      )}
      <InputContainer>
        {showUploadedFile && <File src={fileUrl ? fileUrl : defaultImg} alt="{label}" $size={size} />}
        <StyledImgInput
          type="file"
          name={name}
          id={id}
          disabled={disabled}
          $disabled={disabled}
          onChange={handleUploadFile}
          $size={size}
        />
      </InputContainer>
    </StyledImgInputContainer>
  );
}
