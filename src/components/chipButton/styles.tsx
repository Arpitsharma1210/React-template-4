import { styled, css } from "styled-components";
import {
  fontSize,
  baseFontFamily,
  fontWeight,
} from "../../theme/style.typography.js";
import { brand, colors } from "../../theme/style.palette.js";

type ButtonEnum = {
  [key: string]: {
    color: string;
    bgColor: string;
    borderColor: string;
  };
};

const Buttons: ButtonEnum = {
  yellow: {
    color: colors.yellow10,
    bgColor: brand.primaryMain,
    borderColor: brand.secondaryMain,
  },
  yellow2: {
    color: colors.yellow10,
    bgColor: colors.yellow50,
    borderColor: colors.yellow10,
  },
  green: {
    color: colors.green5,
    bgColor: colors.green25,
    borderColor: colors.green5,
  },
  blue: {
    color: colors.blue10,
    bgColor: colors.blue25,
    borderColor: colors.blue10,
  },
  red: {
    color: colors.red10,
    bgColor: colors.red50,
    borderColor: colors.red10,
  },
  orange: {
    color: colors.orange10,
    bgColor: colors.orange25,
    borderColor: colors.orange10,
  },
  white: {
    color: colors.grey100,
    bgColor: colors.white25,
    borderColor: colors.grey100,
  },
  purple: {
    color: colors.purple10,
    bgColor: colors.purple25,
    borderColor: colors.purple10,
  },
  grey:{
    color: colors.blackExtra,
    bgColor: colors.grey10,
    borderColor: colors.grey100,
  }
};

export const StyledButton = styled.button<{ color: string; size?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  border-radius: 4px;
  font-weight: ${fontWeight.regular};
  font-family: ${baseFontFamily};
  ${({ color }) => css`
    border: 1px solid ${Buttons[color].borderColor};
    color: ${Buttons[color].color};
    background-color: ${Buttons[color].bgColor};
  `}
  ${({ size }) =>
    (size === "sm" &&
      css`
        min-height: 23px;
        padding: 2px 6px;
        font-size: ${fontSize.b3};
        line-height: 16px;
      `) ||
    (size === "md" &&
      css`
        min-height: 28px;
        padding: 4px 12px;
        font-size: ${fontSize.b2};
        line-height: 19px;
      `)}
`;
