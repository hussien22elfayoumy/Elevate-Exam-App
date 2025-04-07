import { FaApple, FaFacebookF, FaGoogle, FaXTwitter } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

export default function AuthProviders() {
  return (
    <>
      <div className="mb-5 mt-5 flex items-center gap-2">
        <div className="h-[2px] flex-1 bg-my-grey-300"></div>
        <p className="text-my-grey-600">Or continue with</p>
        <div className="h-[2px] flex-1 bg-my-grey-300"></div>
      </div>

      <div className="social flex items-center justify-center gap-5">
        <Button
          variant="outline"
          className="size-14 rounded-xl text-my-grey-700"
        >
          <FaGoogle className="!size-7" />
        </Button>
        <Button
          variant="outline"
          className="size-14 rounded-xl text-my-grey-700"
        >
          <FaXTwitter className="!size-7" />
        </Button>
        <Button
          variant="outline"
          className="size-14 rounded-xl text-my-grey-700"
        >
          <FaFacebookF className="!size-7" />
        </Button>
        <Button
          variant="outline"
          className="size-14 rounded-xl text-my-grey-700"
        >
          <FaApple className="!size-7" />
        </Button>
      </div>
    </>
  );
}
