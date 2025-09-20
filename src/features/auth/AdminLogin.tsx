import { motion } from 'motion/react';
import { Overlay } from '../../styles/GeneralComponents.Styles';
import CloseButton from '../../ui/CloseButton';
import Button from '../../ui/elements/Button';
import FormInput from '../../ui/form/FormInput';
import { AuthHeading, AuthWrapper, LoginForm } from './AdminLogin.styles';

interface AdminLoginProps {
  onCloseForm: () => void;
}

export default function AdminLogin({ onCloseForm }: AdminLoginProps) {
  return (
    <>
      <Overlay />
      <AuthWrapper
        as={motion.div}
        initial={{ width: '360px', height: '60px' }}
        animate={{ width: '360px', height: '275px' }}
        exit={{ height: '60px', width: '360px', transition: { delay: 0.3 } }}
      >
        <CloseButton onClose={onCloseForm} />
        <LoginForm
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
          <Button variant="primary">Login</Button>
        </LoginForm>
      </AuthWrapper>
    </>
  );
}
