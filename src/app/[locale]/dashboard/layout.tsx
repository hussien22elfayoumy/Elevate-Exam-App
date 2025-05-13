import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import DashboardSideBar from './_components/dashboard-sidebar';
import ThemeToggle from '@/components/common/theme-toggle';

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider dir="ltr" className="flex bg-brand-light p-4">
      {/* Sidebar */}
      <DashboardSideBar />

      {/* Content */}
      <div className="relative w-full">
        {/* Trigger */}
        <SidebarTrigger className="fixed top-3 bg-brand-light hover:bg-brand-light/80" />

        {/* Theme toggler */}
        <div className="fixed right-3 top-3">
          <ThemeToggle />
        </div>

        {/* Main content */}
        <main className="min-h-screen rounded-2xl bg-my-grey-50 px-8 pt-12">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
