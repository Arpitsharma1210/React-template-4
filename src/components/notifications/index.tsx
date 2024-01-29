import React from "react";
import { IconButton, Badge } from "@mui/material";
import { Button } from "../";
import { StyledPopover, StyledWrapperHeader } from "./styles";
import NotificationBellIcon from "../../assets/images/notificationBell.png";
import OutlineIcon from "../../assets/images/notifyOutlineIcon.svg";
import messages from "../../messages";

const NotificationComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <IconButton
        color="inherit"
        aria-controls="notification-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <Badge badgeContent={0} color="error">
          <img src={NotificationBellIcon} alt="Notification Bell" />
        </Badge>
      </IconButton>
      <StyledPopover
        id="notification-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <StyledWrapperHeader>
          <div>
            <header>{messages?.heading?.notifications}</header>
          </div>
          <Button variant="text">
            {messages?.button?.markAllRead} <img src={OutlineIcon} alt="Outline Icon" />
          </Button>
        </StyledWrapperHeader>
        {/* Simplified notification content */}
        <div style={{ padding: "16px" }}>
          <p>This is a simple notification message.</p>
        </div>
      </StyledPopover>
    </div>
  );
};

export default NotificationComponent;
