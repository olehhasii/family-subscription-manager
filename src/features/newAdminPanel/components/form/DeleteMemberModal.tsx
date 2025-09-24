import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from '../../../../ui/elements/Button';
import Modal from '../../../../ui/modal/Modal';
import { deleteMember } from '../../../../api/membersApi';
import { toast } from 'sonner';
import LoadingSpinner from '../../../../ui/elements/LoadingSpinner';
import { useTranslations } from '../../../../hooks/useTranslation';

export default function DeleteMemberModal({
  memberId,
  onGoBack,
  avatarUrl,
}: {
  memberId: number;
  onGoBack: () => void;
  avatarUrl: string;
}) {
  const { t } = useTranslations();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, avatarUrl }: { id: number; avatarUrl: string }) => deleteMember(id, avatarUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
      queryClient.invalidateQueries({ queryKey: ['member', memberId] });
      toast.success(t.memberDeleted);
      onGoBack();
    },
    onError: () => {
      toast.error(t.errorDeletingMember);
    },
  });

  return (
    <Modal>
      <Modal.ModalTrigger>
        <Button variant="danger">{t.deleteMember}</Button>
      </Modal.ModalTrigger>
      <Modal.ModalContent>
        {isPending && <LoadingSpinner />}
        {!isPending && (
          <>
            <Modal.ModalHeader>{t.areYouAbsolutelySure}</Modal.ModalHeader>
            <Modal.ModalDescription>{t.deleteConfirmation}</Modal.ModalDescription>
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
