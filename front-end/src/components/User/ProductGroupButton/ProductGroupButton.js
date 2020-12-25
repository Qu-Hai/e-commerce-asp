import React from "react";
import StyledIconButton from "../../utils/StyledIconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function ProductGroupButton() {
  return (
    <div>
      <StyledIconButton title="Quick view">
        <VisibilityIcon />
      </StyledIconButton>
      <StyledIconButton title="Wishlist">
        <FavoriteBorderIcon />
      </StyledIconButton>
      <StyledIconButton title="Add to cart">
        <AddShoppingCartIcon />
      </StyledIconButton>
    </div>
  );
}
