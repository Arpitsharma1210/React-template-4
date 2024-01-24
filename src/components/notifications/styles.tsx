import { styled } from "styled-components";
import { Popover } from "@mui/material";
import { brand, colors } from "../../theme/style.palette.js";
import {
  baseFontFamily,
  fontSize,
  fontWeight,
} from "../../theme/style.typography";

export const StyledPopover = styled(Popover)`
  /* Wrapper for notification popover */
  .MuiPaper-root {
    color: ${brand.secondaryMain};
    width: 440px;
    height: 407px;
    border-radius: 11px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
`;

export const StyledWrapperHeader = styled.div`
  box-sizing: border-box;
  color: ${colors.blue200};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 12px 16px;

  & > div {
    display: flex;
    gap: 6px;
    align-items: center;

    & > header {
      font-size: ${fontSize.b2};
      font-family: ${baseFontFamily};
      font-weight: ${fontWeight.regular};
    }
  }
`;

export const StyledNotifications = styled.div`
  height: calc(100% - 45px);
  overflow-y: scroll;
`;

export const StyledNotification = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  padding: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.grey25};
  }

  figure {
    height: 32px;
    width: 32px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 16px 0 0;

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  & > .notification-content {
    font-size: ${fontSize.b2};

    p {
      color: ${colors.blue200};
      margin: 0;
      margin-bottom: 16px;
    }

    time {
      color: ${colors.grey200};
      font-weight: ${fontWeight.medium};
      margin: 0;
    }
  }

  .readIcon {
    position: absolute;
    top: 8px;
    left: 8px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    border: 1px solid ${colors.blue35};
    background-color: ${colors.blue30};
  }
`;
