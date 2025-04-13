'use client';
import { useTranslations } from 'next-intl';

import LanguagesDropDown from '@/components/common/languages-drop-down';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';

export default function AuthNav() {
  const pathName = usePathname();
  const t = useTranslations();

  return (
    <nav className="mb-10 flex items-center justify-end gap-5 pe-12">
      <LanguagesDropDown />
      <Link
        href="/signin"
        className={cn(
          'font-semibold underline-offset-[3px] hover:text-brand hover:underline',
          pathName === '/signin' && 'text-brand underline'
        )}
      >
        {t('sign-in')}
      </Link>
      <Link
        href="/signup"
        className={cn(
          'font-semibold underline-offset-[3px] hover:text-brand hover:underline',
          pathName === '/signup' && 'text-brand underline'
        )}
      >
        {t('sign-up')}
      </Link>
    </nav>
  );
}
