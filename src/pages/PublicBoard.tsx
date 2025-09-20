import Board from '../features/board/Board';
import Island from '../features/island/Island';
import LoadingSpinner from '../ui/elements/LoadingSpinner';
import useMembers from '../hooks/useMembers';
import type { Member } from '../types/membersTypes';

export default function PublicBoard() {
  const { members, isError: isMembersError, isLoading } = useMembers(true, 500);

  if (isMembersError) {
    return <p>Error Loading Members</p>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Board members={members as Array<Member>} />
      <Island />
    </>
  );
}
