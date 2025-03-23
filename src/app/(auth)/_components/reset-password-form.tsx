import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ResetPasswordForm() {
  return (
    <form>
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
      <div className="mb-6">
        <Input
          className="h-12 rounded-lg"
          type="password"
          id="confirmPassword"
          placeholder="Confirm password "
        />
      </div>

      <Button variant="brand" size="form">
        Confirm change
      </Button>
    </form>
  );
}
