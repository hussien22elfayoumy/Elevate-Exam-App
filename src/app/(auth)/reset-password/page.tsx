import { Metadata } from 'next';

import ResetPasswordForm from '@/app/(auth)/_components/reset-password-form';

export const metadata: Metadata = {
  title: 'Reset Password',
};

export default function Page() {
  return (
    <>
      <h2 className="mb-5 text-lg font-semibold">Reset your Password?</h2>
      <ResetPasswordForm />
    </>
  );
}
