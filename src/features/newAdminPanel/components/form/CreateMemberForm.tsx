import Form from '../../../../ui/elements/Form';
import Input from '../../../../ui/elements/Input';
import ToggleInput from '../../../../ui/elements/ToggleInput';

export default function CreateMemberForm() {
  return (
    <Form>
      <Input name="name" placeholder="Oleh" label="Member Name" id="name" size="medium" />
      <Input name="Email" placeholder="emaxple@.gmail.com" label="Member email" id="email" size="medium" />
      <ToggleInput id="isBillable" name="isBillable" label="Is Member Billable?" defaultChecked={true} />
    </Form>
  );
}
