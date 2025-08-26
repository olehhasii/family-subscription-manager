import AdminPanelButton from '../../../ui/AdminPanelButton';
import { PanelMembersList } from '../styles/AdminPanel.styles';
import Member from './Member';
import Spinner from '../../../ui/Spinner';
import useMembers from '../../../hooks/useMembers';

interface MembersSideProps {
  onChangeContent: (content: 'add' | 'edit' | 'none', id?: string) => void;
}

export default function MembersSide({ onChangeContent }: MembersSideProps) {
  const { members, isLoading, isError } = useMembers();

  if (isError)
    return (
      <div>
        <p>Error Fetching Members</p>
      </div>
    );

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50%' }}>
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <AdminPanelButton label="+ Add Member" onClick={() => onChangeContent('add')} />
      <PanelMembersList>
        {members?.map((member) => (
          <Member onClick={() => onChangeContent('edit', member.id)} memberData={member} key={member.id} />
        ))}
      </PanelMembersList>
    </>
  );
}
