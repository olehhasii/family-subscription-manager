import { ViewHeader } from '../../../../ui/adminViews/AdminViews.styles';
import CreateMemberForm from './CreateMemberForm';

export default function CreateMemberView() {
  return (
    <div>
      <ViewHeader>
        <h2>Add a new member</h2>
      </ViewHeader>
      <CreateMemberForm />
    </div>
  );
}
