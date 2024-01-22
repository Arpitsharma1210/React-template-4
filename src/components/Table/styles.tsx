import { styled, css } from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  baseFontFamily,
  fontSize,
  fontWeight,
} from "../../theme/style.typography";
import { colors, brand } from "../../theme/style.palette";

export const StyledTableHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledTableTitle = styled.h2`
  display: flex;
  align-items: center;

  font-size: 22px;
  color: ${brand.secondary100};
  font-family: ${baseFontFamily};
  font-weight: ${fontWeight.semiBold};
  font-style: normal;
  margin: 0;
`;

export const StyledTableActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

export const StyledTableContainer = styled(TableContainer)`
  box-sizing: border-box;
  border-radius: 30px;
  padding: 30px 60px;
  background-color: ${colors.white};
  box-shadow: 0px 10px 60px 0px rgba(226, 236, 249, 0.5);
`;

export const StyledTable = styled(Table)`
  margin-bottom: 55px;
`;

export const StyledTableHead = styled(TableHead)``;

export const StyledTableBody = styled(TableBody)``;

export const StyledTableCell = styled(TableCell)`
  &.MuiTableCell-root {
    box-sizing: border-box;
    text-align: center;
    border: none;
    width: 100px;
    max-width: 100px;
    overflow: hidden; 
  }

  &.MuiTableCell-head {
    color: ${colors.grey100};
  }

  &.MuiTableCell-body {
    color: ${colors.black};
  }
`;

export const StyledTableRow = styled(TableRow)``;

export const StyledTableNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    color: ${colors.grey50};
    font-family: ${baseFontFamily};
    font-size: ${fontSize.b2};
    font-weight: ${fontWeight.regular};
  }
`;

export const StyledNavigationControl = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const StyledNavButton = styled.div<{
  navbutton?: boolean;
  selected?: boolean;
}>`
  box-sizing: border-box;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 30px;
  width: 25px;
  padding: 6px 10px;
  border-radius: 4px;
  color: ${colors.grey100};
  background: ${colors.grey10};

  ${({ selected }) =>
    selected &&
    css`
      color: ${colors.white};
      background: ${brand.secondary100};
    `}
`;
