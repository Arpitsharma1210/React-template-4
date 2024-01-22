import React from "react";
import { Typography } from "@mui/material";
import {
  containerStyles,
  headerStyles,
  imgStyles,
  headerTextStyles,
  componentStyles,
  titleStyles,
  titleModStyles,
  bannerContainerStyles,
  bannerImgStyles,
  HoverAnimationWrapper,
} from "./styles";
import HeaderIcon from "../../assets/images/noah_logo.svg";
import NoahBanner from "../../assets/images/noah_banner.png";
import messages from "../../messages";

const AuthWrapper: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="AuthWrapper_screen" style={containerStyles}>
      <header style={headerStyles}>
        <img style={imgStyles} src={HeaderIcon} alt="Noah" />
        <Typography style={headerTextStyles}>
          {messages?.company?.companyName}
        </Typography>
      </header>
      <div style={componentStyles} className="auth_screen_comp_container">
        {children}
      </div>

      <Typography sx={titleStyles}>
        <span style={titleModStyles}>{messages?.company?.companyTitle}</span>{" "}
        {messages?.company?.companyTitle2}
      </Typography>

      <div style={bannerContainerStyles}>
        <HoverAnimationWrapper>
          <img style={bannerImgStyles} src={NoahBanner} alt="banner" />
        </HoverAnimationWrapper>
      </div>
    </div>
  );
};

export default AuthWrapper;
