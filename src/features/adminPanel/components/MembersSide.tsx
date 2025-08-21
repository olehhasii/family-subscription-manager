import AdminPanelButton from '../../../ui/AdminPanelButton';
import { PanelMembersList } from '../styles/AdminPanel.styles';
import Member from './Member';

interface MembersSideProps {
  onChangeContent: (content: 'add' | 'edit' | 'none') => void;
}

export default function MembersSide({ onChangeContent }: MembersSideProps) {
  return (
    <>
      <AdminPanelButton label="+ Add Member" onClick={() => onChangeContent('add')} />
      <PanelMembersList>
        <Member onClick={() => onChangeContent('edit')} />
        <Member onClick={() => onChangeContent('edit')} />
        <Member onClick={() => onChangeContent('edit')} />
        <Member onClick={() => onChangeContent('edit')} />
        <Member onClick={() => onChangeContent('edit')} />
        <Member onClick={() => onChangeContent('edit')} />
      </PanelMembersList>
    </>
  );
}
