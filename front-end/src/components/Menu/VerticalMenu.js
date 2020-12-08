import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import ListIcon from "@material-ui/icons/List";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import StoreIcon from "@material-ui/icons/Store";
const useStyles = makeStyles(theme => ({
  drawer: {
    zIndex: 1,
  },
}));
const VerticalMenu = () => {
  const specialOfferList = [
    "Value of the Day",
    "Top 100 Offers",
    "New Arrivals",
  ];

  // const [open, setOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const toggleClick = e => {
  //   setOpen(prevOpen => !prevOpen);
  //   setAnchorEl(anchorEl ? null : e.currentTarget);
  // };
  const classes = useStyles();
  return (
    <div>
      <Drawer open variant="persistent" anchor="left">
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider variant="fullWidth" />
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notification" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalMallIcon />
            </ListItemIcon>
            <ListItemText primary="Order" />
          </ListItem>
          <Divider variant="fullWidth" />
          <ListItem button>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Favorite Store" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default VerticalMenu;
// <div className={classes.root}>
//   <Button
//     className={classes.button}
//     startIcon={<ListIcon />}
//     variant="contained"
//     color="secondary"
//     onClick={toggleClick}
//   >
//     All Departments
//   </Button>
//   <Popper
//     className={classes.poper}
//     open={open}
//     transition
//     disablePortal
//     anchorEl={anchorEl}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "center",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "center",
//     }}
//   >
//     <Paper>
//       <MenuList id="menu-list-grow">
//         {specialOfferList.map(el => (
//           <MenuItem>{el}</MenuItem>
//         ))}
//         {megaMenuList.map(el => (
//           <MenuItem className={classes.menu}>
//             {el.content}
//             <ListItemIcon className={classes.icon}>
//               <ArrowForwardIosIcon />
//             </ListItemIcon>
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Paper>
//   </Popper>
// </div>
