import { useState } from 'react';
import { useMember } from '../../../hooks/useMember';
import Modal from '../../../ui/modal/Modal';
import MemberFormBase from './MemberFormBase';
import AdminPanelButton from '../../../ui/AdminPanelButton';
import { DeleteModalContainer, ModalActions, ModalHeading } from '../../../ui/modal/Modal.styles';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMemberById, updateMemberData } from '../../../api/membersApi';
import { toast } from 'sonner';
import Spinner from '../../../ui/Spinner';
import type { Member } from '../../../types/types';
import DateInput from '../../../ui/form/DateInput';

interface MutateUpdateProps {
  newData: Omit<Member, 'id'>;
  id: string;
  newAvatar: File;
}

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

  const { mutate: mutateDeleteMember, isPending: isDeletionPending } = useMutation({
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

  const { mutate: mutateUpdateMember, isPending: isUpdatingPending } = useMutation({
    mutationFn: ({ newData, id, newAvatar }: MutateUpdateProps) => updateMemberData(newData, id, newAvatar),
    onSuccess: () => {
      toast.success('Member updated');
      queryClient.invalidateQueries({ queryKey: ['members'] });
      queryClient.removeQueries({ queryKey: [`${activeMemberId}-member`] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleDeleteMember = () => {
    mutateDeleteMember(activeMemberId);
  };

  const handleUpdateMember = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const newAvatar = formData.get('avatar');

    const newData = {
      name: formData.get('memberName') as string,
      email: formData.get('memberEmail') as string,
      paidUntill: formData.get('paidUntill') + '-01',
      avatarUrl: member.avatarUrl,
      shouldPay: formData.get('shouldPay') ? true : false,
    };

    if (!newData.name || !newData.email) {
      toast.error('Some fields are empty');
    } else {
      mutateUpdateMember({ newData, id: activeMemberId, newAvatar: newAvatar as File });
    }
  };

  if (isUpdatingPending) {
    return <Spinner isAbsolute={false} />;
  }

  return (
    <>
      <MemberFormBase
        formLabel="Update Member"
        submitLabel="Save Changes"
        onSecondaryAction={() => setIsDeleteModalOpened(true)}
        onSubmit={handleUpdateMember}
        secondaryActionLabel="Delete"
        defaultValues={member}
      >
        <DateInput
          label="What is the payment due date? "
          name="paidUntill"
          id="paidUntill"
          defaultValue={member?.paidUntill}
        />
      </MemberFormBase>
      <Modal isOpen={isDeleteModalOpened}>
        <DeleteModalContainer>
          <ModalHeading>Are you sure that you want to delete {member?.name}</ModalHeading>
          <ModalActions>
            {(isDeletionPending || isUpdatingPending) && <Spinner isAbsolute={false} />}
            {!isDeletionPending && !isUpdatingPending && (
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
