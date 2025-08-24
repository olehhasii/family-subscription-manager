import styled from 'styled-components';
import FormInput from '../../../ui/form/FormInput';
import AdminPanelButton from '../../../ui/AdminPanelButton';
import FormSelect from '../../../ui/form/FormSelect';

export const StyledBoardSettingsForm = styled.form`
  margin-top: var(--spacing-16);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);

  & > button {
    margin-top: var(--spacing-16);
  }
`;

export default function BoardSettingsForm() {
  return (
    <StyledBoardSettingsForm>
      <FormInput label="Board Name" name="boardName" id="boardName" />
      <FormSelect label="Board Owner" name="boardName" id="boardName" options={['Oleh', 'Andrii', 'Ruslan']} />
      <FormInput label="Membership monthly price" name="boardName" id="boardName" placeholder="45 UAH" />
      <AdminPanelButton label="Save Changes" onClick={() => {}} />
    </StyledBoardSettingsForm>
  );
}
