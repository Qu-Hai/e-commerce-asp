import React from "react";
import { useHistory } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StyledIconButton from "../../../utils/StyledIconButton";
import { PATH } from "../../../constants/path";
const useStyles = makeStyles(theme => ({
  root: { backgroundColor: theme.palette.background.default },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  media: {
    height: 0,
  },
  action: {
    paddingTop: 0,
    paddingBottom: 5,
    display: "flex",
    justifyContent: "flex-start",
  },
}));

export default function ProductCard() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/details");
  };
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.height}
          component="img"
          src="https://cdn.shopify.com/s/files/1/0251/6588/9645/products/GamePad_540x.jpg"
          alt="product"
        />
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="primary">
            Fixair Product Sample
          </Typography>
          <Typography variant="h6" color="secondary">
            $11.00
          </Typography>
          <Rating value="5" readOnly size="small" />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <Button
          startIcon={<AddShoppingCartIcon />}
          variant="outlined"
          size="small"
        >
          Add to cart
        </Button>
        <StyledIconButton title="Quick view">
          <VisibilityIcon />
        </StyledIconButton>
        <StyledIconButton title="Wishlist">
          <FavoriteBorderIcon />
        </StyledIconButton>
      </CardActions>
    </Card>
  );
}
