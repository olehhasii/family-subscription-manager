import { StyledActionButton } from './ActionButton.styles';

interface ActionButonnProps {
  icon: React.ReactNode;
  bgColor?: string;
  onClick?: () => void;
}

export default function ActionButton({ icon, bgColor = '#ffffff', onClick = () => {} }: ActionButonnProps) {
  return (
    <StyledActionButton $bgColor={bgColor} onClick={onClick}>
      {icon}
    </StyledActionButton>
  );
}
