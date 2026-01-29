'use client';

import { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ptoRequests } from '@/data/mock-data';

export default function PTOReportPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRequests = ptoRequests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Denied':
        return 'error';
      case 'Submitted':
        return 'warning';
      default:
        return 'default';
    }
  };

  const approved = ptoRequests.filter((r) => r.status === 'Approved').length;
  const denied = ptoRequests.filter((r) => r.status === 'Denied').length;
  const pending = ptoRequests.filter((r) => r.status === 'Submitted').length;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4" fontWeight={700} color="primary">
            PTO Requests
          </Typography>
          <Link href="/mui/reports" style={{ color: '#046bd2', display: 'flex', alignItems: 'center', gap: 4 }}>
            <ArrowBackIcon fontSize="small" />
            Back To Reports
          </Link>
        </Box>
        <Button variant="contained" color="primary">
          Export Report
        </Button>
      </Box>

      {/* Stats Row */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Paper sx={{ p: 2, flex: 1, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="success.main">
            {approved}
          </Typography>
          <Typography variant="body2" color="text.secondary">Approved</Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="error.main">
            {denied}
          </Typography>
          <Typography variant="body2" color="text.secondary">Denied</Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="warning.main">
            {pending}
          </Typography>
          <Typography variant="body2" color="text.secondary">Pending</Typography>
        </Paper>
      </Box>

      {/* PTO Table */}
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.50' }}>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  Employee
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  Date
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }} align="center">
                  Hours
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  Supervisor
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }} align="center">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRequests.map((request) => (
                <TableRow
                  key={request.id}
                  sx={{ '&:hover': { bgcolor: 'grey.50' } }}
                >
                  <TableCell>
                    <Link
                      href={`/mui/employees/${request.employeeId}`}
                      style={{ color: '#046bd2', fontWeight: 500, textDecoration: 'none' }}
                    >
                      {request.employeeName}
                    </Link>
                  </TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell align="center">
                    <Typography fontWeight={600}>{request.hours}</Typography>
                  </TableCell>
                  <TableCell>{request.supervisor}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={request.status}
                      size="small"
                      color={getStatusColor(request.status) as 'success' | 'error' | 'warning' | 'default'}
                      sx={{ fontWeight: 500 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={ptoRequests.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
