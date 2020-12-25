import { React, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import StyledDivider from "./../../../utils/StyledDivider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  tabs: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  grid: {
    marginTop: theme.spacing(1),
  },
}));
const demo = [
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
];
export default function ProductTable() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container justify="center">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="Featured" />
          <Tab label="On Sale" />
          <Tab label="Top Rated" />
        </Tabs>
      </Grid>
      <StyledDivider children="Gaming" />

      <Grid container md={12} spacing={2}>
        {demo.map((el, i) => (
          <Grid item key={i} md={3}>
            {el}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
