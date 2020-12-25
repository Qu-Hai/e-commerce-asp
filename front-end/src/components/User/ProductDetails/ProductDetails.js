import React, { useEffect } from "react";
import ProductMedia from "../ProductMedia/ProductMedia";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductInformation from "../ProductInformation/ProductInformation";
import ProductTitle from "../ProductTitle/ProductTitle";
import StyledDivider from "./../../../utils/StyledDivider";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function ProductDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" to="/">
          Home
        </Link>
        <Link color="inherit">Product</Link>
        <Typography color="textPrimary">Details</Typography>
      </Breadcrumbs>
      <Paper variant="outlined">
        <Grid container md={12}>
          <Grid item md={6}>
            <ProductMedia />
          </Grid>
          <Grid item md={6}>
            <ProductTitle />
          </Grid>
        </Grid>
      </Paper>

      <StyledDivider children="Product Description" />
      <ProductDescription />
      <StyledDivider children="Product Information" />
      <ProductInformation />
    </div>
  );
}
