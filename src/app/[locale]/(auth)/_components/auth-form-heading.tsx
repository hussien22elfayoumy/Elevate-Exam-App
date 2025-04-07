import { useTranslations } from 'next-intl';

export default function AuthFormHeading({ message }: { message: string }) {
  const t = useTranslations();
  return <h2 className="mb-5 text-lg font-semibold">{t(message)}</h2>;
}
