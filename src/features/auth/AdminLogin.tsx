import { motion } from 'motion/react';
import { Overlay } from '../../styles/GeneralComponents.Styles';
import CloseButton from '../../ui/CloseButton';
import Button from '../../ui/elements/Button';
import FormInput from '../../ui/form/FormInput';
import { AuthHeading, AuthWrapper, LoginForm } from './AdminLogin.styles';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/auth';
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router';

interface AdminLoginProps {
  onCloseForm: () => void;
}

export default function AdminLogin({ onCloseForm }: AdminLoginProps) {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => login(email, password),
    onSuccess: () => {
      onCloseForm();
      toast.success('Login is successful');
      navigate('/admin');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      toast.error('Missing Email or Password');
      return;
    }

    mutate({ email, password });
  };

  return (
    <>
      <Toaster richColors />
      <Overlay />
      <AuthWrapper
        as={motion.div}
        initial={{ width: '360px', height: '60px' }}
        animate={{ width: '360px', height: '275px' }}
        exit={{ height: '60px', width: '360px', transition: { delay: 0.3 } }}
      >
        <CloseButton onClose={onCloseForm} />
        <LoginForm
          onSubmit={handleLogin}
          as={motion.form}
          initial={{ filter: 'blur(30px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1, transition: { delay: 0.1, duration: 0.4 } }}
          exit={{ filter: 'blur(30px)', opacity: 0, transition: { duration: 0.2 } }}
        >
          <AuthHeading>Login to admin dashboard</AuthHeading>
          <FormInput label="Email" placeholder="Enter admin email" type="email" id="email" name="email" />
          <FormInput
            label="Password"
            placeholder="Enter admin password"
            type="password"
            id="password"
            name="password"
          />
          <Button variant="primary" type="submit" disabled={isPending}>
            Login
          </Button>
        </LoginForm>
      </AuthWrapper>
    </>
  );
}
