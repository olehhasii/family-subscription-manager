import { ADMIN_VIEWS, type AdminPanelView } from '../../../types/adminTypes';
import CreateMemberView from './form/CreateMemberView';
import EditMemberView from './form/EditMemberView';
import GroupSettingsView from './group/GroupSettingsView';
import MemberListView from './members/MemberListView';

interface AdminViewRendererProps {
  view: AdminPanelView;
  onNavigate: (view: AdminPanelView, id?: number) => void;
  selectedMemberId: number | null;
}

export default function AdminViewRenderer({ view, onNavigate, selectedMemberId }: AdminViewRendererProps) {
  switch (view) {
    case ADMIN_VIEWS.MEMBERS_LIST:
      return <MemberListView onNavigate={onNavigate} />;
    case ADMIN_VIEWS.GROUP_SETTINGS:
      return <GroupSettingsView />;
    case ADMIN_VIEWS.MEMBERS_CREATE:
      return <CreateMemberView onNavigate={onNavigate} />;
    case ADMIN_VIEWS.MEMBERS_EDIT:
      return <EditMemberView onNavigate={onNavigate} selectedMemberId={selectedMemberId} />;
    default:
      return <div>Select view</div>;
  }
}
