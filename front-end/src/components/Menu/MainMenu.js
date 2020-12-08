import React from "react";
import HorizontalMenu from "./HorizontalMenu";
// import VerticalMenu from "./VerticalMenu";

import Grid from "@material-ui/core/Grid";
// import logo from "./../../assets/img/logo_qh.png";

const MainMenu = () => {
  return (
    <div>
      <Grid container justify="center">
        <HorizontalMenu />
      </Grid>
    </div>
  );
};

export default MainMenu;
