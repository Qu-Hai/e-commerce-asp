import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBars from "@material-ui/core/AppBar";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";
import GroupButton from "./GroupButton";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerVertical from "./DrawerVertical";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
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

const AppBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <AppBars className={classes.root} position="fixed">
          <Container>
            <Grid container justify="space-between" className={classes.grid}>
              <IconButton onClick={toggleClick}>
                {open ? <MenuOpenIcon /> : <MenuIcon />}
              </IconButton>
              <Box component="div" className={classes.logo}>
                <img src="logo_qh.png" alt="logo" className={classes.logoImg} />
                <Typography variant="subtitle1">Qu Hai</Typography>
              </Box>
              <Search />
              <GroupButton />
            </Grid>
          </Container>
        </AppBars>
        <DrawerVertical open={open} />
      </div>
    </ClickAwayListener>
  );
};

export default AppBar;
