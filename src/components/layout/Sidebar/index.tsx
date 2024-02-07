import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Right } from "../../../redux/reducers/auth";
import { routes } from "../../../utils";
import HeaderIconPlaceholder from "../../assets/images/smallLogo.png";

import {
  /* sidebar logo styles*/
  StyledSidebar,
  StyledLogoContainer,
  StyledLineBreak,

  /* menu and item styles */
  StyledMenuItemContainer,
  StyledMenuOption,
  StyledMenuItem,
  StyledMenuIconOuter,
  StyledMenuImgContainer,

  /* profile section styles */
  StyledSidebarEnd,

  /* generic styles */
  StyledText,
  StyledImg,
  StyledLink,
  AllMenuItems,
  StyledProfileContainer,
} from "./styles";
import { NameAvatar } from "../..";
import messages from "../../../messages";

const menuItems = [
  {
    key: "Dashboard",
    label: messages?.sidebar?.menuItems?.dashboard,
    icon: "dashboard",
    path: routes.dashboard.root,
    right: Right.DASHBOARD,
  },

  // Add sidebar menu items here
];

const getSelectedTab = () => {
  return localStorage.getItem("selectedTab");
};

const setSelectedTab = (value: string) => {
  localStorage.setItem("selectedTab", value);
};

const Sidebar = () => {
  const location = useLocation();
  const [tab, setTab] = React.useState<string>(
    getSelectedTab() || location.pathname
  );
  React.useEffect(() => {
    if (location.pathname) {
      setSelectedTab(location.pathname);
      setTab(getSelectedTab);
    }
  }, [location.pathname]);
  const profile = useSelector((state: any) => state.profile);

  return (
    <StyledSidebar className="sidebar">
      <StyledLogoContainer className="sidebar_logo" data-testid="sidebar-logo">
        <StyledImg
          src={"../../assets/images/smallLogo.png"}
          alt="sidebar logo"
        />
      </StyledLogoContainer>
      <StyledLineBreak className="sidebar_logo_linebreak" data-testid="sidebar-logo-linebreak"></StyledLineBreak>
      <AllMenuItems className="allMenu_items" data-testid="allMenu-items">
        <StyledMenuItemContainer className="menubar">
          {menuItems.map((menuItem, index) => (
            <StyledMenuOption key={index} className="menuItem_wrapper">
              <StyledLink to={menuItem.path}>
                <StyledMenuItem id={menuItem.key} className="menuItem">
                  <StyledMenuIconOuter
                    selected={tab === menuItem.path}
                    className="menuItem_icon_container"
                  >
                    <StyledMenuImgContainer className="menuItem_img_container">
                      <StyledImg
                        src={`/assets/images/${menuItem.icon}.png`}
                        alt="menu icon"
                        className="menuItem_img"
                      />
                    </StyledMenuImgContainer>
                  </StyledMenuIconOuter>
                  <StyledText>{menuItem.label}</StyledText>
                </StyledMenuItem>
              </StyledLink>
            </StyledMenuOption>
          ))}
        </StyledMenuItemContainer>

        <StyledSidebarEnd className="sidebar_end">
          <StyledLink to={routes.profile}>
            <StyledProfileContainer className="sidebar_profile">
              <NameAvatar
                alt="sidebar profile icon"
                name={""}
                height={65}
                width={65}
                fontSize={24}
              />
            </StyledProfileContainer>
          </StyledLink>
        </StyledSidebarEnd>
      </AllMenuItems>
    </StyledSidebar>
  );
};

export default Sidebar;
