import React from "react";
import { styled } from "@mui/material/styles";
import { Tooltip as MaterialTooltip } from "@mui/material";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import {
  fontWeight,
  fontSize,
  quinaryFontFamily,
} from "../../theme/style.typography";
import { colors } from "../../theme/style.palette";

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MaterialTooltip {...props} arrow classes={{ popper: className }}/>
))({
  [`& .${tooltipClasses.arrow}`]: {
    color: colors.grey60,
    left: "30px !important",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    color: colors.white,
    backgroundColor: colors.grey60,
    fontSize: fontSize.b3,
    fontWeight: fontWeight.regular,
    fontFamily: quinaryFontFamily,
    lineHeight: "16px",
    padding: "10px",
    marginLeft: "-20px !important",
    marginTop: "8px !important",
  },
});

export default Tooltip;
