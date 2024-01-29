import { styled } from "styled-components";
import { colors } from "../../theme/style.palette";
import {
  baseFontFamily,
  fontSize,
  fontWeight,
} from "../../theme/style.typography";

export const StyledDataItem = styled.div`
  display: flex;

  & .imgContainer {
    height: 72px;
    width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${colors.yellowGradient};
    margin-right: 16.8px;

    & img {
      width: 30px;
      height: 30px;
      display: block;
    }
  }

  & .databox {
    & .title {
      color: ${colors.grey};
      font-family: ${baseFontFamily};
      font-size: ${fontSize.b3};
      font-weight: ${fontWeight.regular};
      line-height: 16.8px;
      margin-bottom: 4px;
    }

    & .data {
      color: ${colors.grey100};
      font-family: ${baseFontFamily};
      font-size: 28px;
      font-weight: ${fontWeight.semiBold};
      line-height: 28px;
      letter-spacing: -0.28px;
      margin-bottom: 4px;
    }

    & .stat {
      & span:first-child {
        font-size: 11px;
        font-weight: ${fontWeight.bold};
      }
      & span:nth-child(2) {
        font-size: 11px;
        font-weight: ${fontWeight.regular};
        line-height: ${fontSize.b2};
        margin-right: 1px;
      }
      & span:nth-child(3) {
        font-size: 12px;
        font-weight: ${fontWeight.regular};
        line-height: ${fontSize.b2}
      }
      &.inc {
        & span:first-child {
          color: ${colors.green5};
        }
      }
      &.dec {
        & span:first-child {
          color: ${colors.red10};
        }
      }
    }
  }
`;
