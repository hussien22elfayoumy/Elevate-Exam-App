import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

import Providers from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import { poppins } from '@/fonts/google-fonts';

export const metadata: Metadata = {
  title: {
    default: 'Welcome | ELEVATE',
    template: '%s | ELEVATE',
  },
  description: 'Elevate Exam App',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  // Ensure that the incoming `locale` is valid

  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body
        className={`${poppins.className} bg-my-grey-50 text-my-grey-800 antialiased`}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
