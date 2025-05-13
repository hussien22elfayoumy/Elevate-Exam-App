import { Metadata } from 'next';

import AuthFormHeading from '../_components/auth-form-heading';
import ResetPasswordForm from './_components/reset-password-form';

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
