import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPasswordForm() {
  return (
    <form>
      {/* Email */}
      <div className="mb-4">
        <Input
          className="h-12 rounded-lg"
          type="email"
          id="email"
          placeholder="Email "
        />
      </div>

      <p className="mb-5 text-center">
        Remeber your password?{' '}
        <Link href="/signin" className="font-medium text-brand">
          Login
        </Link>
      </p>
      <Button variant="brand" size="form">
        Reset Password
      </Button>
    </form>
  );
}
