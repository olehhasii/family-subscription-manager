import { PanelNav, PanelNavButton, PanelSideContent, PanelSide as StyledPanelSide } from '../styles/PanelSide.styles';

export default function PanelSide({ children }: { children: React.ReactNode }) {
  return (
    <StyledPanelSide>
      <PanelNav>
        <PanelNavButton>Members</PanelNavButton>
        <PanelNavButton>Board Settings</PanelNavButton>
      </PanelNav>
      <PanelSideContent>{children}</PanelSideContent>
    </StyledPanelSide>
  );
}
