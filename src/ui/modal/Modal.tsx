import type React from 'react';
import { Overlay } from '../../styles/GeneralComponents.Styles';
import { ModalActionsContainer, ModalContainer, ModalDescription, ModalHeader } from './Modal.styles';
import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../elements/Button';
import { useTranslations } from '../../hooks/useTranslation';

interface ModalProps {
  children: React.ReactNode;
}

const ModalContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used inside <Modal />');
  }
  return context;
}

function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
}

function ModalTrigger({ children }: ModalProps) {
  const { setIsOpen } = useModalContext();

  return <div onClick={() => setIsOpen(true)}>{children}</div>;
}

function ModalContent({ children }: { children: React.ReactNode }) {
  const { isOpen } = useModalContext();

  if (!isOpen) return null;

  return createPortal(
    <>
      <Overlay />
      <ModalContainer>{children}</ModalContainer>
    </>,
    document.body
  );
}

function ModalContentHeader({ children }: { children: React.ReactNode }) {
  return (
    <ModalHeader>
      <h3>{children}</h3>
    </ModalHeader>
  );
}

function ModalContentDescription({ children }: { children: React.ReactNode }) {
  return (
    <ModalDescription>
      <p>{children}</p>
    </ModalDescription>
  );
}

function ModalActions({ children }: { children: React.ReactNode }) {
  return <ModalActionsContainer>{children}</ModalActionsContainer>;
}

function ModalCancelAction() {
  const { setIsOpen } = useModalContext();
  const { t } = useTranslations();

  return <Button onClick={() => setIsOpen(false)}>{t.cancel}</Button>;
}

function ModalConfirmAction({ onClick }: { onClick: () => void }) {
  const { setIsOpen } = useModalContext();
  const { t } = useTranslations();

  return (
    <Button
      variant="primary"
      onClick={() => {
        onClick();
        setIsOpen(false);
      }}
    >
      {t.confirm}
    </Button>
  );
}

Modal.ModalContent = ModalContent;
Modal.ModalContentHeader = ModalContentHeader;
Modal.ModalTrigger = ModalTrigger;
Modal.ModalHeader = ModalContentHeader;
Modal.ModalDescription = ModalContentDescription;
Modal.ModalActions = ModalActions;
Modal.ModalCancelAction = ModalCancelAction;
Modal.ModalConfirmAction = ModalConfirmAction;

export default Modal;
