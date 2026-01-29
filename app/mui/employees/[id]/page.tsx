'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { employees, ptoRequests } from '@/data/mock-data';

export default function EmployeeDetailPage() {
  const params = useParams();
  const employee = employees.find((e) => e.id === params.id) || employees[0];
  const employeePTO = ptoRequests.filter((p) => p.employeeId === employee.id);

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4" fontWeight={700}>
            Employee Detail
          </Typography>
          <Link href="/mui/employees" style={{ color: '#046bd2', display: 'flex', alignItems: 'center', gap: 4 }}>
            <ArrowBackIcon fontSize="small" />
            Back To Employees
          </Link>
        </Box>
        <Button variant="contained" color="primary">
          Edit Employee
        </Button>
      </Box>

      {/* Employee Info Card */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h5" fontWeight={600} color="primary">
            {employee.name}
          </Typography>
          <Chip
            label={employee.status}
            size="small"
            color={employee.status === 'Active' ? 'success' : 'default'}
            sx={{ fontWeight: 500 }}
          />
        </Box>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Role</Typography>
              <Typography fontWeight={500}>{employee.role}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Employee ID</Typography>
              <Typography>{employee.id}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Email</Typography>
              <Typography>{employee.email}</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Phone</Typography>
              <Typography>{employee.phone1}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Hire Date</Typography>
              <Typography>{employee.hireDate}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Address</Typography>
              <Typography>{employee.address}, {employee.city}, {employee.state} {employee.zip}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* PTO Balance Card */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            PTO Balance
          </Typography>
          <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'primary.light', borderRadius: 1 }}>
            <Typography variant="h3" fontWeight={700} color="primary.dark">
              {employee.ptoBalance}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Available Hours (as of {employee.ptoAsOf})
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Recent PTO Requests */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Recent PTO Requests
          </Typography>
          {employeePTO.length > 0 ? (
            employeePTO.map((pto) => (
              <Paper key={pto.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography fontWeight={500}>
                      {pto.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pto.hours} hours • Supervisor: {pto.supervisor}
                    </Typography>
                  </Box>
                  <Chip
                    label={pto.status}
                    size="small"
                    color={
                      pto.status === 'Approved'
                        ? 'success'
                        : pto.status === 'Denied'
                        ? 'error'
                        : 'warning'
                    }
                    sx={{ fontWeight: 500 }}
                  />
                </Box>
              </Paper>
            ))
          ) : (
            <Typography color="text.secondary">No PTO requests on file.</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
