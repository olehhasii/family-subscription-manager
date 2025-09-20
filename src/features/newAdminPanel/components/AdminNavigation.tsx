import { useLogout } from '../../../hooks/useLogout';
import { ADMIN_VIEWS, type AdminPanelView } from '../../../types/adminTypes';
import { AdminNavButton, AdminNavGroup, AdminNavigationContainer } from '../styles/AdminNavigation..styles';

interface AdminNavigationProps {
  onNavigate: (view: AdminPanelView) => void;
  activeView: AdminPanelView;
}

export default function AdminNavigation({ onNavigate, activeView }: AdminNavigationProps) {
  const logoutMutation = useLogout();

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
          🧔‍♂️Members
        </AdminNavButton>
      </AdminNavGroup>
      <AdminNavGroup>
        <AdminNavButton
          $active={activeView === ADMIN_VIEWS.GROUP_SETTINGS}
          onClick={() => onNavigate(ADMIN_VIEWS.GROUP_SETTINGS)}
        >
          ⚙️Board Settings
        </AdminNavButton>
      </AdminNavGroup>
      <AdminNavGroup>
        <AdminNavButton onClick={handleLogout}>🏃Logout</AdminNavButton>
      </AdminNavGroup>
    </AdminNavigationContainer>
  );
}
