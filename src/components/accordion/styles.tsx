import { styled, css } from "styled-components";
import {
  Typography,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { colors } from "../../theme/style.palette";

const IconCss = () => css`
  color: ${colors.black};
  font-size: 26px;
`;

export const AddIcon = styled(AddCircle)`
  ${IconCss()}
`;

export const CloseIcon = styled(RemoveCircle)`
  ${IconCss()}
`;

export const StyledTypography = styled(Typography)<{ expanded: boolean }>`
  &.MuiTypography-root {
    order: ${({ expanded }) => (expanded ? -69 : 69)};
  }
`;
