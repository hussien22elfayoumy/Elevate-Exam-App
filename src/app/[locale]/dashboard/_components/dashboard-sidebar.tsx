import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar';
import DashboardSidebarLinks from './dashboard-sidebar-links';

// Menu items.

export default function DashboardSideBar() {
  return (
    <Sidebar className="w-[16rem] overflow-hidden rounded-e-3xl border-none">
      <SidebarContent className="bg-brand-light px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="pb-20 pt-10 text-5xl font-semibold text-brand">
            ELEVATE
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              <DashboardSidebarLinks />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
