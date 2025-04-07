import { Metadata } from 'next';
import SignupForm from '../_components/signup-form';
import AuthProviders from '../_components/auth-providers';

export const metadata: Metadata = {
  title: 'Sign up',
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
