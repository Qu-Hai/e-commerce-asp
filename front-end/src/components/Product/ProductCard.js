import React, { useState } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    paddingBottom: theme.spacing(1),
    position: "relative",
  },
  contentSecond: {
    paddingTop: 0,
  },
  action: {
    paddingTop: 0,
    paddingBottom: 5,
  },
  speedDial: {
    position: "absolute",
    top: theme.spacing(0),
    bottom: theme.spacing(1),
    right: theme.spacing(0),
  },
  speedAction: {},
}));
const actions = [
  { icon: <VisibilityIcon />, title: "Quick view" },
  { icon: <FavoriteBorderIcon />, title: "Wishlist" },
  { icon: <AddShoppingCartIcon />, name: "Add to cart" },
];

export default function ProductCard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const preventDefault = event => event.preventDefault();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Link
            href="#"
            color="textSecondary"
            onClick={preventDefault}
            component="p"
          >
            Bulgari
          </Link>

          <Link
            href="#"
            color="primary"
            onClick={preventDefault}
            component="h4"
          >
            Fixair Product Sample
          </Link>
        </CardContent>
        <CardMedia
          component="img"
          src="https://cdn.shopify.com/s/files/1/0251/6588/9645/products/GamePad_540x.jpg?v=1605238626"
          alt="product"
        />

        <CardContent className={classes.content}>
          <Typography variant="h6" color="secondary">
            $11.00
          </Typography>
          <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            icon={<MoreVertIcon />}
            direction="up"
            className={classes.speedDial}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
          >
            {actions.map(action => (
              <SpeedDialAction
                key={action.title}
                icon={action.icon}
                tooltipTitle={action.title}
                className={classes.speedAction}
              />
            ))}
          </SpeedDial>
        </CardContent>
        <CardContent className={classes.contentSecond}>
          <Rating value="5" readOnly size="small" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
