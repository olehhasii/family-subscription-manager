import { getAllMembers } from '../../../api/membersApi';
import AdminPanelButton from '../../../ui/AdminPanelButton';
import { PanelMembersList } from '../styles/AdminPanel.styles';
import Member from './Member';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../ui/Spinner';

interface MembersSideProps {
  onChangeContent: (content: 'add' | 'edit' | 'none') => void;
}

export default function MembersSide({ onChangeContent }: MembersSideProps) {
  const { data: members, isLoading } = useQuery({
    queryKey: ['members'],
    queryFn: getAllMembers,
  });

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
          <Member onClick={() => onChangeContent('edit')} memberData={member} key={member.id} />
        ))}
      </PanelMembersList>
    </>
  );
}
