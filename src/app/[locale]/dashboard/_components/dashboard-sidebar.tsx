import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar';
import DashboardSidebarLinks from './dashboard-sidebar-links';
import LogoutBtn from './logout-btn';

export default function DashboardSideBar() {
  return (
    <Sidebar className="w-[16rem] overflow-hidden rounded-e-3xl border-none">
      <SidebarContent className="bg-brand-light px-2">
        <SidebarGroup>
          {/* Sidebar Header */}
          <SidebarGroupLabel className="pb-20 pt-10 text-5xl font-semibold text-brand">
            ELEVATE
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {/* Sidebar links */}
            <SidebarMenu className="gap-2">
              <DashboardSidebarLinks />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Logout button */}
      <SidebarFooter className="bg-brand-light p-4">
        <LogoutBtn />
      </SidebarFooter>
    </Sidebar>
  );
}
