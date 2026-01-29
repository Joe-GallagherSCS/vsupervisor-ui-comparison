'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import AssessmentIcon from '@mui/icons-material/Assessment';

const reportCategories = [
  {
    title: 'Jobs Report',
    description: 'View job performance metrics, budget analysis, and service history.',
    icon: WorkIcon,
    href: '/mui/jobs',
    color: '#046bd2',
  },
  {
    title: 'Employees Report',
    description: 'Employee performance, attendance tracking, and work history.',
    icon: PeopleIcon,
    href: '/mui/employees',
    color: '#059669',
  },
  {
    title: 'Deviation Report',
    description: 'Track schedule deviations, missed services, and exceptions.',
    icon: EventBusyIcon,
    href: '#',
    color: '#dc2626',
  },
  {
    title: 'PTO Requests',
    description: 'View and manage paid time off requests and balances.',
    icon: BeachAccessIcon,
    href: '/mui/reports/pto',
    color: '#7c3aed',
  },
  {
    title: 'Call-Off Report',
    description: 'Track employee call-offs, absences, and related patterns.',
    icon: PhoneDisabledIcon,
    href: '/mui/reports/call-off',
    color: '#ea580c',
  },
  {
    title: 'Custom Reports',
    description: 'Build and export custom reports with advanced filters.',
    icon: AssessmentIcon,
    href: '#',
    color: '#0891b2',
  },
];

export default function ReportsPage() {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700} color="primary">
          Reports
        </Typography>
        <Typography color="text.secondary">
          Select a report category to view detailed analytics and data.
        </Typography>
      </Box>

      {/* Report Cards Grid */}
      <Grid container spacing={3}>
        {reportCategories.map((report) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={report.title}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea
                component={Link}
                href={report.href}
                sx={{ height: '100%' }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      bgcolor: `${report.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <report.icon sx={{ fontSize: 28, color: report.color }} />
                  </Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {report.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {report.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
