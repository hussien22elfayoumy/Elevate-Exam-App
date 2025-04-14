import { useTranslations } from 'next-intl';
import { FaApple, FaFacebookF, FaGoogle, FaXTwitter } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

const authProviders = [
  {
    provdider: 'google',
    providerIcon: FaGoogle,
  },
  {
    provdider: 'twitter',
    providerIcon: FaXTwitter,
  },
  {
    provdider: 'facebook',
    providerIcon: FaFacebookF,
  },
  {
    provdider: 'apple',
    providerIcon: FaApple,
  },
];

export default function AuthProviders() {
  // Translations
  const t = useTranslations();

  return (
    <>
      {/* Label */}
      <div className="mb-5 mt-5 flex items-center gap-2">
        <div className="h-[2px] flex-1 bg-my-grey-300"></div>
        <p className="text-my-grey-600">{t('continue-with')}</p>
        <div className="h-[2px] flex-1 bg-my-grey-300"></div>
      </div>
      {/* Auth Providers */}
      <div className="social flex items-center justify-center gap-5">
        {authProviders.map((provider) => (
          <Button
            key={provider.provdider}
            variant="outline"
            className="size-14 rounded-xl text-my-grey-700"
          >
            <provider.providerIcon className="!size-7" />
          </Button>
        ))}
      </div>
    </>
  );
}
