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
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { callOffs } from '@/data/mock-data';

export default function CallOffReportPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedCallOffs = callOffs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const getReasonColor = (reason: string) => {
    switch (reason) {
      case 'Sick':
        return 'error';
      case 'Personal':
        return 'info';
      case 'Family Emergency':
        return 'warning';
      case 'No Show':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4" fontWeight={700} color="primary">
            Call-Off Report
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

      {/* Summary Stats */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Paper sx={{ p: 2, flex: 1, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="text.primary">
            {callOffs.length}
          </Typography>
          <Typography variant="body2" color="text.secondary">Total Call-Offs</Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="error.main">
            {callOffs.filter((c) => c.reason === 'Sick').length}
          </Typography>
          <Typography variant="body2" color="text.secondary">Sick</Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="warning.main">
            {callOffs.filter((c) => c.reason === 'No Show').length}
          </Typography>
          <Typography variant="body2" color="text.secondary">No Shows</Typography>
        </Paper>
      </Box>

      {/* Call-Off Table */}
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.50' }}>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  Date/Time
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  Employee
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  Job
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }} align="center">
                  Reason
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }} align="center">
                  Recording
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedCallOffs.map((callOff) => (
                <TableRow
                  key={callOff.id}
                  sx={{ '&:hover': { bgcolor: 'grey.50' } }}
                >
                  <TableCell>
                    <Typography fontWeight={500}>{callOff.dateTime}</Typography>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/mui/employees/${callOff.employeeId}`}
                      style={{ color: '#046bd2', fontWeight: 500, textDecoration: 'none' }}
                    >
                      {callOff.employeeName}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/mui/jobs/${callOff.jobId}`}
                      style={{ color: '#046bd2', textDecoration: 'none' }}
                    >
                      {callOff.jobName}
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={callOff.reason}
                      size="small"
                      color={getReasonColor(callOff.reason) as 'error' | 'info' | 'warning' | 'default'}
                      sx={{ fontWeight: 500 }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {callOff.hasRecording ? (
                      <Button size="small" startIcon={<PlayCircleIcon />} color="primary">
                        Play
                      </Button>
                    ) : (
                      <Typography variant="body2" color="text.secondary">-</Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={callOffs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
