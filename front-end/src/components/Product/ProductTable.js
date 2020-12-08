import { React, useState } from "react";
import ProductCard from "./ProductCard";
import SpecialProductCard from "./SpecialProductCard";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
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
export default function ProductTable() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {/* Tabs */}
      <Grid container justify="flex-end">
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
      {/* Tabs */}
      <Divider variant="inset" />
      <Grid container spacing={2} className={classes.grid}>
        <Grid item md={4}>
          <SpecialProductCard />
        </Grid>
        <Grid item md={8}>
          <Grid container spacing={2}>
            {/* 1 */}
            <Grid item md={3}>
              <ProductCard />
            </Grid>
            {/* 2 */}
            <Grid item md={3}>
              <ProductCard />
            </Grid>
            {/* 3 */}
            <Grid item md={3}>
              <ProductCard />
            </Grid>
            {/* 4 */}
            <Grid item md={3}>
              <ProductCard />
            </Grid>
            {/* 1 */}
            <Grid item md={3}>
              <ProductCard />
            </Grid>
            {/* 2 */}
            <Grid item md={3}>
              <ProductCard />
            </Grid>
            {/* 3 */}
            <Grid item md={3}>
              <ProductCard />
            </Grid>
            {/* 4 */}
            <Grid item md={3}>
              <ProductCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
