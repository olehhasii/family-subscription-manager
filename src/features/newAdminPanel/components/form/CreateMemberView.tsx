import type { AdminPanelView } from '../../../../types/adminTypes';
import { ViewHeader } from '../../../../ui/adminViews/AdminViews.styles';
import CreateMemberForm from './CreateMemberForm';

interface CreateMemberViewProps {
  onNavigate: (view: AdminPanelView, id?: number) => void;
}

export default function CreateMemberView({ onNavigate }: CreateMemberViewProps) {
  return (
    <div>
      <ViewHeader>
        <h2>Add a new member</h2>
      </ViewHeader>
      <CreateMemberForm onGoBack={onNavigate} />
    </div>
  );
}
