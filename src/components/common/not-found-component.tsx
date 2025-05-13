import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundComponent() {
  // Translation
  const t = useTranslations();

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5 px-10">
      {/* Title */}
      <h1 className="text-xl font-medium">{t('not-found-title')}</h1>

      {/* Image */}
      <div className="relative h-1/2 w-full">
        <Image
          src="/assets/not-found.svg"
          alt="Not found Image"
          fill
          className="object-fill"
          priority
        />
      </div>

      {/* Homepage button */}
      <Link
        href="/"
        className="flex items-center gap-1 font-medium text-brand underline-offset-4 hover:underline"
      >
        &larr; {t('return-home')}
      </Link>
    </main>
  );
}
