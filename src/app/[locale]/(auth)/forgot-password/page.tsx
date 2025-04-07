import { Metadata } from 'next';
import ForgotPasswordForm from '../_components/forgot-password-form';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

export default function Page() {
  return (
    <>
      <h2 className="mb-5 text-lg font-semibold">Forgot your Password?</h2>
      <ForgotPasswordForm />
    </>
  );
}
