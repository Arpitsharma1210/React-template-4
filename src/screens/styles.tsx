import styled from "styled-components";
import { brand, colors } from "../theme/style.palette";
import {
  fontSize,
  fontWeight,
  secondaryFontFamily,
} from "../theme/style.typography";

export const StyledCandidateHeader = styled.h3`
  color: ${brand.secondaryMain};
  font-family: ${secondaryFontFamily};
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.medium};
  line-height: 50px;
  margin: 0 0 36px 0;
`;

export const StyledScreenContainer = styled.div`
  overflow: hidden;
  display: flex;
  height: 100vh;
`;

export const StyledScreenComponentContainer = styled.div`
  overflow: auto;
  flex-grow: 2;
  padding: 40px 45px 10px 40px;
  background: ${colors.white10};
`;

export const StyledNotificationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 35px;
`;
