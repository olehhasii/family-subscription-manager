import { useQuery } from '@tanstack/react-query';
import { getMembeById } from '../api/membersApi';

export default function useMember(id: number) {
  const { data: member, isError, isLoading } = useQuery({ queryKey: ['member', id], queryFn: () => getMembeById(id) });

  return { member, isError, isLoading };
}
