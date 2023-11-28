import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import "./OrderTable.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "orange",
    color: theme.palette.common.white,
    ontWeight:"bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const columns = [
  { id: 'firstName', label: 'First name', minWidth: 150 },
  { id: 'lastName', label: 'Last name', minWidth: 150 },
  { id: 'QuantityOrdered', label: 'Quantity Ordered', minWidth: 150, align: 'right' },
  { id: 'delete', label: 'Status', minWidth: 150, align: 'right' },
];

function OrderTable({ rows, onDeleteRow, selectedRows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteRow = (id) => {
    
    onDeleteRow(id);
  };
  const sortedRows = [...rows].sort((a, b) => {
    const aIsChecked = selectedRows.includes(a.id);
    const bIsChecked = selectedRows.includes(b.id);
    if (aIsChecked && !bIsChecked) {
      return 1;
    } else if (!aIsChecked && bIsChecked) {
      return -1;
    } else {
      return 0;
    }
  });
  return (
    <TableContainer component={Paper}  className="scrollable-table">
      <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {sortedRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.id} className={selectedRows.includes(row.id) ? 'selected-row' : ''}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <StyledTableCell key={column.id} align={column.align}>
                      {column.id === 'delete' ? (
                        <div className="checkbox-wrapper-19">
                           <input
                              id={`cbtest-${row.id}`}
                              type="checkbox"
                              checked={selectedRows.includes(row.id)}
                              onClick={() => handleDeleteRow(row.id)}
                            />
                            <label className="check-box" htmlFor={`cbtest-${row.id}`}></label>
                          </div>
                        ) : value}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
   
  );
}

export default OrderTable;