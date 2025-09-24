import useMembers from '../../../../hooks/useMembers';
import { useTranslations } from '../../../../hooks/useTranslation';
import type { AdminPanelView } from '../../../../types/adminTypes';
import LoadingSpinner from '../../../../ui/elements/LoadingSpinner';
import { NoMembers } from '../../styles/members/Member.styles';

import { MembersListContainer } from '../../styles/members/MembersList.styles';
import Member from './Member';

interface MembersListProps {
  onNavigate: (view: AdminPanelView, id?: number) => void;
}

export default function MembersList({ onNavigate }: MembersListProps) {
  const { t } = useTranslations();
  const { members, isError, isLoading } = useMembers();

  if (isError) {
    return <MembersListContainer>{t.errorLoadingData}</MembersListContainer>;
  }

  if (isLoading) {
    return (
      <MembersListContainer>
        <LoadingSpinner />
      </MembersListContainer>
    );
  }

  if (!members || members.length === 0) {
    return <NoMembers>{t.noMembers}</NoMembers>;
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
