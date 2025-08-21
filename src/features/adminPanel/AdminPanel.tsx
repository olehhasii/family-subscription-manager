import { StyledAdminPanel } from './styles/AdminPanel.styles';
import PanelSide from './components/PanelSide';

import PanelContent from './components/PanelContent';

import { useState } from 'react';

import BoardSide from './components/BoardSide';
import MembersSide from './components/MembersSide';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'members' | 'board'>('members');
  const [activeMembersContent, setActiveMembersContent] = useState<'add' | 'edit' | 'none'>('none');

  const handleChangeActiveTab = (tab: 'members' | 'board') => {
    setActiveTab(tab);
  };

  const handleChangeMembersContent = (content: 'add' | 'edit' | 'none') => {
    setActiveMembersContent(content);
  };

  return (
    <StyledAdminPanel>
      <PanelSide onSetActiveTab={handleChangeActiveTab} activeTab={activeTab}>
        {activeTab === 'board' && <BoardSide />}
        {activeTab === 'members' && <MembersSide onChangeContent={handleChangeMembersContent} />}
      </PanelSide>

      {activeTab === 'members' && <PanelContent activeContent={activeMembersContent} />}
    </StyledAdminPanel>
  );
}
