import { useMutation } from '@tanstack/react-query';
import { logout } from '../api/auth';
import { toast } from 'sonner';

export function useLogout() {
  return useMutation({
    mutationFn: logout,
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
