import CreateMemberForm from '../../members/components/CreateMemberForm';
import EditMemberForm from '../../members/components/EditMemberForm';
import { PanelContent as StyledPanelContent } from '../styles/PanelContent.styles';

interface PanelContentProps {
  activeContent: 'add' | 'edit' | 'none';
  onCancelMemberAction: () => void;
  activeMemberId?: string;
}

export default function PanelContent({ activeContent, onCancelMemberAction, activeMemberId = '' }: PanelContentProps) {
  return (
    <StyledPanelContent>
      {activeContent === 'add' && <CreateMemberForm onCancelMemberAction={onCancelMemberAction} />}
      {activeContent === 'edit' && (
        <EditMemberForm onCancelMemberAction={onCancelMemberAction} activeMemberId={activeMemberId} />
      )}
      {activeContent === 'none' && <span>Select member to edit or create new one</span>}
    </StyledPanelContent>
  );
}
