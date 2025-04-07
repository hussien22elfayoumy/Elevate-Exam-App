import { Metadata } from 'next';
import SigninForm from '../_components/signin-form';
import AuthProviders from '../_components/auth-providers';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default function Page() {
  return (
    <>
      <h2 className="mb-5 text-lg font-semibold">Sign in</h2>
      <SigninForm />
      <AuthProviders />
    </>
  );
}
