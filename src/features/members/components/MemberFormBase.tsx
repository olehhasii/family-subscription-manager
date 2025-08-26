import type { Member } from '../../../types/types';
import AdminPanelButton from '../../../ui/AdminPanelButton';
import Checkbox from '../../../ui/form/Checkbox';
import FormInput from '../../../ui/form/FormInput';
import ImgInput from '../../../ui/form/ImgInput';
import Spinner from '../../../ui/Spinner';
import { ActionsContainer, InputsContainer, StyledForm } from '../styles/MemberFormStyles';

interface FormProps {
  formLabel: string;
  submitLabel: string;
  secondaryActionLabel?: string;
  onSubmit: (event: React.SyntheticEvent) => void;
  onCancel: () => void;
  isLoading?: boolean;
  children?: React.ReactNode;
  defaultValues?: Member;
}

export default function MemberFormBase({
  formLabel,
  submitLabel,
  onSubmit,
  onCancel,
  isLoading,
  secondaryActionLabel = 'Cancel',
  children,
  defaultValues,
}: FormProps) {
  console.log(defaultValues);

  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>{formLabel}</h2>
      <InputsContainer>
        <ImgInput defaultImg={defaultValues?.avatarUrl} key={`${defaultValues?.id}-img`} />
        <FormInput label="Member Name" id="memberName" name="memberName" defaultValue={defaultValues?.name} />

        <FormInput label="Member Email" id="memberEmail" name="memberEmail" defaultValue={defaultValues?.email} />
        <Checkbox
          label="Should the member pay or is he on special terms (he is owner, etc.)?"
          id="shouldPay"
          name="shouldPay"
          defaultChecked={defaultValues?.shouldPay}
          key={`${defaultValues?.id}-checkbox`}
        />
        {children}
      </InputsContainer>
      <ActionsContainer>
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <AdminPanelButton label={submitLabel} type="submit" />
            <AdminPanelButton label={secondaryActionLabel} variant="danger" onClick={onCancel} />
          </>
        )}
      </ActionsContainer>
    </StyledForm>
  );
}
