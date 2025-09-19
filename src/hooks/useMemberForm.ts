import { toast } from 'sonner';
import type { Member } from '../types/membersTypes';
import { ADMIN_VIEWS, type AdminPanelView } from '../types/adminTypes';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMember, updateMember } from '../api/membersApi';

interface UseMemberFormProps {
  mode: 'create' | 'edit';
  member?: Member;
  onGoBack: (view: AdminPanelView, id?: number) => void;
}

// Rename this interface to avoid conflict with native FormData
interface MemberFormData {
  name: string;
  email: string;
  isBillable: boolean;
  paidUntil: string;
  avatarUrl: string;
}

export default function useMemberForm({ mode, member, onGoBack }: UseMemberFormProps) {
  const [isBillable, setIsBillable] = useState(mode === 'create' ? true : member?.isBillable || false);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (mode === 'edit' && member?.isBillable !== undefined) {
      setIsBillable(member.isBillable);
    }
  }, [member?.isBillable, mode]);

  // Fix: Change parameter type to MemberFormData
  const validateForm = (memberData: MemberFormData, avatar?: File): boolean => {
    if (avatar && avatar.size > 5 * 1024 * 1024) {
      toast.error('Avatar file is too large (max 5MB)');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!memberData.email || !emailRegex.test(memberData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!memberData.name) {
      toast.error('Please fill in name and email');
      return false;
    }

    return true;
  };

  // Fix: Use native FormData type explicitly
  const extractFormData = (formData: globalThis.FormData): { memberData: Omit<Member, 'id'>; avatar?: File } => {
    const memberData: Omit<Member, 'id'> = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      isBillable: Boolean(formData.get('isBillable')),
      paidUntil: (formData.get('paidUntil') as string) || '',
      avatarUrl: mode === 'edit' ? member?.avatarUrl || '' : '',
    };

    const avatar = formData.get('avatar') as File;
    return { memberData, avatar };
  };

  const createMutation = useMutation({
    mutationFn: ({ newMember, avatar }: { newMember: Omit<Member, 'id'>; avatar?: File }) =>
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

  const updateMutation = useMutation({
    mutationFn: ({
      updatedData,
      avatar,
      memberId,
    }: {
      updatedData: Omit<Member, 'id'>;
      avatar?: File;
      memberId: number;
    }) => updateMember(updatedData, memberId, avatar),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
      queryClient.invalidateQueries({ queryKey: ['member', member?.id] });
      toast.success('Member Updated');
      onGoBack(ADMIN_VIEWS.MEMBERS_LIST);
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Error updating member');
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const { memberData, avatar } = extractFormData(formData);

    if (!validateForm(memberData as MemberFormData, avatar)) {
      return;
    }

    if (mode === 'create') {
      createMutation.mutate({ newMember: memberData, avatar });
    } else if (mode === 'edit' && member) {
      updateMutation.mutate({ updatedData: memberData, memberId: member.id, avatar });
    }
  };

  const currentMutation = mode === 'create' ? createMutation : updateMutation;

  return {
    isBillable,
    setIsBillable,
    handleSubmit,

    isPending: currentMutation.isPending,
    isError: currentMutation.isError,
    error: currentMutation.error,
    mode,
    isEditMode: mode === 'edit',
    isCreateMode: mode === 'create',
  };
}
