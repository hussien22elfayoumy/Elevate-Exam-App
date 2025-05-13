'use client';

import { signOut } from 'next-auth/react';
import { TbLogout2 } from 'react-icons/tb';

import { Button } from '@/components/ui/button';

export default function LogoutBtn() {
  return (
    <Button
      variant="destructive"
      className="flex h-10 items-center justify-start gap-2 font-medium"
      onClick={async () => await signOut()}
    >
      <TbLogout2 />
      Logout
    </Button>
  );
}
