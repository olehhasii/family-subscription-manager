import Button from '../../../../ui/elements/Button';
import Modal from '../../../../ui/modal/Modal';

export default function DeleteMemberModal() {
  return (
    <Modal>
      <Modal.ModalTrigger>
        <Button variant="danger">Delete Member</Button>
      </Modal.ModalTrigger>
      <Modal.ModalContent>
        <Modal.ModalHeader>Are you absolutely sure?</Modal.ModalHeader>
        <Modal.ModalDescription>
          This action cannot be undone. This will permanently delete member and remove it from database.
        </Modal.ModalDescription>
        <Modal.ModalActions>
          <Modal.ModalCancelAction />
          <Modal.ModalConfirmAction onClick={() => {}} />
        </Modal.ModalActions>
      </Modal.ModalContent>
    </Modal>
  );
}
