import React, { useState } from "react";
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
import HeaderIconPlaceholder from "../../assets/images/smallLogo.png";
import messages from "../../messages";

const AuthWrapper: React.FC<{ children: any }> = ({ children }) => {
  const [headerImage, setHeaderImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setHeaderImage(imageUrl);
    }
  };

  return (
    <div className="AuthWrapper_screen" style={containerStyles}>
      <header style={headerStyles}>
        <label htmlFor="headerImageInput">
          <img
            style={imgStyles}
            src={"../../assets/images/smallLogo.png"}
            alt="Header Icon"
          />
        </label>
        
        <Typography style={headerTextStyles}>
          {messages?.heading?.blank}
        </Typography>
      </header>
      <div style={componentStyles} className="auth_screen_comp_container">
        {children}
      </div>

      <Typography sx={titleStyles}>
        <span style={titleModStyles}>{messages?.company?.companyTitle}</span>
        {messages?.company?.companyTitle2}
      </Typography>

      <div style={bannerContainerStyles}>
        <HoverAnimationWrapper>
          {/* <img style={bannerImgStyles} src={NoahBanner} alt="banner" /> */}
        </HoverAnimationWrapper>
      </div>
    </div>
  );
};

export default AuthWrapper;
