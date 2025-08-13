import CloseIcon from '../icons/CloseIcon';
import { StyledCloseButton } from './ActionButton.styles';

interface CloseButtonProps {
  onClose: () => void;
}

export default function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <StyledCloseButton onClick={onClose}>
      <CloseIcon size="20px" />
    </StyledCloseButton>
  );
}
