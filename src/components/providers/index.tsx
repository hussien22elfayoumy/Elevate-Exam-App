import { Toaster } from '@/components/ui/toaster';
import NextAuthProvider from './components/next-auth.provider';

type ProivderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProivderProps) {
  return (
    <NextAuthProvider>
      <>
        {children}
        <Toaster />
      </>
    </NextAuthProvider>
  );
}
