'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import StarIcon from '@mui/icons-material/Star';
import { jobs, jobCheckIns, positionAssignments } from '@/data/mock-data';

export default function JobDetailPage() {
  const params = useParams();
  const job = jobs.find((j) => j.id === params.id) || jobs[0];
  const checkIns = jobCheckIns.filter((c) => c.jobId === job.id);
  const assignments = positionAssignments.filter((a) => a.jobId === job.id);

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4" fontWeight={700}>
            Job Detail
          </Typography>
          <Link href="/mui/jobs" style={{ color: '#046bd2', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <ArrowBackIcon fontSize="small" />
            Back To Jobs
          </Link>
        </Box>
        <Button variant="contained" color="primary">
          Send Quality Survey
        </Button>
      </Box>

      {/* Job Info Card */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" fontWeight={600} color="primary" gutterBottom>
          {job.name} - #{job.id}
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Address #1</Typography>
              <Typography>{job.address1}</Typography>
            </Box>
            {job.address2 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" color="text.secondary">Address #2</Typography>
                <Typography>{job.address2}</Typography>
              </Box>
            )}
            <Grid container spacing={2}>
              <Grid size={6}>
                <Typography variant="caption" color="text.secondary">City</Typography>
                <Typography>{job.city}</Typography>
              </Grid>
              <Grid size={3}>
                <Typography variant="caption" color="text.secondary">State</Typography>
                <Typography>{job.state}</Typography>
              </Grid>
              <Grid size={3}>
                <Typography variant="caption" color="text.secondary">Zip</Typography>
                <Typography>{job.zip}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Contact</Typography>
              <Typography>{job.contact}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Phone #1</Typography>
              <Typography>{job.phone1}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">Email</Typography>
              <Typography>{job.email}</Typography>
            </Box>
          </Grid>
          {job.accessNotes && (
            <Grid size={12}>
              <Box sx={{ p: 2, bgcolor: 'warning.light', borderRadius: 1 }}>
                <Typography variant="caption" color="text.secondary">Access Notes</Typography>
                <Typography>{job.accessNotes}</Typography>
              </Box>
            </Grid>
          )}
          <Grid size={12}>
            <Divider sx={{ my: 1 }} />
            <Grid container spacing={2}>
              <Grid size={4}>
                <Typography variant="caption" color="text.secondary">Supervisor</Typography>
                <Typography fontWeight={500}>{job.supervisor}</Typography>
              </Grid>
              <Grid size={4}>
                <Typography variant="caption" color="text.secondary">Created</Typography>
                <Typography>{job.createdDate}</Typography>
              </Grid>
              <Grid size={4}>
                <Typography variant="caption" color="text.secondary">Weekly Budget</Typography>
                <Typography fontWeight={600}>${job.weeklyBudget.toFixed(2)}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Check-In History */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Check-In History
          </Typography>
          {checkIns.length > 0 ? (
            checkIns.map((checkIn) => (
              <Paper key={checkIn.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography fontWeight={600}>
                    {checkIn.supervisorName} - Job Check-In:
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2">Work Quality:</Typography>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{
                          fontSize: 18,
                          color: i < checkIn.workQuality ? 'warning.main' : 'grey.300',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Grid container spacing={1} sx={{ mb: 2 }}>
                  {Object.entries(checkIn.assessment).map(([key, value]) => (
                    <Grid size={{ xs: 6, sm: 4 }} key={key}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {value ? (
                          <CheckCircleIcon color="success" fontSize="small" />
                        ) : (
                          <CancelIcon color="error" fontSize="small" />
                        )}
                        <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 1, mb: 1 }}>
                  <Typography variant="body2">{checkIn.observation}</Typography>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Completed: {checkIn.completedAt}
                </Typography>
              </Paper>
            ))
          ) : (
            <Typography color="text.secondary">No check-ins recorded yet.</Typography>
          )}
        </CardContent>
      </Card>

      {/* Position Summary */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Position Summary
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.50' }}>
                  <TableCell sx={{ fontWeight: 600 }}>Position</TableCell>
                  <TableCell align="center">SUN</TableCell>
                  <TableCell align="center">MON</TableCell>
                  <TableCell align="center">TUE</TableCell>
                  <TableCell align="center">WED</TableCell>
                  <TableCell align="center">THU</TableCell>
                  <TableCell align="center">FRI</TableCell>
                  <TableCell align="center">SAT</TableCell>
                  <TableCell align="right">HRS.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assignments.map((assignment) => (
                  <TableRow key={assignment.employeeId}>
                    <TableCell>
                      <Typography fontWeight={500}>{assignment.position}</Typography>
                      <Link href={`/mui/employees/${assignment.employeeId}`} style={{ color: '#046bd2', fontSize: '0.875rem' }}>
                        {assignment.employeeName}
                      </Link>
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: '0.75rem' }}>{assignment.schedule.sun || '-'}</TableCell>
                    <TableCell align="center" sx={{ fontSize: '0.75rem' }}>{assignment.schedule.mon || '-'}</TableCell>
                    <TableCell align="center" sx={{ fontSize: '0.75rem' }}>{assignment.schedule.tue || '-'}</TableCell>
                    <TableCell align="center" sx={{ fontSize: '0.75rem' }}>{assignment.schedule.wed || '-'}</TableCell>
                    <TableCell align="center" sx={{ fontSize: '0.75rem' }}>{assignment.schedule.thu || '-'}</TableCell>
                    <TableCell align="center" sx={{ fontSize: '0.75rem' }}>{assignment.schedule.fri || '-'}</TableCell>
                    <TableCell align="center" sx={{ fontSize: '0.75rem' }}>{assignment.schedule.sat || '-'}</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>{assignment.totalHours}</TableCell>
                  </TableRow>
                ))}
                <TableRow sx={{ bgcolor: 'grey.100' }}>
                  <TableCell colSpan={8} sx={{ fontWeight: 600 }}>Total Hours</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700 }}>
                    {assignments.reduce((sum, a) => sum + a.totalHours, 0)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
