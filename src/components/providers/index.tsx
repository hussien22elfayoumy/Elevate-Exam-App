import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from 'next-intl';

import { Toaster } from '@/components/ui/toaster';
import NextAuthProvider from './components/next-auth.provider';

type ProivderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProivderProps) {
  // translaions
  const messages = useMessages();
  const locale = useLocale();
  const now = useNow();
  const timeZone = useTimeZone();

  return (
    <NextAuthProvider>
      <NextIntlClientProvider
        messages={messages}
        locale={locale}
        now={now}
        timeZone={timeZone}
      >
        {children}
        <Toaster />
      </NextIntlClientProvider>
    </NextAuthProvider>
  );
}
