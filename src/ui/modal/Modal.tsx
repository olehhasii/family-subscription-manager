import { Overlay } from '../../styles/GeneralComponents.Styles';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Modal({ children, isOpen }: ModalProps) {
  if (!isOpen) return null;

  return <Overlay>{children}</Overlay>;
}
