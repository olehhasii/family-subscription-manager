import { useQuery } from '@tanstack/react-query';
import { getAllMembers } from '../api/membersApi';

export default function useMembers() {
  const {
    data: members,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['members'],
    queryFn: getAllMembers,
  });

  return { members, isLoading, isError };
}
