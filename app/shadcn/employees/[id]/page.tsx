'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { employees, ptoRequests } from '@/data/mock-data';

export default function EmployeeDetailPage() {
  const params = useParams();
  const employee = employees.find((e) => e.id === params.id) || employees[0];
  const employeePTO = ptoRequests.filter((p) => p.employeeId === employee.id);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Employee Detail</h1>
          <Link href="/shadcn/employees" className="text-[#046bd2] flex items-center gap-1 text-sm hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back To Employees
          </Link>
        </div>
        <Button className="bg-[#046bd2] hover:bg-[#045cb4]">Edit Employee</Button>
      </div>

      {/* Employee Info Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-[#046bd2]">{employee.name}</CardTitle>
          <Badge variant={employee.status === 'Active' ? 'default' : 'secondary'} className={employee.status === 'Active' ? 'bg-green-500' : ''}>
            {employee.status}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs text-gray-500 uppercase">Role</span>
                <p className="font-medium">{employee.role}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase">Employee ID</span>
                <p>{employee.id}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase">Email</span>
                <p>{employee.email}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-gray-500 uppercase">Phone</span>
                <p>{employee.phone1}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase">Hire Date</span>
                <p>{employee.hireDate}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase">Address</span>
                <p>{employee.address}, {employee.city}, {employee.state} {employee.zip}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PTO Balance Card */}
      <Card>
        <CardHeader>
          <CardTitle>PTO Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <p className="text-5xl font-bold text-[#046bd2]">{employee.ptoBalance}</p>
            <p className="text-sm text-gray-600 mt-2">Available Hours (as of {employee.ptoAsOf})</p>
          </div>
        </CardContent>
      </Card>

      {/* Recent PTO Requests */}
      <Card>
        <CardHeader>
          <CardTitle>Recent PTO Requests</CardTitle>
        </CardHeader>
        <CardContent>
          {employeePTO.length > 0 ? (
            <div className="space-y-3">
              {employeePTO.map((pto) => (
                <div key={pto.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{pto.date}</p>
                    <p className="text-sm text-gray-600">{pto.hours} hours • Supervisor: {pto.supervisor}</p>
                  </div>
                  <Badge
                    variant={pto.status === 'Approved' ? 'default' : pto.status === 'Denied' ? 'destructive' : 'secondary'}
                    className={pto.status === 'Approved' ? 'bg-green-500' : pto.status === 'Submitted' ? 'bg-amber-500' : ''}
                  >
                    {pto.status}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No PTO requests on file.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
