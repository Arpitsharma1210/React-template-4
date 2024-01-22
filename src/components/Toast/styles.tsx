import { styled } from "styled-components";
import { fontSize, fontWeight } from "../../theme/style.typography";
import { colors } from "../../theme/style.palette";

export const StyledToastContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;

  figure {
    width: 32px;
    height: 32px;
    margin: 0;
    margin-right: 12px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .toast-text {
    margin-right: 75px;

    &-maintext {
      font-size: ${fontSize.b1};
      font-weight: ${fontWeight.medium};
      color: ${colors.black15};
      margin: 0;
    }

    &-subtext {
      font-size: ${fontSize.b2};
      color: ${colors.black20};
      margin: 0;
    }
  }

  .closeBtn {
    align-self: flex-start;
  }
`;
