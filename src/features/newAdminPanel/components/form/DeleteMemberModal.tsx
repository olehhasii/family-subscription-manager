import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from '../../../../ui/elements/Button';
import Modal from '../../../../ui/modal/Modal';
import { deleteMember } from '../../../../api/membersApi';
import { toast } from 'sonner';
import LoadingSpinner from '../../../../ui/elements/LoadingSpinner';

export default function DeleteMemberModal({
  memberId,
  onGoBack,
  avatarUrl,
}: {
  memberId: number;
  onGoBack: () => void;
  avatarUrl: string;
}) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, avatarUrl }: { id: number; avatarUrl: string }) => deleteMember(id, avatarUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
      queryClient.invalidateQueries({ queryKey: ['member', memberId] });
      toast.success('Member deleted');
      onGoBack();
    },
    onError: () => {
      toast.error('Error deleting member');
    },
  });

  return (
    <Modal>
      <Modal.ModalTrigger>
        <Button variant="danger">Delete Member</Button>
      </Modal.ModalTrigger>
      <Modal.ModalContent>
        {isPending && <LoadingSpinner />}
        {!isPending && (
          <>
            <Modal.ModalHeader>Are you absolutely sure?</Modal.ModalHeader>
            <Modal.ModalDescription>
              This action cannot be undone. This will permanently delete member and remove it from database.
            </Modal.ModalDescription>
            <Modal.ModalActions>
              <Modal.ModalCancelAction />
              <Modal.ModalConfirmAction onClick={() => mutate({ id: memberId, avatarUrl })} />
            </Modal.ModalActions>
          </>
        )}
      </Modal.ModalContent>
    </Modal>
  );
}
