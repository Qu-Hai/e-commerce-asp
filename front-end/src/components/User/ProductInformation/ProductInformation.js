import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5),
  },
  cell: {
    backgroundColor: theme.palette.action.disabled,
  },
}));
export default function ProductInformation() {
  const classes = useStyles();
  return (
    <Grid md={12} container className={classes.root}>
      <Grid item md={6}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell className={classes.cell}>Dessert </TableCell>
                <TableCell align="left">Calories</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.cell}>
                  Dessert (100g serving)
                </TableCell>
                <TableCell align="left">Calories</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.cell}>
                  Dessert (100g serving)
                </TableCell>
                <TableCell align="left">
                  Calories (100g serving) (100g serving)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
