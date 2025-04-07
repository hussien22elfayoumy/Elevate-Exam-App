'use client';
import { GrLanguage } from 'react-icons/gr';

import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';

const mappdLocales = {
  en: 'English',
  ar: 'العربية',
};

export default function LanguagesDropDown() {
  const { locales } = routing;
  const pathName = usePathname();
  const locale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <GrLanguage className="mb-1 size-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-my-grey-50">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            className={cn(
              'text-base font-medium hover:!bg-brand-light',
              loc === locale && 'bg-brand-light'
            )}
          >
            <Link className="block h-full w-full" locale={loc} href={pathName}>
              {mappdLocales[loc]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
