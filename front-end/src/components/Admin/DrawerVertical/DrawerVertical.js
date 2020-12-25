import React from "react";
import Divider from "@material-ui/core/Divider";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { makeStyles } from "@material-ui/core/styles";
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
  { icon: <DashboardIcon />, title: "Dashboard" },
  { icon: <PeopleOutlineIcon />, title: "Customers" },
  { icon: <ShoppingCartOutlinedIcon />, title: "Products" },
  { icon: <FolderOpenOutlinedIcon />, title: "Orders" },
  { icon: <ChatBubbleOutlineOutlinedIcon />, title: "Chat" },
  { icon: <FeedbackOutlinedIcon />, title: "Feedbacks" },
  { icon: <ExitToAppOutlinedIcon />, title: "Logout" },
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
        </List>
      </Drawer>
    </div>
  );
}
