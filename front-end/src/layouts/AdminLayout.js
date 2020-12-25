import React, { lazy } from "react";
// import { Route } from "react-router-dom";
// import { PATH } from "../constants/path";
import DrawerVertical from "../components/Admin/DrawerVertical/DrawerVertical";
import TopNavbar from "../components/Admin/TopNavbar/TopNavbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
export default function AdminLayout() {
  return (
    <div>
      <CssBaseline />
      <TopNavbar />

      <div style={{ display: "flex" }}>
        <DrawerVertical />
        <Container className="container">
          <Breadcrumbs
            style={{ marginBottom: 16 }}
            separator="›"
            aria-label="breadcrumb"
          >
            <Link color="inherit" to="/">
              Home
            </Link>
            <Link color="inherit">Admin</Link>
            <Typography color="textPrimary">Customers</Typography>
          </Breadcrumbs>
          <div>
            <Customers />
            {/* <Dashboard /> */}
            {/* <Route exact path={PATH.HOME} component={Home} />
            <Route exact path={PATH.DETAILS} component={Details} /> */}
          </div>
        </Container>
      </div>
    </div>
  );
}
