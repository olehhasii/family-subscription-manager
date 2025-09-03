import { useState, useEffect } from 'react';
import useMember from '../../../../hooks/useMember';
import type { AdminPanelView } from '../../../../types/adminTypes';
import Button from '../../../../ui/elements/Button';
import ErrorContainer from '../../../../ui/elements/ErrorContainer';
import Form from '../../../../ui/elements/Form';
import Input from '../../../../ui/elements/Input';
import LoadingSpinner from '../../../../ui/elements/LoadingSpinner';
import ToggleInput from '../../../../ui/elements/ToggleInput';
import MonthPicker from '../../../../ui/elements/MonthPicker';
import ImgInput from '../../../../ui/elements/ImgInput';
import defaultAvatar from '../../../../assets/profile.png';

interface EditMemberFormProps {
  onGoBack: (view: AdminPanelView, id?: number) => void;
  selectedMemberId: number | null;
}

export default function EditMemberForm({ onGoBack, selectedMemberId }: EditMemberFormProps) {
  if (!selectedMemberId) {
    return (
      <ErrorContainer>
        <p>Error getting member data</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </ErrorContainer>
    );
  }

  const { member, isError: isMemberError, isLoading: isMemberLoading } = useMember(selectedMemberId);
  const [isBillable, setIsBillable] = useState(false);

  useEffect(() => {
    if (member?.isBillable !== undefined) {
      setIsBillable(member.isBillable);
    }
  }, [member?.isBillable]);

  if (isMemberLoading) {
    return <LoadingSpinner />;
  }

  if (isMemberError) {
    return (
      <ErrorContainer>
        <p>Error getting member data</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </ErrorContainer>
    );
  }

  return (
    <Form>
      <ToggleInput
        id="isBillable"
        name="isBillable"
        label="Is Member Billable?"
        /* defaultChecked={true} */
        checked={isBillable}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsBillable(e.target.checked)}
        /* disabled={isPending} */
      />
      <MonthPicker
        label="Date until paid"
        id="paidUntil"
        name="paidUntil"
        inputText="Select Date"
        size="medium"
        disabled={!isBillable}
        fullWidth={true}
        defaultOption={member.paidUntil}
      />
      <Input
        name="name"
        placeholder="Oleh"
        label="Member Name"
        id="name"
        size="medium"
        /* disabled={isPending} */ defaultValue={member.name}
      />
      <Input
        name="email"
        placeholder="example@gmail.com"
        label="Member email"
        id="email"
        size="medium"
        /* disabled={isPending} */
        defaultValue={member.email}
      />
      <ImgInput
        id="avatar"
        name="avatar"
        label="Member Avatar"
        defaultImg={member.avatarUrl || defaultAvatar}
        showUploadedFile
        size="medium"
        /* disabled={isPending} */
      />
    </Form>
  );
}
