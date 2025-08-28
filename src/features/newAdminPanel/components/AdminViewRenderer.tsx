import { ADMIN_VIEWS, type AdminPanelView } from '../../../types/adminTypes';
import MemberListView from './members/MemberListView';

interface AdminViewRendererProps {
  view: AdminPanelView;
  onNavigate: (view: AdminPanelView, id?: number) => void;
}

export default function AdminViewRenderer({ view, onNavigate }: AdminViewRendererProps) {
  switch (view) {
    case ADMIN_VIEWS.MEMBERS_LIST:
      return <MemberListView onNavigate={onNavigate} />;
    case ADMIN_VIEWS.BOARD_SETTINGS:
      return <div>Board Settings...</div>;
    case ADMIN_VIEWS.MEMBERS_CREATE:
      return <div>Create Member</div>;
    case ADMIN_VIEWS.MEMBERS_EDIT:
      return <div>Edit member</div>;
    default:
      return <div>Select view</div>;
  }
}
