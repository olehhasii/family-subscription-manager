import AdminPanelButton from '../../ui/AdminPanelButton';

import { PanelMembersList, StyledAdminPanel } from './styles/AdminPanel.styles';
import PanelSide from './components/PanelSide';
import Member from './components/Member';
import PanelContent from './components/PanelContent';

export default function AdminPanel() {
  return (
    <StyledAdminPanel>
      <PanelSide>
        <AdminPanelButton label="+ Add Member" />
        <PanelMembersList>
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </PanelMembersList>
      </PanelSide>
      <PanelContent></PanelContent>
    </StyledAdminPanel>
  );
}
