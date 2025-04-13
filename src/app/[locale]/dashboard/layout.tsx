import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import DashboardSideBar from './_components/dashboard-sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider dir="ltr" className="bg-brand-light p-4">
      <DashboardSideBar />
      <div className="relative w-full">
        <SidebarTrigger className="fixed top-3 bg-brand-light hover:bg-brand-light/80" />
        <main className="min-h-screen rounded-2xl bg-my-grey-50 px-8 pt-12">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
