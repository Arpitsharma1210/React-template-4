import { styled } from "styled-components";
import { brand, colors } from "../../../theme/style.palette";
import {
  fontSize,
  fontWeight,
  quaternaryFontFamily,
  secondaryFontFamily,
} from "../../../theme/style.typography";

export const StyledComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledNavigationContainer = styled.div`
  & button.MuiButton-root {
    font-size: 22px;
    margin-left: -10px;
    font-family: ${quaternaryFontFamily};
    font-weight: ${fontWeight.medium};
    color: ${colors.black};
  }
  margin-bottom: 35px;
`;

export const StyledHeaderTextContainer = styled.div`
  margin-bottom: 6px;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  column-gap: 25px;
  margin-bottom: 5px;

  & h2 {
    color: ${brand.secondary100};
    font-family: ${secondaryFontFamily};
    font-size: ${fontSize.h2};
    font-weight: ${fontWeight.bold};
    margin: 0px 0px 6px;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 18px;
`;
