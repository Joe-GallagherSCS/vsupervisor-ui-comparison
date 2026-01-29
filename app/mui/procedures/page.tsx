'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { procedures } from '@/data/mock-data';

export default function ProceduresPage() {
  const [selectedProcedure, setSelectedProcedure] = useState(procedures[0]?.id || '');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedProcedure(event.target.value);
  };

  const currentProcedure = procedures.find((p) => p.id === selectedProcedure);

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight={700} color="primary">
          Procedures
        </Typography>
        <FormControl sx={{ width: 300 }}>
          <InputLabel>Select Procedure</InputLabel>
          <Select
            value={selectedProcedure}
            label="Select Procedure"
            onChange={handleChange}
          >
            {procedures.map((procedure) => (
              <MenuItem key={procedure.id} value={procedure.id}>
                {procedure.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Procedure Details */}
      {currentProcedure && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            {currentProcedure.name}
          </Typography>

          <Typography variant="h6" fontWeight={600} sx={{ mb: 2, mt: 3 }}>
            Procedure Steps
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.50' }}>
                  <TableCell sx={{ fontWeight: 600, width: 80 }}>Step</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Who</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Process</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Notify</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentProcedure.steps.map((step, index) => (
                  <TableRow key={index} sx={{ '&:hover': { bgcolor: 'grey.50' } }}>
                    <TableCell>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 600,
                        }}
                      >
                        {index + 1}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight={500}>{step.who}</Typography>
                    </TableCell>
                    <TableCell>
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {step.process.map((p, i) => (
                          <li key={i}>
                            <Typography variant="body2">{p}</Typography>
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{step.notify}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Box>
  );
}
