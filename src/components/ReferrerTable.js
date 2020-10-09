import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography ,Button} from "@material-ui/core";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("google.com", 159, 6.0, 24, 4.0),
  createData("facebook.com", 237, 9.0, 37, 4.3),
  createData("twitter.com", 262, 16.0, 24, 6.0),
  createData("Direct,email", 305, 3.7, 67, 4.3),
  createData("LinkedIn.com", 356, 16.0, 49, 3.9),
];

export default function ReferrerTable() {

  return (
    <TableContainer component={Paper}>
      <Typography  align="left" variant="h6" id="tableTitle" component="div">
          Referrer
        </Typography>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>LOCATION</TableCell>
            <TableCell align="right">VIEWS</TableCell>
            <TableCell align="right">SALES&nbsp;</TableCell>
            <TableCell align="right">CONVERSION&nbsp;</TableCell>
            <TableCell align="right">TOTAL&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Button size="small" color="primary">
          Show More
        </Button>
      </Table>
    </TableContainer>
  );
}
