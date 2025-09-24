import { useTranslations } from '../../../../hooks/useTranslation';
import type { AdminPanelView } from '../../../../types/adminTypes';
import { ViewHeader } from '../../../../ui/adminViews/AdminViews.styles';
import EditMemberForm from './EditMemberForm';

interface EditMemberViewProps {
  onNavigate: (view: AdminPanelView, id?: number) => void;
  selectedMemberId: number | null;
}

export default function EditMemberView({ onNavigate, selectedMemberId }: EditMemberViewProps) {
  const { t } = useTranslations();

  return (
    <div>
      <ViewHeader>
        <h2>{t.updateMember}</h2>
      </ViewHeader>
      <EditMemberForm onGoBack={onNavigate} selectedMemberId={selectedMemberId} />
    </div>
  );
}
