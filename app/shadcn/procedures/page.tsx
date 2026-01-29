'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { procedures } from '@/data/mock-data';

export default function ProceduresPage() {
  const [selectedProcedure, setSelectedProcedure] = useState(procedures[0]?.id || '');

  const currentProcedure = procedures.find((p) => p.id === selectedProcedure);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#046bd2]">Procedures</h1>
        <Select value={selectedProcedure} onValueChange={setSelectedProcedure}>
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Select a procedure" />
          </SelectTrigger>
          <SelectContent>
            {procedures.map((p) => (
              <SelectItem key={p.id} value={p.id}>
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Procedure Details */}
      {currentProcedure && (
        <Card>
          <CardHeader>
            <CardTitle>{currentProcedure.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-20 font-semibold">STEP</TableHead>
                  <TableHead className="font-semibold">WHO</TableHead>
                  <TableHead className="font-semibold">PROCESS</TableHead>
                  <TableHead className="font-semibold">NOTIFY</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentProcedure.steps.map((step, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="w-8 h-8 rounded-full bg-[#046bd2] text-white flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{step.who}</TableCell>
                    <TableCell>
                      <ul className="list-disc list-inside space-y-1">
                        {step.process.map((p, i) => (
                          <li key={i} className="text-sm">{p}</li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell>{step.notify}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
