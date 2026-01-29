'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Briefcase,
  Users,
  CalendarX,
  CalendarDays,
  PhoneOff,
  BarChart3,
} from 'lucide-react';

const reportCategories = [
  {
    title: 'Jobs Report',
    description: 'View job performance metrics, budget analysis, and service history.',
    icon: Briefcase,
    href: '/shadcn/jobs',
    color: '#046bd2',
  },
  {
    title: 'Employees Report',
    description: 'Employee performance, attendance tracking, and work history.',
    icon: Users,
    href: '/shadcn/employees',
    color: '#059669',
  },
  {
    title: 'Deviation Report',
    description: 'Track schedule deviations, missed services, and exceptions.',
    icon: CalendarX,
    href: '#',
    color: '#dc2626',
  },
  {
    title: 'PTO Requests',
    description: 'View and manage paid time off requests and balances.',
    icon: CalendarDays,
    href: '/shadcn/reports/pto',
    color: '#7c3aed',
  },
  {
    title: 'Call-Off Report',
    description: 'Track employee call-offs, absences, and related patterns.',
    icon: PhoneOff,
    href: '/shadcn/reports/call-off',
    color: '#ea580c',
  },
  {
    title: 'Custom Reports',
    description: 'Build and export custom reports with advanced filters.',
    icon: BarChart3,
    href: '#',
    color: '#0891b2',
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#046bd2]">Reports</h1>
        <p className="text-gray-600">Select a report category to view detailed analytics and data.</p>
      </div>

      {/* Report Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCategories.map((report) => (
          <Link key={report.title} href={report.href}>
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${report.color}15` }}
                >
                  <report.icon className="h-7 w-7" style={{ color: report.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
                <p className="text-sm text-gray-600">{report.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
