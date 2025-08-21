import { PanelNav, PanelNavButton, PanelSideContent, PanelSide as StyledPanelSide } from '../styles/PanelSide.styles';

interface PanelSideProps {
  children: React.ReactNode;
  onSetActiveTab: (tab: 'members' | 'board') => void;
  activeTab: 'members' | 'board';
}

export default function PanelSide({ children, onSetActiveTab, activeTab }: PanelSideProps) {
  return (
    <StyledPanelSide>
      <PanelNav>
        <PanelNavButton $active={activeTab === 'members'} onClick={() => onSetActiveTab('members')}>
          Members
        </PanelNavButton>
        <PanelNavButton $active={activeTab === 'board'} onClick={() => onSetActiveTab('board')}>
          Board Settings
        </PanelNavButton>
      </PanelNav>
      <PanelSideContent>{children}</PanelSideContent>
    </StyledPanelSide>
  );
}
