import React, { useState } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  top: {
    width: 350,
    height: 350,
    margin: theme.spacing(2),
  },
  childrent: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "flex-start",
  },
  paper: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  bottom: {
    width: 50,
    height: 50,
  },
}));
const data = [
  {
    url:
      "https://cdn.shopify.com/s/files/1/0251/6588/9645/products/GamePad_540x.jpg",
  },
  {
    url:
      "https://cdn.shopify.com/s/files/1/0251/6588/9645/products/GamePad2_2048x2048.jpg",
  },
];
export default function ProductMedia() {
  const [image, setImage] = useState(data[0].url);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardMedia className={classes.top} image={image} alt="product" />
      <div className={classes.childrent}>
        {data.map((el, i) => (
          <Paper
            elevation={6}
            className={classes.paper}
            onClick={() => setImage(data[i].url)}
          >
            <CardMedia
              className={classes.bottom}
              image={el.url}
              alt="product"
            />
          </Paper>
        ))}
      </div>
    </div>
  );
}
