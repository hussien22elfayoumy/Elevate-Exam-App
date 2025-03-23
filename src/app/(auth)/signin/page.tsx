import { Metadata } from 'next';

import AuthProviders from '@/app/(auth)/_components/auth-providers';
import SigninForm from '@/app/(auth)/_components/signin-form';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default function Page() {
  return (
    <>
      <h2 className="mb-6 text-lg font-semibold">Sign in</h2>
      <SigninForm />
      <AuthProviders />
    </>
  );
}
