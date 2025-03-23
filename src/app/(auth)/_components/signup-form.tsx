import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignupForm() {
  return (
    <form>
      {/* First name */}
      <div className="mb-5">
        <Input
          className="h-12 rounded-lg"
          type="text"
          id="firstName"
          placeholder="First Name"
        />
      </div>

      {/* Last name */}
      <div className="mb-5">
        <Input
          className="h-12 rounded-lg"
          type="text"
          id="lastName"
          placeholder="Last Name"
        />
      </div>

      {/* Email */}
      <div className="mb-5">
        <Input
          className="h-12 rounded-lg"
          type="email"
          id="email"
          placeholder="Email "
        />
      </div>

      {/* Password */}
      <div className="mb-5">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-3">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="confirmPassword"
          placeholder="Confirm password "
        />
      </div>
      <p className="mb-5 text-center">
        Alrady have an account?{' '}
        <Link href="/signin" className="font-medium text-brand">
          Login
        </Link>
      </p>
      <Button variant="brand" size="form">
        Create Account
      </Button>
    </form>
  );
}
