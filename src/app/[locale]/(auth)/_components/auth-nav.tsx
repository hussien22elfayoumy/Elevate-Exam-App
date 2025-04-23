'use client';
import { useTranslations } from 'next-intl';

import LanguagesDropDown from '@/components/common/languages-drop-down';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import ThemeToggle from '@/components/common/theme-toggle';

export default function AuthNav() {
  // Path name
  const pathName = usePathname();

  // Translations
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
      <ThemeToggle />
    </nav>
  );
}
