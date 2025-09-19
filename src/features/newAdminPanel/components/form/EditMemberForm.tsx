import useMember from '../../../../hooks/useMember';
import { ADMIN_VIEWS, type AdminPanelView } from '../../../../types/adminTypes';
import Button from '../../../../ui/elements/Button';
import ErrorContainer from '../../../../ui/elements/ErrorContainer';
import Form from '../../../../ui/elements/Form';
import Input from '../../../../ui/elements/Input';
import LoadingSpinner from '../../../../ui/elements/LoadingSpinner';
import ToggleInput from '../../../../ui/elements/ToggleInput';
import MonthPicker from '../../../../ui/elements/MonthPicker';
import ImgInput from '../../../../ui/elements/ImgInput';
import defaultAvatar from '../../../../assets/profile.png';

import useMemberForm from '../../../../hooks/useMemberForm';
import ActionsContainer from '../../../../ui/elements/ActionsContainer';
import DeleteMemberModal from './DeleteMemberModal';

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

  const {
    handleSubmit,
    setIsBillable,
    isBillable,
    isError: isUpdatingError,
    isPending: isUpdating,
  } = useMemberForm({ mode: 'edit', member, onGoBack });

  if (isMemberLoading || isUpdating) {
    return <LoadingSpinner />;
  }

  if (isMemberError || isUpdatingError) {
    return (
      <ErrorContainer>
        <p>Error getting member data</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </ErrorContainer>
    );
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <ToggleInput
        id="isBillable"
        name="isBillable"
        label="Is Member Billable?"
        /* defaultChecked={true} */
        checked={isBillable}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsBillable(e.target.checked)}
        disabled={isUpdating}
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
        disabled={isUpdating}
        defaultValue={member.name}
      />
      <Input
        name="email"
        placeholder="example@gmail.com"
        label="Member email"
        id="email"
        size="medium"
        disabled={isUpdating}
        defaultValue={member.email}
      />
      <ImgInput
        id="avatar"
        name="avatar"
        label="Member Avatar"
        defaultImg={member.avatarUrl || defaultAvatar}
        showUploadedFile
        size="medium"
        disabled={isUpdating}
      />
      <ActionsContainer align="flex-end">
        <Button type="submit" variant="primary" disabled={isUpdating}>
          {isUpdating ? 'Updating' : 'Update Member'}
        </Button>
        {/* <Button disabled={isUpdating} variant="danger">
          Delete Member
        </Button> */}
        <DeleteMemberModal
          memberId={member.id}
          onGoBack={() => onGoBack(ADMIN_VIEWS.MEMBERS_LIST)}
          avatarUrl={member.avatarUrl}
        />
        <Button onClick={() => onGoBack(ADMIN_VIEWS.MEMBERS_LIST)} disabled={isUpdating}>
          Cancel
        </Button>
      </ActionsContainer>
    </Form>
  );
}
