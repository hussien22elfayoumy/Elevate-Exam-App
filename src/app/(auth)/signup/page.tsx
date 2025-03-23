import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup',
};
export default function Page() {
  return (
    <div className="w-full max-w-md">
      <h2 className="mb-6 text-lg font-semibold">Sign up</h2>
      <form>
        <div className="mb-5 grid w-full items-center gap-1.5">
          <Input
            className="h-12 rounded-lg border-my-grey-200 bg-my-grey-100"
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </form>
    </div>
  );
}
