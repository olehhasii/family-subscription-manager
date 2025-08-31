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

interface CreateMemberFormProps {
  onGoBack: (view: AdminPanelView, id?: number) => void;
}

export default function CreateMemberForm({ onGoBack }: CreateMemberFormProps) {
  const [isBillable, setIsBillable] = useState(true);

  return (
    <Form>
      <Input name="name" placeholder="Oleh" label="Member Name" id="name" size="medium" />
      <Input name="Email" placeholder="emaxple@.gmail.com" label="Member email" id="email" size="medium" />
      <ToggleInput
        id="isBillable"
        name="isBillable"
        label="Is Member Billable?"
        defaultChecked={true}
        checked={isBillable}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsBillable(e.target.checked)}
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
      />
      <ActionsContainer align="flex-end">
        <Button type="submit" variant="primary">
          Add Member
        </Button>
        <Button onClick={() => onGoBack(ADMIN_VIEWS.MEMBERS_LIST)}>Cancel</Button>
      </ActionsContainer>
    </Form>
  );
}
