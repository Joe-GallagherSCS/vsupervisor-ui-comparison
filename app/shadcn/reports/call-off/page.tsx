'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
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
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { callOffs } from '@/data/mock-data';

const getReasonColor = (reason: string) => {
  switch (reason) {
    case 'Sick': return 'bg-red-500';
    case 'Personal': return 'bg-blue-500';
    case 'Family Emergency': return 'bg-amber-500';
    case 'No Show': return 'bg-gray-500';
    default: return 'bg-gray-500';
  }
};

export default function CallOffReportPage() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const paginatedCallOffs = callOffs.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  const totalPages = Math.ceil(callOffs.length / rowsPerPage);

  const sickCount = callOffs.filter((c) => c.reason === 'Sick').length;
  const noShowCount = callOffs.filter((c) => c.reason === 'No Show').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-[#046bd2]">Call-Off Report</h1>
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
            <p className="text-4xl font-bold">{callOffs.length}</p>
            <p className="text-sm text-gray-600 mt-1">Total Call-Offs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-4xl font-bold text-red-500">{sickCount}</p>
            <p className="text-sm text-gray-600 mt-1">Sick</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-4xl font-bold text-amber-500">{noShowCount}</p>
            <p className="text-sm text-gray-600 mt-1">No Shows</p>
          </CardContent>
        </Card>
      </div>

      {/* Call-Off Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">DATE/TIME</TableHead>
                <TableHead className="font-semibold">EMPLOYEE</TableHead>
                <TableHead className="font-semibold">JOB</TableHead>
                <TableHead className="font-semibold text-center">REASON</TableHead>
                <TableHead className="font-semibold text-center">RECORDING</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedCallOffs.map((callOff) => (
                <TableRow key={callOff.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{callOff.dateTime}</TableCell>
                  <TableCell>
                    <Link href={`/shadcn/employees/${callOff.employeeId}`} className="text-[#046bd2] font-medium hover:underline">
                      {callOff.employeeName}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/shadcn/jobs/${callOff.jobId}`} className="text-[#046bd2] hover:underline">
                      {callOff.jobName}
                    </Link>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={getReasonColor(callOff.reason)}>{callOff.reason}</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {callOff.hasRecording ? (
                      <Button variant="link" size="sm" className="text-[#046bd2]">
                        <PlayCircle className="h-4 w-4 mr-1" /> Play
                      </Button>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t px-4 py-3">
            <span className="text-sm text-gray-600">
              Showing {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, callOffs.length)} of {callOffs.length}
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
