import { useQuery } from '@tanstack/react-query';
import { getAllMembers } from '../api/membersApi';

export default function useMembers(isDelayed?: boolean, delay?: number) {
  const {
    data: members,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      if (isDelayed && delay && delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
      return getAllMembers();
    },
  });

  return { members, isLoading, isError };
}
