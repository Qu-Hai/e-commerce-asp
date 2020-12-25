import React from "react";
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

import { makeStyles } from "@material-ui/core/styles";

import CategoryIcon from "@material-ui/icons/Category";
import LaptopIcon from "@material-ui/icons/Laptop";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import HeadsetIcon from "@material-ui/icons/Headset";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
const drawerWidth = 250;
const useStyles = makeStyles(theme => ({
  "@global": {
    "*::-webkit-scrollbar": {
      display: "none",
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  listSecond: {
    paddingTop: 0,
  },
  item: {
    paddingLeft: theme.spacing(5),
  },
  drawerPaper: {
    height: "calc(100% - 64px)",
    top: 64,
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
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
const category = [
  { icon: <SportsEsportsIcon />, title: "Gaming" },
  { icon: <LaptopIcon />, title: "Laptop" },
  { icon: <PhoneAndroidIcon />, title: "Smartphone" },
  { icon: <CameraAltIcon />, title: "Camera" },
  { icon: <HeadsetIcon />, title: "Accessories" },
  { icon: <MenuBookIcon />, title: "Book" },
  { icon: <SportsSoccerIcon />, title: "Sports" },
];
export default function DrawerVertical(props) {
  const classes = useStyles();
  return (
    <div className="scroll">
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        open={props.open}
        variant="permanent"
        anchor="left"
      >
        <List>
          {item.map(el => (
            <ListItem button key={el.title}>
              <ListItemIcon>{el.icon}</ListItemIcon>
              <ListItemText primary={el.title} />
            </ListItem>
          ))}

          <Divider variant="fullWidth" />
          <ListItem button style={{ marginBottom: 0 }}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Product Category" />
          </ListItem>
        </List>
        <List className={classes.listSecond}>
          {category.map(el => (
            <ListItem className={classes.item} button key={el.title}>
              <ListItemIcon>{el.icon}</ListItemIcon>
              <ListItemText primary={el.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
