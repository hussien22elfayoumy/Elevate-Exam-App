import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import DashboardSideBar from './_components/dashboard-sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <DashboardSideBar />
      <SidebarTrigger className="!size-6" />
      <main className="px-10 pt-20">{children}</main>
    </SidebarProvider>
  );
}
