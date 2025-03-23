import AuthWelcome from './_components/auth-welcome';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid h-screen gap-2 md:grid-cols-7">
      <div className="col-span-3 hidden rounded-e-[80px] bg-brand-light px-20 py-10 shadow-lg md:block">
        <AuthWelcome />
      </div>
      <div className="col-span-4 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
