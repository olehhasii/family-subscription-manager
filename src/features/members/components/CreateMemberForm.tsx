import { useMutation, useQueryClient } from '@tanstack/react-query';
import MemberFormBase from './MemberFormBase';
import { createMember } from '../../../api/membersApi';
import { toast } from 'sonner';
import type { Member } from '../../../types/types';
import { getClosestNextMonth } from '../../../lib/dates';

interface MutateProps {
  newMember: Omit<Member, 'id'>;
  avatarFile: File;
}

export default function CreateMemberForm({ onCancelMemberAction }: { onCancelMemberAction: () => void }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ newMember, avatarFile }: MutateProps) => createMember(newMember, avatarFile),
    onSuccess: () => {
      toast.success('Member Created');
      queryClient.invalidateQueries({ queryKey: ['members'] });
      onCancelMemberAction();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleCreateMember = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const avatarFile = formData.get('avatar');

    const newMember = {
      name: formData.get('memberName') as string,
      email: formData.get('memberEmail') as string,
      paidUntill: getClosestNextMonth(),
      avatarUrl: '',
      shouldPay: formData.get('shouldPay') ? true : false,
    };

    if (!newMember.name || !newMember.email) {
      toast.error('Some fields are empty');
    } else {
      mutate({ newMember, avatarFile: avatarFile as File });
    }
  };

  return (
    <MemberFormBase
      formLabel="Create Member"
      submitLabel="Add Member"
      onSubmit={handleCreateMember}
      onSecondaryAction={onCancelMemberAction}
      isLoading={isPending}
    />
  );
}
