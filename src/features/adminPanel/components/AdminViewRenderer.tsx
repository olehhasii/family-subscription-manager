import { ADMIN_VIEWS, type AdminPanelView } from '../../../types/adminTypes';

interface AdminViewRendererProps {
  view: AdminPanelView;
}

export default function AdminViewRenderer({ view }: AdminViewRendererProps) {
  switch (view) {
    case ADMIN_VIEWS.MEMBERS_LIST:
      return <div>Members...</div>;
    case ADMIN_VIEWS.BOARD_SETTINGS:
      return <div>Board Settings...</div>;
    case ADMIN_VIEWS.MEMBER_CREATE:
      return <div>Create Member</div>;
    case ADMIN_VIEWS.MEMBERS_EDIT:
      return <div>Edit member</div>;
    default:
      return <div>Select view</div>;
  }
}
