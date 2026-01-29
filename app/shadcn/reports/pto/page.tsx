'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowLeft } from 'lucide-react';
import { ptoRequests } from '@/data/mock-data';

export default function PTOReportPage() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const paginatedRequests = ptoRequests.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  const totalPages = Math.ceil(ptoRequests.length / rowsPerPage);

  const approved = ptoRequests.filter((r) => r.status === 'Approved').length;
  const denied = ptoRequests.filter((r) => r.status === 'Denied').length;
  const pending = ptoRequests.filter((r) => r.status === 'Submitted').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-[#046bd2]">PTO Requests</h1>
          <Link href="/shadcn/reports" className="text-[#046bd2] flex items-center gap-1 text-sm hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back To Reports
          </Link>
        </div>
        <Button className="bg-[#046bd2] hover:bg-[#045cb4]">Export Report</Button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-4xl font-bold text-green-500">{approved}</p>
            <p className="text-sm text-gray-600 mt-1">Approved</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-4xl font-bold text-red-500">{denied}</p>
            <p className="text-sm text-gray-600 mt-1">Denied</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-4xl font-bold text-amber-500">{pending}</p>
            <p className="text-sm text-gray-600 mt-1">Pending</p>
          </CardContent>
        </Card>
      </div>

      {/* PTO Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">EMPLOYEE</TableHead>
                <TableHead className="font-semibold">DATE</TableHead>
                <TableHead className="font-semibold text-center">HOURS</TableHead>
                <TableHead className="font-semibold">SUPERVISOR</TableHead>
                <TableHead className="font-semibold text-center">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedRequests.map((request) => (
                <TableRow key={request.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Link href={`/shadcn/employees/${request.employeeId}`} className="text-[#046bd2] font-medium hover:underline">
                      {request.employeeName}
                    </Link>
                  </TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell className="text-center font-semibold">{request.hours}</TableCell>
                  <TableCell>{request.supervisor}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={request.status === 'Approved' ? 'default' : request.status === 'Denied' ? 'destructive' : 'secondary'}
                      className={request.status === 'Approved' ? 'bg-green-500' : request.status === 'Submitted' ? 'bg-amber-500' : ''}
                    >
                      {request.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t px-4 py-3">
            <span className="text-sm text-gray-600">
              Showing {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, ptoRequests.length)} of {ptoRequests.length}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page >= totalPages - 1}
                onClick={() => setPage(page + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
