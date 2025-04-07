'use client';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export default function AuthNav() {
  const pathName = usePathname();

  return (
    <nav className="mb-10 flex items-center justify-end gap-5 pe-12">
      <div>English</div>
      <Link
        href="/signin"
        className={cn(
          'font-semibold underline-offset-[3px] hover:text-brand hover:underline',
          pathName === '/signin' && 'text-brand underline'
        )}
      >
        Sign in
      </Link>
      <Link
        href="/signup"
        className={cn(
          'font-semibold underline-offset-[3px] hover:text-brand hover:underline',
          pathName === '/signup' && 'text-brand underline'
        )}
      >
        Sign up
      </Link>
    </nav>
  );
}
