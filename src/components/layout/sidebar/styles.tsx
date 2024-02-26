import { styled, css } from "styled-components";
import {
  fontSize,
  fontWeight,
  tertiaryFontFamily,
} from "../../../theme/style.typography";
import { colors, brand } from "../../../theme/style.palette";
import { Link } from "react-router-dom";
import { respondTo } from "../../../theme/style.layout";

/* sidebar logo styles start */
export const StyledSidebar = styled.div`
  height: 100%;
  width: 88px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  background-color: ${colors.white};
  padding: 0 12px 0 12px;
  box-shadow: 0px 10px 60px 0px rgba(226, 236, 249, 0.5);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 2px;
  }
`;

export const StyledLogoContainer = styled.div`
  height: 24px;
  width: 34px;
  margin-top: 45px;
`;

export const StyledLineBreak = styled.div`
  width: 100%;
  border: 1px solid ${brand.secondaryMain};
  margin: 35px 0px 35px 0px;
  border-radius: 20px;
`;

export const AllMenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
`;
/* sidebar logo styles end */

/* Menu Item styles start */

export const StyledMenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  ${respondTo.screenHeight950} {
    gap: 30px;
    margin-bottom: 35px;
  }
`;

export const StyledMenuOption = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledMenuItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMenuIconOuter = styled.div<{ selected?: boolean }>`
  height: 40px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-bottom: 10px;

  ${({ selected }) =>
    !selected &&
    css`
      &:hover {
        background: ${brand.secondaryMain};
    `}

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${brand.primaryMain};
      background: ${brand.secondaryMain};
    `}
`;

export const StyledMenuImgContainer = styled.div`
  height: 35px;
  width: 35px;
`;
/* Menu Item Styles End */

/* sidebar profile styles start */
export const StyledSidebarEnd = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

/* sidebar profile styles end */

/* generic styles */
export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  display: block;
`;

export const StyledText = styled.p`
  text-align: center;
  color:${colors.black10};
  font-family: ${tertiaryFontFamily};
  font-size: ${fontSize.b3};
  font-weight: ${fontWeight.regular};
  line-height: 16px;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const StyledProfileContainer = styled.div`
  cursor: pointer;
`;