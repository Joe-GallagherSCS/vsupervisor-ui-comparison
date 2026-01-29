'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowLeft, Star, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { jobs, jobCheckIns, positionAssignments } from '@/data/mock-data';

export default function JobDetailPage() {
  const params = useParams();
  const job = jobs.find((j) => j.id === params.id) || jobs[0];
  const checkIns = jobCheckIns.filter((c) => c.jobId === job.id);
  const assignments = positionAssignments.filter((a) => a.jobId === job.id);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Job Detail</h1>
          <Link href="/shadcn/jobs" className="text-[#046bd2] flex items-center gap-1 text-sm hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back To Jobs
          </Link>
        </div>
        <Button className="bg-[#046bd2] hover:bg-[#045cb4]">Send Quality Survey</Button>
      </div>

      {/* Job Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#046bd2]">{job.name} - #{job.id}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs text-gray-500 uppercase">Address #1</span>
                <p>{job.address1}</p>
              </div>
              {job.address2 && (
                <div>
                  <span className="text-xs text-gray-500 uppercase">Address #2</span>
                  <p>{job.address2}</p>
                </div>
              )}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="text-xs text-gray-500 uppercase">City</span>
                  <p>{job.city}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase">State</span>
                  <p>{job.state}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase">Zip</span>
                  <p>{job.zip}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-gray-500 uppercase">Contact</span>
                <p>{job.contact}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase">Phone #1</span>
                <p>{job.phone1}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase">Email</span>
                <p>{job.email}</p>
              </div>
            </div>
          </div>

          {job.accessNotes && (
            <Alert className="bg-amber-50 border-amber-200">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Access Notes</AlertTitle>
              <AlertDescription className="text-amber-700">{job.accessNotes}</AlertDescription>
            </Alert>
          )}

          <Separator />

          <div className="grid grid-cols-3 gap-6">
            <div>
              <span className="text-xs text-gray-500 uppercase">Supervisor</span>
              <p className="font-medium">{job.supervisor}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase">Created</span>
              <p>{job.createdDate}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase">Weekly Budget</span>
              <p className="font-semibold">${job.weeklyBudget.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Check-In History */}
      <Card>
        <CardHeader>
          <CardTitle>Check-In History</CardTitle>
        </CardHeader>
        <CardContent>
          {checkIns.length > 0 ? (
            <div className="space-y-4">
              {checkIns.map((checkIn) => (
                <Card key={checkIn.id} className="border">
                  <CardContent className="p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{checkIn.supervisorName} - Job Check-In:</span>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-500">Work Quality:</span>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < checkIn.workQuality ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(checkIn.assessment).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          {value ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span className="text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm">{checkIn.observation}</p>
                    </div>
                    <p className="text-xs text-gray-500">Completed: {checkIn.completedAt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No check-ins recorded yet.</p>
          )}
        </CardContent>
      </Card>

      {/* Position Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Position Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">POSITION</TableHead>
                <TableHead className="text-center">SUN</TableHead>
                <TableHead className="text-center">MON</TableHead>
                <TableHead className="text-center">TUE</TableHead>
                <TableHead className="text-center">WED</TableHead>
                <TableHead className="text-center">THU</TableHead>
                <TableHead className="text-center">FRI</TableHead>
                <TableHead className="text-center">SAT</TableHead>
                <TableHead className="text-right font-semibold">HRS.</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.employeeId}>
                  <TableCell>
                    <div>
                      <span className="font-medium">{assignment.position}</span>
                      <br />
                      <Link href={`/shadcn/employees/${assignment.employeeId}`} className="text-[#046bd2] text-sm hover:underline">
                        {assignment.employeeName}
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-xs">{assignment.schedule.sun || '-'}</TableCell>
                  <TableCell className="text-center text-xs">{assignment.schedule.mon || '-'}</TableCell>
                  <TableCell className="text-center text-xs">{assignment.schedule.tue || '-'}</TableCell>
                  <TableCell className="text-center text-xs">{assignment.schedule.wed || '-'}</TableCell>
                  <TableCell className="text-center text-xs">{assignment.schedule.thu || '-'}</TableCell>
                  <TableCell className="text-center text-xs">{assignment.schedule.fri || '-'}</TableCell>
                  <TableCell className="text-center text-xs">{assignment.schedule.sat || '-'}</TableCell>
                  <TableCell className="text-right font-semibold">{assignment.totalHours}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={8} className="font-semibold">Total Hours</TableCell>
                <TableCell className="text-right font-bold">
                  {assignments.reduce((sum, a) => sum + a.totalHours, 0)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
