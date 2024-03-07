import { styled, css } from "styled-components";
import { colors } from "../../theme/style.palette.js";
import {
  secondaryFontFamily,
  fontWeight,
  fontSize,
} from "../../theme/style.typography.js";

export const PopupHeader = styled.h3`
  font-size: ${fontSize.h3};
  font-family: ${secondaryFontFamily};
  font-weight: ${fontWeight.medium};
  color: ${colors.purple100};
  line-height: 50px;
  margin: 0px;
`;

export const ContentWrapper = styled.div<{ $disableClose?: boolean }>`
  width: 427px;
  height: 312px;
  ${({ $disableClose }) =>
    $disableClose &&
    css`
      height: 355px;
    `}
`;

export const ContentMain = styled.div<{ $center?: boolean }>`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 350px;
  ${({ $center }) =>
    $center &&
    css`
      justify-content: center;
    `}
`;

export const StyledIconContainer = styled.div<{ $margin?: boolean }>`
  display: flex;
  justify-content: center;

  ${({ $margin }) =>
    $margin &&
    css`
      margin: 24px;
    `}
`;

export const StyledIcon = styled.img`
  display: block;
  height: 80px;
  width: 80px;
`;

export const PopupText = styled.p`
  font-size: ${fontSize.b1};
  font-weight: ${fontWeight.regular};
  line-height: 28px;
  color: ${colors.grey100};
`;

export const PopupMsgText = styled.p`
  color: ${colors.red25};
  font-family: ${secondaryFontFamily};
  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.medium};
  line-height: 33px;
`;
