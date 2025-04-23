'use client';
import { signOut } from 'next-auth/react';
import { TbLogout2 } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import { useRouter } from '@/i18n/navigation';

export default function LogoutBtn() {
  // Navigation
  const router = useRouter();

  return (
    <Button
      variant="destructive"
      className="flex h-10 items-center justify-start gap-2 font-medium"
      onClick={async () => {
        await signOut({ redirect: false });
        router.push('/signin');
      }}
    >
      <TbLogout2 />
      Logout
    </Button>
  );
}
