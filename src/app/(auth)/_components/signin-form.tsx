import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SigninForm() {
  return (
    <form>
      {/* Email */}
      <div className="mb-3">
        <Input
          className="h-12 rounded-lg"
          type="email"
          id="email"
          placeholder="Email "
        />
      </div>

      <Link
        href="/forgot-password"
        className="mb-2 me-2 block text-end text-sm text-brand"
      >
        Forgot your password?
      </Link>

      {/* Password */}
      <div className="mb-5">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>

      <p className="mb-5 text-center">
        Don't have an account?{' '}
        <Link href="/signup" className="font-medium text-brand">
          Signup
        </Link>
      </p>
      <Button variant="brand" size="form">
        Create Account
      </Button>
    </form>
  );
}
