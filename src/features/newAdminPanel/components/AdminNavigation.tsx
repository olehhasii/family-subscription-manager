import { useLogout } from '../../../hooks/useLogout';
import { useTranslations } from '../../../hooks/useTranslation';
import { ADMIN_VIEWS, type AdminPanelView } from '../../../types/adminTypes';
import { AdminNavButton, AdminNavGroup, AdminNavigationContainer } from '../styles/AdminNavigation..styles';

interface AdminNavigationProps {
  onNavigate: (view: AdminPanelView) => void;
  activeView: AdminPanelView;
}

export default function AdminNavigation({ onNavigate, activeView }: AdminNavigationProps) {
  const logoutMutation = useLogout();
  const { t } = useTranslations();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <AdminNavigationContainer>
      <AdminNavGroup>
        <AdminNavButton
          $active={activeView === ADMIN_VIEWS.MEMBERS_LIST}
          onClick={() => onNavigate(ADMIN_VIEWS.MEMBERS_LIST)}
        >
          🧔‍♂️{t.members}
        </AdminNavButton>
      </AdminNavGroup>
      <AdminNavGroup>
        <AdminNavButton
          $active={activeView === ADMIN_VIEWS.GROUP_SETTINGS}
          onClick={() => onNavigate(ADMIN_VIEWS.GROUP_SETTINGS)}
        >
          ⚙️{t.boardSettings}
        </AdminNavButton>
      </AdminNavGroup>
      <AdminNavGroup>
        <AdminNavButton onClick={handleLogout}>{t.logout}</AdminNavButton>
      </AdminNavGroup>
    </AdminNavigationContainer>
  );
}
