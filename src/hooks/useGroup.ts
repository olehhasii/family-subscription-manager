import { useQuery } from '@tanstack/react-query';
import { getGroupSettings } from '../api/groupApi';

export default function useGroup() {
  const {
    data: groupSettings,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['group'],
    queryFn: getGroupSettings,
  });

  return { groupSettings, isError, isLoading };
}
