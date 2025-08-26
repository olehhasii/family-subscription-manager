import AdminPanelButton from '../../../ui/AdminPanelButton';
import Checkbox from '../../../ui/form/Checkbox';
import FormInput from '../../../ui/form/FormInput';
import ImgInput from '../../../ui/form/ImgInput';
import Spinner from '../../../ui/Spinner';
import { ActionsContainer, InputsContainer, StyledForm } from '../styles/MemberFormStyles';

interface FormProps {
  formLabel: string;
  submitLabel: string;
  onSubmit: (event: React.SyntheticEvent) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export default function MemberFormBase({ formLabel, submitLabel, onSubmit, onCancel, isLoading }: FormProps) {
  return (
    <StyledForm onSubmit={onSubmit}>
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
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <AdminPanelButton label={submitLabel} type="submit" />
            <AdminPanelButton label="Cancel" variant="danger" onClick={onCancel} />
          </>
        )}
      </ActionsContainer>
    </StyledForm>
  );
}
