import AuthWelcome from './_components/auth-welcome';
import AuthNav from './_components/auth-nav';
import AuthProvider from './_providers/auth.provider';

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="grid gap-2 md:grid-cols-7">
      {/* Welcome Screen */}
      <div className="col-span-3 hidden h-screen rounded-e-[80px] bg-brand-light px-20 py-10 shadow-lg md:block">
        <AuthWelcome />
      </div>

      {/* Pages */}
      <div className="col-span-4 h-screen overflow-y-auto px-8 pb-16 pt-8">
        {/* Navbar */}
        <AuthNav />

        {/* Auth Pages */}
        <AuthProvider>
          <div className="flex min-h-full items-center justify-center">
            <div className="mx-auto w-full max-w-md">{children}</div>
          </div>
        </AuthProvider>
      </div>
    </div>
  );
}
