import { Metadata } from 'next';
import VerifyCodeForm from '../_components/verify-code-form';

export const metadata: Metadata = {
  title: 'Verify Code',
};

export default function Page() {
  return (
    <>
      <h2 className="mb-5 text-lg font-semibold">Verify code</h2>
      <VerifyCodeForm />
    </>
  );
}
