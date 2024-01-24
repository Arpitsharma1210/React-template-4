import { styled } from "styled-components";
import {
  fontWeight,
} from "../../theme/style.typography";


export const StyledButtonTextWrapper = styled.div<{ $bold?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: ${({ $bold }) =>
    $bold === "true" ? "bold" : fontWeight.regular};
`;
