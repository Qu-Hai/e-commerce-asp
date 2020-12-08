import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import StoreIcon from "@material-ui/icons/Store";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const useStyles = makeStyles(theme => ({
  root: {},
  list: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(7.5),
  },
  nested: {
    paddingLeft: theme.spacing(10),
  },
}));
const item = [
  { icon: <HomeIcon />, title: "Home" },
  { icon: <PersonIcon />, title: "Account" },
  { icon: <NotificationsIcon />, title: "Notification" },
  { icon: <LocalMallIcon />, title: "Order" },
];
export default function DrawerVertical(props) {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = () => {
    setCollapse(prev => !prev);
  };
  return (
    <Drawer
      className={classes.root}
      open={props.open}
      variant="persistent"
      anchor="left"
    >
      <List className={classes.list}>
        {item.map(el => (
          <ListItem button key={el.title}>
            <ListItemIcon>{el.icon}</ListItemIcon>
            <ListItemText primary={el.title} />
          </ListItem>
        ))}
        <Divider variant="fullWidth" />
        <ListItem button onClick={toggleCollapse}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Favorite Store" />
          {collapse ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText className={classes.nested} secondary="Starred" />
              <ListItemIcon>
                <MoreVertIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}
