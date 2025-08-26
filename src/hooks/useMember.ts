import { useQuery } from '@tanstack/react-query';
import { getMemberById } from '../api/membersApi';
import type { Member } from '../types/types';

export function useMember(memberId: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`${memberId}-member`],
    queryFn: () => getMemberById(memberId),
  });

  let member;

  if (data && data.length > 0) {
    member = data[0];
  }

  return { member, isError, isLoading };
}
