import { styled, css } from "styled-components";
import { Link } from "react-router-dom";
import {
  baseFontFamily,
  fontSize,
  fontWeight,
} from "../../theme/style.typography";
import { colors, brand } from "../../theme/style.palette";

export const StyledFieldLabel = styled.p<{ required?: boolean }>`
  font-family: ${baseFontFamily};
  color: ${brand.secondaryMain};
  font-size: ${fontSize.b2};
  font-weight: ${fontWeight.medium};
  margin: 0;
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: "*";
        color: ${colors.red10};
        margin-left: 3px;
      }
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.grey100};
  font-family: ${baseFontFamily};
  font-size: ${fontSize.b3};
  font-weight: ${fontWeight.medium};
`;
