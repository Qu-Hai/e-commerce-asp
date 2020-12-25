import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import StyledIconButton from "../utils/StyledIconButton";
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: params =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
  {
    field: "options",
    headerName: "Options",
    width: 150,
    renderCell: params => (
      <strong
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {params.value}
        <StyledIconButton title="Edit" onClick={handleBlock}>
          <CreateOutlinedIcon />
        </StyledIconButton>
        <StyledIconButton title="More" onClick={handleBlock}>
          <ArrowRightAltIcon />
        </StyledIconButton>
      </strong>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 10 },
  { id: 6, lastName: "Melisandre", firstName: "Daenerys", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 11, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 12, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 13, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 14, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 15, lastName: "Targaryen", firstName: "Daenerys", age: 10 },
  { id: 16, lastName: "Melisandre", firstName: "Daenerys", age: 150 },
  { id: 17, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 18, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const handleBlock = () => {
  console.log("Block");
};
export default function Products() {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary">
        Create Customer
      </Button>
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={7}
        autoHeight
        onRowClick={params => {
          console.log(params.row);
        }}
      />
    </div>
  );
}
