import { Metadata } from 'next';

import VerifyCodeForm from '../_components/verify-code-form';
import AuthFormHeading from '../_components/auth-form-heading';

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
