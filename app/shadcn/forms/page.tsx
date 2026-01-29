'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
import { Search, FileText } from 'lucide-react';
import { employeeForms } from '@/data/mock-data';

const getFormTypeColor = (formType: string) => {
  const colors: Record<string, string> = {
    COUNSELING: 'bg-amber-500',
    RESIGNATION: 'bg-red-500',
    PAYROLL: 'bg-blue-500',
    PERFORMANCE: 'bg-green-500',
    DISCIPLINE: 'bg-red-600',
    INJURY: 'bg-orange-500',
  };
  return colors[formType] || 'bg-gray-500';
};

export default function FormsPage() {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const filteredForms = employeeForms.filter((form) =>
    form.employeeName.toLowerCase().includes(searchText.toLowerCase()) ||
    form.formType.toLowerCase().includes(searchText.toLowerCase())
  );

  const paginatedForms = filteredForms.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  const totalPages = Math.ceil(filteredForms.length / rowsPerPage);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#046bd2]">Forms</h1>
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search forms..."
            className="pl-9"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setPage(0);
            }}
          />
        </div>
      </div>

      {/* Forms Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">FORM TYPE</TableHead>
                <TableHead className="font-semibold">EMPLOYEE</TableHead>
                <TableHead className="font-semibold">NEXT DATE</TableHead>
                <TableHead className="font-semibold text-right">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedForms.map((form) => (
                <TableRow key={form.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <Badge className={getFormTypeColor(form.formType)}>{form.formType}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link href={`/shadcn/employees/${form.employeeId}`} className="text-[#046bd2] font-medium hover:underline">
                      {form.employeeName}
                    </Link>
                  </TableCell>
                  <TableCell>{form.nextDate || '-'}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="link" size="sm" className="text-[#046bd2]">
                      {form.editUrl ? 'Edit' : 'View'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t px-4 py-3">
            <span className="text-sm text-gray-600">
              Showing {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, filteredForms.length)} of {filteredForms.length}
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
