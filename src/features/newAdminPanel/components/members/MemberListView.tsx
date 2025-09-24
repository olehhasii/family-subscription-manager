import { useTranslations } from '../../../../hooks/useTranslation';
import { ADMIN_VIEWS, type AdminPanelView } from '../../../../types/adminTypes';
import { ViewHeader } from '../../../../ui/adminViews/AdminViews.styles';
import Button from '../../../../ui/elements/Button';
import { MembersViewContainer } from '../../styles/members/MembersList.styles';
import MembersList from './MembersList';

interface MemberListViewProps {
  onNavigate: (view: AdminPanelView, id?: number) => void;
}

export default function MemberListView({ onNavigate }: MemberListViewProps) {
  const { t } = useTranslations();

  return (
    <MembersViewContainer>
      <ViewHeader>
        <h2>{t.activeMembers}</h2>
        <Button fullWidth onClick={() => onNavigate(ADMIN_VIEWS.MEMBERS_CREATE)}>
          {t.addMember}
        </Button>
      </ViewHeader>
      <MembersList onNavigate={onNavigate} />
    </MembersViewContainer>
  );
}
