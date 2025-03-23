import { Metadata } from 'next';

import AuthProviders from '@/app/(auth)/_components/auth-providers';
import ForgotPasswordForm from '@/app/(auth)/_components/forgot-password-form';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

export default function Page() {
  return (
    <>
      <h2 className="mb-5 text-lg font-semibold">Forgot your Password?</h2>
      <ForgotPasswordForm />
      <AuthProviders />
    </>
  );
}
