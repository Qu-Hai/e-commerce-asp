import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBars from "@material-ui/core/AppBar";
import Search from "../Search/Search";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GroupButton from "./GroupButton";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    zIndex: theme.zIndex.drawer + 1,
  },
  grid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  logo: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    width: 60,
  },
}));

function AppBar() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <AppBars className={classes.root} position="fixed">
        <Container>
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.grid}
            alignItems="center"
          >
            <Box
              component="div"
              className={classes.logo}
              onClick={() => history.push("/")}
            >
              <img src="logo_qh.png" alt="logo" className={classes.logoImg} />
            </Box>
            <Search />
            <GroupButton />
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
          </Grid>
        </Container>
      </AppBars>
    </div>
  );
}

export default AppBar;
