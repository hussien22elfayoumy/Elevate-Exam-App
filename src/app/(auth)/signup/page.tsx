import { Metadata } from 'next';

import AuthProviders from '@/app/(auth)/_components/auth-providers';
import SignupForm from '@/app/(auth)/_components/signup-form';

export const metadata: Metadata = {
  title: 'Signup',
};

export default function Page() {
  return (
    <>
      <h2 className="mb-5 text-lg font-semibold">Sign up</h2>
      <SignupForm />
      <AuthProviders />
    </>
  );
}
