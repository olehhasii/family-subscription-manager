import useAdminPanelNav from '../../hooks/useAdminPanelNav';
import AdminNavigation from './components/AdminNavigation';
import AdminViewRenderer from './components/AdminViewRenderer';
import { AdminPanelContainer, AdminPanelContent } from './styles/AdminPanel.styles';

export default function AdminPanel() {
  const { activeView, navigateTo, selectedMemberId } = useAdminPanelNav();

  return (
    <AdminPanelContainer>
      <AdminNavigation activeView={activeView} onNavigate={navigateTo} />

      <AdminPanelContent>
        <AdminViewRenderer view={activeView} onNavigate={navigateTo} />
      </AdminPanelContent>
    </AdminPanelContainer>
  );
}
