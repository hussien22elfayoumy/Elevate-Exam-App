import { Metadata } from 'next';

import AuthFormHeading from '../_components/auth-form-heading';
import AuthProviders from '../_components/auth-providers';
import SignupForm from './_components/signup-form';

export const metadata: Metadata = {
  title: 'Sign up',
};

export default function Page() {
  return (
    <>
      <AuthFormHeading message="sign-up" />

      <SignupForm />

      <AuthProviders />
    </>
  );
}
