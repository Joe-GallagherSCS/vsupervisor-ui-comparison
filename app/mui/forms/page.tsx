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
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import { employeeForms } from '@/data/mock-data';

export default function FormsPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedForms = employeeForms.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const getFormTypeColor = (formType: string) => {
    switch (formType) {
      case 'COUNSELING':
        return 'warning';
      case 'RESIGNATION':
        return 'error';
      case 'PAYROLL':
        return 'info';
      case 'PERFORMANCE':
        return 'success';
      case 'DISCIPLINE':
        return 'error';
      case 'INJURY':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight={700} color="primary">
          Forms
        </Typography>
        <TextField
          placeholder="Search forms..."
          size="small"
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Forms Table */}
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.50' }}>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  Form Type
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  Employee
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  Next Date
                </TableCell>
                <TableCell sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }} align="right">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedForms.map((form) => (
                <TableRow
                  key={form.id}
                  sx={{ '&:hover': { bgcolor: 'grey.50' } }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <DescriptionIcon color="action" fontSize="small" />
                      <Chip
                        label={form.formType}
                        size="small"
                        color={getFormTypeColor(form.formType) as 'warning' | 'error' | 'info' | 'success' | 'default'}
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/mui/employees/${form.employeeId}`}
                      style={{ color: '#046bd2', fontWeight: 500, textDecoration: 'none' }}
                    >
                      {form.employeeName}
                    </Link>
                  </TableCell>
                  <TableCell>{form.nextDate || '-'}</TableCell>
                  <TableCell align="right">
                    {form.editUrl ? (
                      <Button variant="text" size="small" color="primary">
                        Edit
                      </Button>
                    ) : (
                      <Button variant="text" size="small" color="primary">
                        View
                      </Button>
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
          count={employeeForms.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
