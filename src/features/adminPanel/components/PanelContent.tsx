import { PanelContent as StyledPanelContent } from '../styles/PanelContent.styles';

interface PanelContentProps {
  children: React.ReactNode;
}

export default function PanelContent({ children }: PanelContentProps) {
  return <StyledPanelContent>{children}</StyledPanelContent>;
}
