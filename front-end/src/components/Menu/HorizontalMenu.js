import React from "react";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import logo from "./../../assets/img/logo_qh.png";
const useStyles = makeStyles(theme => ({
  button: {
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
  },
}));
const HorizontalMenu = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Button className={classes.button}>Home</Button>
      <Button className={classes.button} endIcon={<ExpandMoreIcon />}>
        Catalog
      </Button>
      <Button className={classes.button} endIcon={<ExpandMoreIcon />}>
        Pages
      </Button>
      <Button className={classes.button} endIcon={<ExpandMoreIcon />}>
        Features
      </Button>
      <Button className={classes.button} endIcon={<ExpandMoreIcon />}>
        Gift Cards
      </Button>
    </Grid>
  );
};

export default HorizontalMenu;
