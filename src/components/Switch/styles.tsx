import { Switch } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../theme/style.palette";

export const IOSSwitch = styled(Switch).attrs(() => ({
  classes: {
    root: "root",
    switchBase: "switchBase",
    thumb: "thumb",
    track: "track",
    checked: "checked",
    focusVisible: "focusVisible",
  },
  disableRipple: true,
  focusVisibleClassName: "focusVisible",
}))`
  &.root {
    width: 48px;
    height: 22px;
    padding: 0;
    overflow: visible;
  }
  .switchBase {
    padding: 2px 2px 2px 3px;
    &.checked {
      transform: translateX(28px);
      padding: 2px 2px 2px 0px;
      color: ${colors.white};
      & + .track {
        background-color: ${colors.green30};
        opacity: 1;
        border: none;
        box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1) inset;
      }
    }
    &.focusVisible &.thumb {
      color: ${colors.green30};
      border: 6x solid ${colors.white};
    }
  }
  .thumb {
    width: 17px;
    height: 17px;
    filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  }
  & .track {
    border-radius: 13px;
    background-color: ${colors.white30};
    opacity: 1;
    box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1) inset;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  & input.PrivateSwitchBase-input.MuiSwitch-input {
    width: 220%;
    height: 105%;
    left: 0;
  }
  .checked {
  }
  .focusVisible {
  }
`;
