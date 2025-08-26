import { useState } from 'react';
import { useMember } from '../../../hooks/useMember';
import Modal from '../../../ui/modal/Modal';
import MemberFormBase from './MemberFormBase';
import AdminPanelButton from '../../../ui/AdminPanelButton';
import { DeleteModalContainer, ModalActions, ModalHeading } from '../../../ui/modal/Modal.styles';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMemberById } from '../../../api/membersApi';
import { toast } from 'sonner';
import Spinner from '../../../ui/Spinner';

export default function EditMemberForm({
  onCancelMemberAction,
  activeMemberId,
}: {
  onCancelMemberAction: () => void;
  activeMemberId: string;
}) {
  const { member } = useMember(activeMemberId);

  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteMemberById,

    onSuccess: () => {
      toast.success('Member deleted');
      setIsDeleteModalOpened(false);

      queryClient.invalidateQueries({ queryKey: ['members'] });
      queryClient.removeQueries({ queryKey: [`${activeMemberId}-member`] });
      onCancelMemberAction();
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleDeleteMember = () => {
    mutate(activeMemberId);
  };

  return (
    <>
      <MemberFormBase
        formLabel="Update Member"
        submitLabel="Save Changes"
        onSecondaryAction={() => setIsDeleteModalOpened(true)}
        onSubmit={() => {}}
        secondaryActionLabel="Delete"
        defaultValues={member}
      />
      <Modal isOpen={isDeleteModalOpened}>
        <DeleteModalContainer>
          <ModalHeading>Are you sure that you want to delete {member?.name}</ModalHeading>
          <ModalActions>
            {isPending && <Spinner />}
            {!isPending && (
              <>
                <AdminPanelButton label="Cancel" onClick={() => setIsDeleteModalOpened(false)} />
                <AdminPanelButton label="Yes, Delete" variant="danger" onClick={handleDeleteMember} />
              </>
            )}
          </ModalActions>
        </DeleteModalContainer>
      </Modal>
    </>
  );
}
