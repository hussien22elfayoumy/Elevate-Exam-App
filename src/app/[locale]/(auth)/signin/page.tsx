import { Metadata } from 'next';
import SigninForm from '../_components/signin-form';
import AuthProviders from '../_components/auth-providers';
import AuthFormHeading from '../_components/auth-form-heading';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default function Page() {
  return (
    <>
      <AuthFormHeading message="sign-in" />
      <SigninForm />
      <AuthProviders />
    </>
  );
}
