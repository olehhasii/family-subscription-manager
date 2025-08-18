import { motion } from 'motion/react';
import CloseIcon from '../icons/CloseIcon';
import { StyledCloseButton } from './ActionButton.styles';

interface CloseButtonProps {
  onClose: () => void;
}

export default function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <StyledCloseButton
      onClick={onClose}
      as={motion.button}
      exit={{ filter: 'blur(30px)', opacity: 0, transition: { duration: 0.3 } }}
    >
      <CloseIcon size="20px" />
    </StyledCloseButton>
  );
}
