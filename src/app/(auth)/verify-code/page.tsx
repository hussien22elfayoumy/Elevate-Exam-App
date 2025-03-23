import { Metadata } from 'next';

import VerifyCodeform from '@/app/(auth)/_components/verify-code-form';

export const metadata: Metadata = {
  title: 'Verify Code',
};

export default function Page() {
  return (
    <>
      <h2 className="mb-5 text-lg font-semibold">Verify code</h2>
      <VerifyCodeform />
    </>
  );
}
