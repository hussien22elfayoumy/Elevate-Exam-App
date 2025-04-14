import { Metadata } from 'next';

import ResetPasswordForm from '../_components/reset-password-form';
import AuthFormHeading from '../_components/auth-form-heading';

export const metadata: Metadata = {
  title: 'Reset Password',
};

export default function Page() {
  return (
    <>
      <AuthFormHeading message="reset-password" />
      <ResetPasswordForm />
    </>
  );
}
