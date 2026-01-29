'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorIcon from '@mui/icons-material/Error';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { jobAlerts, openTimesheets, currentUser, dashboardStats } from '@/data/mock-data';

export default function MuiDashboard() {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Typography variant="h4" fontWeight={700} color="text.primary">
              Dashboard
            </Typography>
            <Link href="#" style={{ color: '#046bd2', textDecoration: 'none', fontSize: '0.875rem' }}>
              [Quality Inspections]
            </Link>
          </Box>
          {currentUser.currentPunchIn && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {currentUser.currentPunchIn.jobName} - Punch In: {currentUser.currentPunchIn.punchInTime}
              </Typography>
              <Button variant="outlined" size="small" color="error">
                Punch Out
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Check-Ins Past Due Alert */}
      <Alert
        severity="warning"
        icon={<WarningAmberIcon />}
        sx={{ mb: 3, bgcolor: '#fef3c7', '& .MuiAlert-icon': { color: '#d97706' } }}
      >
        <Typography fontWeight={600}>
          Check-Ins Past Due:{' '}
          <Link href="/mui/jobs" style={{ color: '#046bd2' }}>
            {dashboardStats.checkInsPastDue.jobs} Jobs
          </Link>
          {' & '}
          <Link href="/mui/employees" style={{ color: '#046bd2' }}>
            {dashboardStats.checkInsPastDue.employees} Employees
          </Link>
        </Typography>
      </Alert>

      {/* Job Alerts Section */}
      <Paper sx={{ mb: 3, overflow: 'hidden' }}>
        <Box sx={{ p: 2, bgcolor: 'error.main', color: 'white' }}>
          <Typography variant="h6" fontWeight={600}>
            Job Alerts ({jobAlerts.length})
          </Typography>
        </Box>
        <Box sx={{ p: 0 }}>
          {jobAlerts.map((alert) => (
            <Box
              key={alert.id}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                p: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:last-child': { borderBottom: 'none' },
                bgcolor: '#fef2f2',
              }}
            >
              <Chip
                icon={<ErrorIcon />}
                label="Job Alert"
                color="error"
                size="small"
                sx={{ fontWeight: 600 }}
              />
              <Typography variant="body2">
                <Link href={`/mui/jobs/${alert.jobId}`} style={{ color: '#046bd2', fontWeight: 600 }}>
                  {alert.jobName}
                </Link>
                {' '}has yet to be serviced for {alert.serviceDate}. Job alert acknowledged by{' '}
                <strong>{alert.acknowledgedBy}</strong>.
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Open Timesheets Section */}
      <Card>
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight={600}>
              Open Timesheets ({openTimesheets.length})
            </Typography>
          </Box>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.50' }}>
                  <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    Job
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    Employee
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    In
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {openTimesheets.map((timesheet) => (
                  <TableRow
                    key={timesheet.id}
                    sx={{ '&:hover': { bgcolor: 'grey.50' } }}
                  >
                    <TableCell>
                      <Link href="#" style={{ color: '#046bd2' }}>
                        {timesheet.date}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/mui/jobs/${timesheet.jobId}`} style={{ color: '#046bd2' }}>
                        {timesheet.jobName}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/mui/employees/${timesheet.employeeId}`} style={{ color: '#046bd2' }}>
                        {timesheet.employeeName}
                      </Link>
                    </TableCell>
                    <TableCell>{timesheet.inTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider', bgcolor: 'grey.50' }}>
            <Typography variant="caption" color="text.secondary">
              Updated {dashboardStats.lastUpdated}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
