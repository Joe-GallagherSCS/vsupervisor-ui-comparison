'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AlertTriangle, Clock } from 'lucide-react';
import { jobAlerts, openTimesheets, currentUser, dashboardStats } from '@/data/mock-data';

export default function ShadcnDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Link href="#" className="text-[#046bd2] text-sm hover:underline">
              [Quality Inspections]
            </Link>
          </div>
          {currentUser.currentPunchIn && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>
                {currentUser.currentPunchIn.jobName} - Punch In: {currentUser.currentPunchIn.punchInTime}
              </span>
              <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                Punch Out
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Check-Ins Past Due Alert */}
      <Alert className="bg-amber-50 border-amber-200">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800">
          <span className="font-semibold">Check-Ins Past Due: </span>
          <Link href="/shadcn/jobs" className="text-[#046bd2] hover:underline">
            {dashboardStats.checkInsPastDue.jobs} Jobs
          </Link>
          {' & '}
          <Link href="/shadcn/employees" className="text-[#046bd2] hover:underline">
            {dashboardStats.checkInsPastDue.employees} Employees
          </Link>
        </AlertDescription>
      </Alert>

      {/* Job Alerts Section */}
      <Card>
        <CardHeader className="bg-red-600 text-white rounded-t-lg">
          <CardTitle className="text-lg">Job Alerts ({jobAlerts.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {jobAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-3 p-4 border-b last:border-b-0 bg-red-50"
            >
              <Badge variant="destructive" className="shrink-0">Job Alert</Badge>
              <p className="text-sm">
                <Link href={`/shadcn/jobs/${alert.jobId}`} className="text-[#046bd2] font-semibold hover:underline">
                  {alert.jobName}
                </Link>
                {' '}has yet to be serviced for {alert.serviceDate}. Job alert acknowledged by{' '}
                <span className="font-semibold">{alert.acknowledgedBy}</span>.
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Open Timesheets Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Open Timesheets ({openTimesheets.length})</CardTitle>
          <span className="text-sm text-gray-500">Updated {dashboardStats.lastUpdated}</span>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>DATE</TableHead>
                <TableHead>JOB</TableHead>
                <TableHead>EMPLOYEE</TableHead>
                <TableHead>IN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {openTimesheets.map((timesheet) => (
                <TableRow key={timesheet.id}>
                  <TableCell>
                    <Link href="#" className="text-[#046bd2] hover:underline">
                      {timesheet.date}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/shadcn/jobs/${timesheet.jobId}`} className="text-[#046bd2] hover:underline">
                      {timesheet.jobName}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/shadcn/employees/${timesheet.employeeId}`} className="text-[#046bd2] hover:underline">
                      {timesheet.employeeName}
                    </Link>
                  </TableCell>
                  <TableCell>{timesheet.inTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
