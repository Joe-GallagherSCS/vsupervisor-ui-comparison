'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Search } from 'lucide-react';
import { jobs } from '@/data/mock-data';

export default function JobsPage() {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(0);
  const rowsPerPage = 15;

  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(searchText.toLowerCase()) ||
    job.contact.toLowerCase().includes(searchText.toLowerCase())
  );

  const paginatedJobs = filteredJobs.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  const totalPages = Math.ceil(filteredJobs.length / rowsPerPage);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#046bd2]">Jobs</h1>
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search jobs..."
            className="pl-9"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setPage(0);
            }}
          />
        </div>
      </div>

      {/* Jobs Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">JOB</TableHead>
                <TableHead className="font-semibold">CONTACT</TableHead>
                <TableHead className="font-semibold text-right">SUPPLIES</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedJobs.map((job) => (
                <TableRow key={job.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Link href={`/shadcn/jobs/${job.id}`} className="text-[#046bd2] font-medium hover:underline">
                      {job.name}
                    </Link>
                  </TableCell>
                  <TableCell>{job.contact}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="link" size="sm" className="text-[#046bd2]">
                      Order
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t px-4 py-3">
            <span className="text-sm text-gray-600">
              Showing {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, filteredJobs.length)} of {filteredJobs.length}
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
