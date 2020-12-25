import React from "react";
import StyledIconButton from "../../../utils/StyledIconButton";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const GroupButton = () => {
  const classes = useStyles();
  return (
    <div>
      <StyledIconButton
        btnClassName={classes.button}
        title="Compare"
        badgeContent="0"
      >
        <RepeatIcon />
      </StyledIconButton>
      <StyledIconButton
        btnClassName={classes.button}
        title="Favorite"
        badgeContent="0"
      >
        <FavoriteBorderIcon />
      </StyledIconButton>
      <StyledIconButton
        btnClassName={classes.button}
        title="Cart"
        badgeContent="0"
      >
        <ShoppingCartIcon />
      </StyledIconButton>
    </div>
  );
};

export default GroupButton;
