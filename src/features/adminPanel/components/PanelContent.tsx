import CreateMemberForm from '../../members/components/CreateMemberForm';
import EditMemberForm from '../../members/components/EditMemberForm';
import { PanelContent as StyledPanelContent } from '../styles/PanelContent.styles';

interface PanelContentProps {
  activeContent: 'add' | 'edit' | 'none';
  onCancelMemberAction: () => void;
}

export default function PanelContent({ activeContent, onCancelMemberAction }: PanelContentProps) {
  return (
    <StyledPanelContent>
      {activeContent === 'add' && <CreateMemberForm onCancelMemberAction={onCancelMemberAction} />}
      {activeContent === 'edit' && <EditMemberForm onCancelMemberAction={onCancelMemberAction} />}
      {activeContent === 'none' && <span>Select member to edit or create new one</span>}
    </StyledPanelContent>
  );
}
