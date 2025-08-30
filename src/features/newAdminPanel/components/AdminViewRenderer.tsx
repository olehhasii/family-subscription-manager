import { ADMIN_VIEWS, type AdminPanelView } from '../../../types/adminTypes';
import CreateMemberView from './form/CreateMemberView';
import GroupSettingsView from './group/GroupSettingsView';
import MemberListView from './members/MemberListView';

interface AdminViewRendererProps {
  view: AdminPanelView;
  onNavigate: (view: AdminPanelView, id?: number) => void;
}

export default function AdminViewRenderer({ view, onNavigate }: AdminViewRendererProps) {
  switch (view) {
    case ADMIN_VIEWS.MEMBERS_LIST:
      return <MemberListView onNavigate={onNavigate} />;
    case ADMIN_VIEWS.GROUP_SETTINGS:
      return <GroupSettingsView />;
    case ADMIN_VIEWS.MEMBERS_CREATE:
      return <CreateMemberView onNavigate={onNavigate} />;
    case ADMIN_VIEWS.MEMBERS_EDIT:
      return <div>Edit member</div>;
    default:
      return <div>Select view</div>;
  }
}
