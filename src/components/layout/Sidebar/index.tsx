import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Right } from "../../../redux/reducers/auth";
import { routes } from "../../../utils";
import HeaderIconPlaceholder from "../../assets/images/smallLogo.png";
import DashboardIcon from "../../../assets/images/sidebarDashboardIcon.svg";

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

const TotalSidebarRoutes = [routes.dashboard];

const menuItems = [
  {
    menuId: "1",
    IconImg: DashboardIcon,
    menuname: messages?.sidebar?.dashboard,
    path: routes.dashboard,
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
  const profile = useSelector((state: any) => state.profile);

  React.useEffect(() => {
    if (TotalSidebarRoutes.includes(location.pathname)) {
      setSelectedTab(location.pathname);
      setTab(getSelectedTab);
    }
  }, [location.pathname]);

  return (
    <StyledSidebar className="sidebar">
      <StyledLogoContainer className="sidebar_logo">
        <StyledImg src={"../../assets/images/smallLogo.png"} alt="sidebar logo" />
      </StyledLogoContainer>
      <StyledLineBreak className="sidebar_logo_linebreak"></StyledLineBreak>
      <AllMenuItems className="allMenu_items">
        <StyledMenuItemContainer className="menubar">
          {menuItems.map((menuItem, index) => (
            <StyledMenuOption key={index} className="menuItem_wrapper">
              <StyledLink to={menuItem.path}>
                <StyledMenuItem id={menuItem.menuId} className="menuItem">
                  <StyledMenuIconOuter
                    selected={tab === menuItem.path}
                    className="menuItem_icon_container"
                  >
                    <StyledMenuImgContainer className="menuItem_img_container">
                      <StyledImg
                        src={menuItem.IconImg}
                        alt="menu icon"
                        className="menuItem_img"
                      />
                    </StyledMenuImgContainer>
                  </StyledMenuIconOuter>
                  <StyledText>{menuItem.menuname}</StyledText>
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
