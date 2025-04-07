'use client';
import { LayoutDashboard } from 'lucide-react';

import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Link, usePathname } from '@/i18n/navigation';

const items = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Exams',
    href: '/dashboard/exams',
    icon: LayoutDashboard,
  },
  {
    title: 'Quiz History',
    href: '/dashboard/quiz-history',
    icon: LayoutDashboard,
  },
];

export default function DashboardSidebarLinks() {
  const pathName = usePathname();

  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link
              className={cn(
                'block px-3 py-5 text-my-grey-800 transition-all hover:!bg-brand hover:text-brand hover:text-white',
                pathName === item.href && 'bg-brand text-white'
              )}
              href={item.href}
            >
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}
