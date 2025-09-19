import Button from '../../../../ui/elements/Button';
import Form from '../../../../ui/elements/Form';
import ImgInput from '../../../../ui/elements/ImgInput';
import Input from '../../../../ui/elements/Input';
import ToggleInput from '../../../../ui/elements/ToggleInput';
import defaultAvatar from '../../../../assets/profile.png';
import ActionsContainer from '../../../../ui/elements/ActionsContainer';
import { ADMIN_VIEWS, type AdminPanelView } from '../../../../types/adminTypes';
import MonthPicker from '../../../../ui/elements/MonthPicker';
import ErrorContainer from '../../../../ui/elements/ErrorContainer';
import useMemberForm from '../../../../hooks/useMemberForm';

interface CreateMemberFormProps {
  onGoBack: (view: AdminPanelView, id?: number) => void;
}

export default function CreateMemberForm({ onGoBack }: CreateMemberFormProps) {
  const { handleSubmit, setIsBillable, isBillable, isError, isPending } = useMemberForm({ mode: 'create', onGoBack });

  if (isError) {
    return (
      <ErrorContainer>
        <p>Error creating member</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </ErrorContainer>
    );
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
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
