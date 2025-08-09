import { StyledActionButton } from './ActionButton.styles';

interface ActionButonnProps {
  icon: React.ReactNode;
  bgColor?: string;
}

export default function ActionButton({ icon, bgColor = '#ffffff' }: ActionButonnProps) {
  return <StyledActionButton $bgColor={bgColor}>{icon}</StyledActionButton>;
}
