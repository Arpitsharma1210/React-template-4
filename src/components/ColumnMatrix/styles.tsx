import styled from "styled-components";
import { colors } from "../../theme/style.palette";
import { baseFontFamily, fontSize } from "../../theme/style.typography";

export const ColumnsContainer = styled.div`
  display: flex;
  column-gap: 175px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const IndividualField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FieldName = styled.div`
  font-size: ${fontSize.b1};
  font-family: ${baseFontFamily};
  line-height: 28px;
`;

export const FieldValue = styled.div`
  color: ${colors.grey100};
  font-family: ${baseFontFamily};
  font-size: ${fontSize.b2};
  line-height: 20px;
`;
