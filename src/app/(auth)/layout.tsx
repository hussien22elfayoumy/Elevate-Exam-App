import AuthWelcome from './_components/auth-welcome';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid gap-2 md:grid-cols-7">
      <div className="col-span-3 hidden h-screen rounded-e-[80px] bg-brand-light px-20 py-10 shadow-lg md:block">
        <AuthWelcome />
      </div>
      <div className="col-span-4 h-screen overflow-y-auto px-8 py-16">
        <div className="flex min-h-full items-center justify-center">
          <div className="mx-auto w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
