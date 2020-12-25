import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  buttonSecond: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  input: {
    maxWidth: 50,
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  parent: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
}));
export default function ProductTitle() {
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    if (count === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    console.log(disabled);
  }, [disabled, count]);
  const handleClickDown = () => {
    setCount(count - 1);
  };
  const handleClickUp = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Fixair Product Sample
      </Typography>
      <Divider />
      <Typography color="secondary" variant="h5" gutterBottom>
        $11.00
      </Typography>
      <Divider />
      <Rating value="5" size="large" />
      <Divider />
      <div className={classes.parent}>
        <IconButton
          disabled={disabled}
          aria-label="remove"
          onClick={handleClickDown}
        >
          <RemoveIcon />
        </IconButton>
        <TextField
          className={classes.input}
          variant="outlined"
          value={count}
          InputProps={{ readOnly: true }}
        />
        <IconButton aria-label="add" onClick={handleClickUp}>
          <AddIcon />
        </IconButton>
      </div>

      <Divider />
      <Button
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
        color="secondary"
        variant="contained"
        size="large"
      >
        Add to cart
      </Button>
      <Button
        className={classes.buttonSecond}
        startIcon={<FavoriteBorderIcon />}
        color="inherit"
        variant="outlined"
        size="large"
      >
        Add to wishlist
      </Button>
    </div>
  );
}
