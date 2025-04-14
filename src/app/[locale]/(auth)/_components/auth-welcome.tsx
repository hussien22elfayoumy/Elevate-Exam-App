'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { usePathname } from '@/i18n/navigation';

const svgs = {
  '/signin': '/assets/login.svg',
  '/signup': '/assets/login.svg',
  '/forgot-password': '/assets/forgot-password.svg',
  '/reset-password': '/assets/forgot-password.svg',
  '/verify-code': '/assets/verify-code.svg',
};

type PathName =
  | '/signin'
  | '/signup'
  | '/forgot-password'
  | '/reset-password'
  | '/verify-code';

export default function AuthWelcome() {
  // pathName
  const pathName = usePathname();

  //Translations
  const t = useTranslations();

  return (
    <div className="flex h-full flex-col justify-between gap-10">
      {/* Welcome Header */}
      <header>
        {pathName === '/signin' || pathName === '/signup' ? (
          <>
            <h1 className="text-3xl font-bold tracking-wider md:text-4xl lg:text-5xl">
              {t('welcome')} <br />
              <span className="mt-4 block text-brand-dark">Elevate</span>
            </h1>
            <p className="mt-5 text-lg font-medium">{t('elevate-slogan')}</p>
          </>
        ) : (
          <h1 className="mt-10 text-3xl font-bold leading-[130%] tracking-wider text-brand-dark md:text-4xl lg:text-5xl">
            Elevate
          </h1>
        )}
      </header>
      {/* Welcome Image */}
      <div className="relative h-2/3 w-full">
        <Image
          src={svgs[pathName as PathName]}
          fill
          className="object-fill"
          alt="Auth image"
        />
      </div>
    </div>
  );
}
