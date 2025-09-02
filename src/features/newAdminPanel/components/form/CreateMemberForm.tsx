import Button from '../../../../ui/elements/Button';
import Form from '../../../../ui/elements/Form';
import ImgInput from '../../../../ui/elements/ImgInput';
import Input from '../../../../ui/elements/Input';
import ToggleInput from '../../../../ui/elements/ToggleInput';
import defaultAvatar from '../../../../assets/profile.png';
import ActionsContainer from '../../../../ui/elements/ActionsContainer';
import { ADMIN_VIEWS, type AdminPanelView } from '../../../../types/adminTypes';
import MonthPicker from '../../../../ui/elements/MonthPicker';
import { useState } from 'react';
import { toast } from 'sonner';
import { createMember } from '../../../../api/membersApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Member } from '../../../../types/membersTypes';
import ErrorContainer from '../../../../ui/elements/ErrorContainer';

interface CreateMemberFormProps {
  onGoBack: (view: AdminPanelView, id?: number) => void;
}

export default function CreateMemberForm({ onGoBack }: CreateMemberFormProps) {
  const [isBillable, setIsBillable] = useState(true);

  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: ({ newMember, avatar }: { newMember: Omit<Member, 'id'>; avatar: File }) =>
      createMember(newMember, avatar),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
      toast.success('Member Created');
      onGoBack(ADMIN_VIEWS.MEMBERS_LIST);
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Error creating member');
    },
  });

  const handleCreateMember = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const newMember = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      isBillable: Boolean(formData.get('isBillable')),
      paidUntil: (formData.get('paidUntil') as string) || '',
      avatarUrl: '',
    };

    const avatar = formData.get('avatar') as File;

    if (avatar && avatar.size > 5 * 1024 * 1024) {
      toast.error('Avatar file is too large (max 5MB)');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newMember.email || !emailRegex.test(newMember.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!newMember.name) {
      toast.error('Please fill in name and email');
      return;
    }

    mutate({ newMember, avatar });
  };

  if (isError) {
    return (
      <ErrorContainer>
        <p>Error creating member</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </ErrorContainer>
    );
  }

  return (
    <Form onSubmit={handleCreateMember}>
      <Input name="name" placeholder="Oleh" label="Member Name" id="name" size="medium" disabled={isPending} />
      <Input
        name="email"
        placeholder="example@gmail.com"
        label="Member email"
        id="email"
        size="medium"
        disabled={isPending}
      />
      <ToggleInput
        id="isBillable"
        name="isBillable"
        label="Is Member Billable?"
        defaultChecked={true}
        checked={isBillable}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsBillable(e.target.checked)}
        disabled={isPending}
      />
      <MonthPicker
        label="Date until paid"
        id="paidUntil"
        name="paidUntil"
        inputText="Select Date"
        size="medium"
        disabled={!isBillable}
        fullWidth={true}
      />
      <ImgInput
        id="avatar"
        name="avatar"
        label="Member Avatar"
        defaultImg={defaultAvatar}
        showUploadedFile
        size="medium"
        disabled={isPending}
      />
      <ActionsContainer align="flex-end">
        <Button type="submit" variant="primary" disabled={isPending}>
          {isPending ? 'Creating' : 'Add Member'}
        </Button>
        <Button onClick={() => onGoBack(ADMIN_VIEWS.MEMBERS_LIST)} disabled={isPending}>
          Cancel
        </Button>
      </ActionsContainer>
    </Form>
  );
}
