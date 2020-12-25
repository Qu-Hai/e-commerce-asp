import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { PATH } from "../constants/path";
import DrawerVertical from "../components/User/DrawerVertical/DrawerVertical";
import TopNavbar from "../components/User/TopNavbar/TopNavbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
const Home = lazy(() => import("../pages/Home"));
const Details = lazy(() => import("../pages/Details"));
export default function UserLayout() {
  return (
    <div>
      <CssBaseline />
      <TopNavbar />
      <div style={{ display: "flex" }}>
        <DrawerVertical />
        <Container className="container">
          <div>
            <Route exact path={PATH.HOME} component={Home} />
            <Route exact path={PATH.DETAILS} component={Details} />
          </div>
        </Container>
      </div>
    </div>
  );
}
