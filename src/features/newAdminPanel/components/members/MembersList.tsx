import useMembers from '../../../../hooks/useMembers';
import type { AdminPanelView } from '../../../../types/adminTypes';
import LoadingSpinner from '../../../../ui/elements/LoadingSpinner';
import { NoMembers } from '../../styles/members/Member.styles';

import { MembersListContainer } from '../../styles/members/MembersList.styles';
import Member from './Member';

interface MembersListProps {
  onNavigate: (view: AdminPanelView, id?: number) => void;
}

export default function MembersList({ onNavigate }: MembersListProps) {
  const { members, isError, isLoading } = useMembers();

  if (isError) {
    return <MembersListContainer>Error loading members</MembersListContainer>;
  }

  if (isLoading) {
    return (
      <MembersListContainer>
        <LoadingSpinner />
      </MembersListContainer>
    );
  }

  if (!members || members.length === 0) {
    return <NoMembers>No members found</NoMembers>;
  }

  return (
    <MembersListContainer>
      {members
        .sort((a, b) => a.id - b.id)
        ?.map((member) => (
          <Member memberData={member} onEditMember={onNavigate} key={member.id} />
        ))}
    </MembersListContainer>
  );
}
