import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TableCell from '@mui/material/TableCell';
import { StyledTable } from "./TableStyle";

function createData(name, py, budget, actual, actualCompare, budgetCompare, forecast) {
  return { name, py, budget, actual, actualCompare, budgetCompare, forecast };
}

const rows = [
  createData('Amazon TS Ops', 700, 600, 700, 100, 0, 500),
  createData('Amazon Prime', 700, 600, 700, 100, 0, 500),
  createData('Adobe Creative Cloud', 700, 600, 700, 100, 0, 500),
  createData('Microsoft WWL', 700, 600, 700, 100, 0, 500),
];

const CutomerTable = () => {
  // Calculate totals for each column
  const totalPy = rows.reduce((sum, row) => sum + row.py, 0);
  const totalBudget = rows.reduce((sum, row) => sum + row.budget, 0);
  const totalActual = rows.reduce((sum, row) => sum + row.actual, 0);
  const totalActualCompare = rows.reduce((sum, row) => sum + parseInt(row.actualCompare, 10), 0);
  const totalBudgetCompare = rows.reduce((sum, row) => sum + parseInt(row.budgetCompare, 10), 0);
  const totalForecast = rows.reduce((sum, row) => sum + row.forecast, 0);

  return (
    <TableContainer component={Paper}>
      <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center"  style={{ backgroundColor: '#008080', color: 'white' }}>PY</TableCell>
            <TableCell align="center" style={{ backgroundColor: "#ADD8E6" }}>Budget</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#e1ad01' }}>Actual</TableCell>
            <TableCell align="center" style={{ backgroundColor: 'grey', color: 'white' }} colSpan={2}>Actual vs Budget</TableCell>
            <TableCell align="center" style={{ backgroundColor: '#FFE5B4' }}>Forecast</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell align="center">{row.py}</TableCell>
              <TableCell align="center">{row.budget}</TableCell>
              <TableCell align="center">{row.actual}</TableCell>
              <TableCell align="center">{row.actualCompare}</TableCell>
              <TableCell align="center">{row.budgetCompare}</TableCell>
              <TableCell align="center">{row.forecast}</TableCell>
            </TableRow>
          ))}

          {/* Total Row */}
          <TableRow style={{ backgroundColor: "#e0e0e0" }}>
            <TableCell>Revenue</TableCell>
            <TableCell align="center">{totalPy}</TableCell>
            <TableCell align="center">{totalBudget}</TableCell>
            <TableCell align="center">{totalActual}</TableCell>
            <TableCell align="center">{totalActualCompare}</TableCell>
            <TableCell align="center">{totalBudgetCompare}</TableCell>
            <TableCell align="center">{totalForecast}</TableCell>
          </TableRow>
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
export default CutomerTable;
