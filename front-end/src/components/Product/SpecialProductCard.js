import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ProductGroupButton from "./ProductGroupButton";
import StyledLinearProgress from "./StyledLinearProgress";
import Card from "@material-ui/core/Card";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Avatar from "@material-ui/core/Avatar";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    display: "flex",
    flexDirection: "column",
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
  wrap: {
    paddingTop: theme.spacing(1),
    textAlign: "center",
    lineHeight: 1.5,
  },
  avatar: {
    position: "absolute",
    left: theme.spacing(2),
    right: theme.spacing(2),
    top: theme.spacing(2),
    bottom: theme.spacing(2),
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor: "#f50057",
    display: "flex",
    alignContent: "flex-start",
    flexDirection: "column",
  },
  delete: {
    textDecoration: "line-through",
  },
}));
export default function SpecialProductCard() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Avatar className={classes.avatar}>
            <Typography>Save</Typography>
            <b>30%</b>
          </Avatar>
        </CardContent>
        <CardMedia
          component="img"
          src="https://cdn.shopify.com/s/files/1/0251/6588/9645/products/GamePad_540x.jpg?v=1605238626"
          alt="product"
        />

        <CardContent className={classes.content}>
          <div className={classes.wrap}>
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
              component="h3"
            >
              Fixair Product Sample
            </Link>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className={classes.delete}
            >
              $33.00
            </Typography>
            <Typography variant="h5" color="secondary">
              $11.00
            </Typography>
            <Rating value="5" readOnly size="medium" />
          </div>

          <StyledLinearProgress />
        </CardContent>
        <CardActions className={classes.action}>
          <Button startIcon={<VisibilityIcon />}>Quick View</Button>
          <Button startIcon={<FavoriteBorderIcon />}>Wishlist</Button>
          <Button startIcon={<AddShoppingCartIcon />}>Add To Cart</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
