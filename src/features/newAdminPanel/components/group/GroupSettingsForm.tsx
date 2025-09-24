import { useQueryClient, useMutation } from '@tanstack/react-query';
import useGroup from '../../../../hooks/useGroup';
import useMembers from '../../../../hooks/useMembers';
import Button from '../../../../ui/elements/Button';
import Form from '../../../../ui/elements/Form';
import Input from '../../../../ui/elements/Input';
import LoadingSpinner from '../../../../ui/elements/LoadingSpinner';
import Select from '../../../../ui/elements/Select';
import { updateGroupSettings } from '../../../../api/groupApi';
import { toast } from 'sonner';
import type { GroupType } from '../../../../types/adminTypes';
import ErrorContainer from '../../../../ui/elements/ErrorContainer';
import { useTranslations } from '../../../../hooks/useTranslation';

export default function GroupSettingsForm() {
  const { t } = useTranslations();
  const { groupSettings, isError: isGroupError, isLoading: isGroupLoading } = useGroup();
  const { members, isError: isMembersError, isLoading: isMembersLoading } = useMembers();

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ data, groupId }: { data: GroupType; groupId: number }) => updateGroupSettings(data, groupId),
    onSuccess: () => {
      toast.success(t.groupSettingsUpdated);
      queryClient.invalidateQueries({ queryKey: ['group'] });
    },
    onError: (err: Error) => {
      toast.error(err.message || t.errorUpdatingGroup);
    },
  });

  const ownerOptions =
    members?.map((member) => {
      return { label: member.name, value: member.id };
    }) || [];

  const defaultOwner = groupSettings?.ownerId
    ? ownerOptions.find((option) => option.value === groupSettings.ownerId)
    : null;

  const handleUpdateGroup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!groupSettings?.id) {
      toast.error(t.groupDataNotLoaded);
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);

    const groupName = formData.get('groupName') as string;
    const membershipPrice = formData.get('membershipPrice') as string;
    const ownerId = formData.get('ownerId') as string;

    if (!groupName.trim()) {
      toast.error(t.groupNameRequired);
      return;
    }

    if (Number(membershipPrice) <= 0) {
      toast.error(t.membershipPricePositive);
      return;
    }

    const updateData = {
      groupName,
      membershipPrice: Number(membershipPrice),
      ownerId: Number(ownerId),
    };

    mutate({
      data: updateData,
      groupId: groupSettings.id,
    });
  };

  if (isGroupLoading || isMembersLoading) {
    return <LoadingSpinner size={68} />;
  }

  if (isGroupError || isMembersError) {
    return (
      <ErrorContainer>
        <p>{t.errorLoadingData}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </ErrorContainer>
    );
  }

  return (
    <Form onSubmit={handleUpdateGroup}>
      <Input
        name="groupName"
        id="groupName"
        label={t.groupName}
        placeholder="Youtube"
        size="medium"
        defaultValue={groupSettings?.groupName}
      />
      <Input
        name="membershipPrice"
        id="membershipPrice"
        label={t.membershipPrice}
        placeholder="45 "
        type="number"
        size="medium"
        defaultValue={groupSettings?.membershipPrice}
      />
      <Select
        id="ownerId"
        name="ownerId"
        label={t.owner}
        size="medium"
        contentHeader="Members"
        options={ownerOptions}
        defaultOption={defaultOwner}
      />
      <Button type="submit" variant="primary" disabled={isPending}>
        {isPending ? <LoadingSpinner size={24} /> : t.update}
      </Button>
    </Form>
  );
}
