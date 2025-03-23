import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function VerifyCodeForm() {
  return (
    <form>
      {/* veriication code */}
      <div className="mb-4">
        <Input
          className="h-12 rounded-lg"
          type="text"
          id="verifyCode"
          placeholder="Verify code"
        />
      </div>

      <p className="mb-5 me-2 text-end">
        Didn't receive a code?{' '}
        <Link href="/forgot-password" className="font-medium text-brand">
          Resend.
        </Link>
      </p>

      <Button variant="brand" size="form">
        Verify code
      </Button>
    </form>
  );
}
