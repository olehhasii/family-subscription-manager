import AdminPanelButton from '../../../ui/AdminPanelButton';
import Checkbox from '../../../ui/form/Checkbox';
import FormInput from '../../../ui/form/FormInput';
import ImgInput from '../../../ui/form/ImgInput';
import { ActionsContainer, InputsContainer, StyledForm } from '../styles/MemberFormStyles';

interface FormProps {
  formLabel: string;
  submitLabel: string;
}

export default function MemberFormBase({ formLabel, submitLabel }: FormProps) {
  return (
    <StyledForm>
      <h2>{formLabel}</h2>
      <InputsContainer>
        <ImgInput />
        <FormInput label="Member Name" id="memberName" name="memberName" />

        <FormInput label="Member Email" id="memberEmail" name="memberEmail" />
        <Checkbox
          label="Should the member pay or is he on special terms (he is owner, etc.)?"
          id="shouldPay"
          name="shouldPay"
        />
      </InputsContainer>
      <ActionsContainer>
        <AdminPanelButton label={submitLabel} />
        <AdminPanelButton label="Cancel" variant="danger" />
      </ActionsContainer>
    </StyledForm>
  );
}
