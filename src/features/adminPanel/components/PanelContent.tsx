import CreateMemberForm from '../../members/components/CreateMemberForm';
import EditMemberForm from '../../members/components/EditMemberForm';
import { PanelContent as StyledPanelContent } from '../styles/PanelContent.styles';

interface PanelContentProps {
  activeContent: 'add' | 'edit' | 'none';
}

export default function PanelContent({ activeContent }: PanelContentProps) {
  return (
    <StyledPanelContent>
      {activeContent === 'add' && <CreateMemberForm />}
      {activeContent === 'edit' && <EditMemberForm />}
      {activeContent === 'none' && <span>Select member to edit or create new one</span>}
    </StyledPanelContent>
  );
}
