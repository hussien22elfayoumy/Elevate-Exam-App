import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import DashboardSideBar from './_components/dashboard-sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <DashboardSideBar />
      <div className="relative w-full">
        <SidebarTrigger className="fixed top-2 ms-1" />
        <main className="h-[1000px] px-5 pt-12">{children}</main>
      </div>
    </SidebarProvider>
  );
}
