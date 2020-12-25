import React from "react";
import StyledIconButton from "../../../utils/StyledIconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
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
      <StyledIconButton btnClassName={classes.button} title="Contacts">
        <PeopleAltIcon />
      </StyledIconButton>
      <StyledIconButton btnClassName={classes.button} title="Notifications">
        <NotificationsIcon />
      </StyledIconButton>
      <StyledIconButton
        btnClassName={classes.button}
        title="Chat"
        badgeContent="5"
      >
        <ChatBubbleIcon />
      </StyledIconButton>
    </div>
  );
};

export default GroupButton;
