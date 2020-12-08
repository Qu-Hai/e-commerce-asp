import React from "react";
import Carousels from "react-elastic-carousel";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyItems: "space-between",
  },
  media: {
    maxHeight: 300,
    width: "auto",
  },
}));
export default function Carousel() {
  const classes = useStyles();
  return (
    <Carousels>
      <div className={classes.root}>
        <div>
          <Typography variant="h1" component="h2">
            TIMEPIECES THAT
          </Typography>
          <Typography variant="h1" component="h2">
            UP TO
          </Typography>
          <Typography variant="h1" component="h2">
            40% OFF
          </Typography>
        </div>
        <CardMedia
          className={classes.media}
          component="img"
          src="https://cdn.shopify.com/s/files/1/0251/6588/9645/files/Sounds_520x.png?v=1605234727"
          alt="asd"
        />
      </div>

      <div>2</div>
      <div>3</div>
    </Carousels>
  );
}
