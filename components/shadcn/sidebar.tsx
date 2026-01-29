'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  FileText,
  ClipboardList,
  BarChart3,
  LogOut,
  User,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { currentUser } from '@/data/mock-data';

const navItems = [
  { href: '/shadcn', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/shadcn/jobs', icon: Briefcase, label: 'Jobs', badge: 2 },
  { href: '/shadcn/employees', icon: Users, label: 'Employees', badge: 3 },
  { href: '/shadcn/procedures', icon: FileText, label: 'Procedures' },
  { href: '/shadcn/forms', icon: ClipboardList, label: 'Forms' },
  { href: '/shadcn/reports', icon: BarChart3, label: 'Reports' },
];

export function ShadcnSidebar({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full bg-slate-900 text-white transition-all duration-200',
          collapsed ? 'w-16' : 'w-64'
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-slate-700 px-4">
          {!collapsed && (
            <span className="text-lg font-bold">vSupervisor</span>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/shadcn' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-[#046bd2] text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="h-5 px-1.5 text-xs bg-slate-700">
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={cn(
          'flex-1 transition-all duration-200',
          collapsed ? 'ml-16' : 'ml-64'
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-6">
          <span className="font-semibold text-[#046bd2]">
            vSupervisor Commercial Services
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <span className="text-sm">{currentUser.name}</span>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-[#046bd2] text-white">
                    {currentUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="text-red-600">
                <Link href="/login">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Content */}
        <main className="p-6 bg-gray-50 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
