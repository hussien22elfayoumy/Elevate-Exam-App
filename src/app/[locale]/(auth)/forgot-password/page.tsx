import { Metadata } from 'next';

import ForgotPasswordForm from '../_components/forgot-password-form';
import AuthFormHeading from '../_components/auth-form-heading';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

export default function Page() {
  return (
    <>
      <AuthFormHeading message="forgot-password" />
      <ForgotPasswordForm />
    </>
  );
}
