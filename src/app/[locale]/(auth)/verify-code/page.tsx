import { Metadata } from 'next';

import AuthFormHeading from '../_components/auth-form-heading';
import VerifyCodeForm from './_components/verify-code-form';

export const metadata: Metadata = {
  title: 'Verify Code',
};

export default function Page() {
  return (
    <>
      <AuthFormHeading message="verify-code" />

      <VerifyCodeForm />
    </>
  );
}
