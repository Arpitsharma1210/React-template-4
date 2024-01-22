import { colors, brand } from "../../theme/style.palette.js";
import { styled } from "styled-components";
import {
  baseFontFamily,
  fontSize,
  fontWeight,
  secondaryFontFamily,
} from "../../theme/style.typography.js";

export const StyledHeader = styled.div`
  color: ${brand.secondary100};
  font-family: ${secondaryFontFamily};
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.medium};
`;

export const StyledDate = styled.div`
  color: ${colors.grey300};
  font-family: ${baseFontFamily};
  font-size: ${fontSize.b2};
  font-weight: ${fontWeight.regular};
`;

export const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 65px;
`;

export const StyledSubHeading = styled.div`
  color: ${brand.secondary100};
  font-family: ${secondaryFontFamily};
  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.h4};
`;

export const StyledChip = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const StyledParagraph = styled.div`
  color: ${colors.grey100};
  font-family: ${baseFontFamily};
  font-size: ${fontSize.b1};
  font-weight: ${fontWeight.regular};
  line-height: 28px;
  margin-right: 25px;
`;
