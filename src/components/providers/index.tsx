import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from 'next-intl';

import NextAuthProvider from './components/next-auth.provider';
import ReactQueryProvider from './components/react-query.provider';
import { ThemeProvider } from './components/theme.provider';

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
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextAuthProvider>
        <NextIntlClientProvider
          messages={messages}
          locale={locale}
          now={now}
          timeZone={timeZone}
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextIntlClientProvider>
      </NextAuthProvider>
    </ThemeProvider>
  );
}
