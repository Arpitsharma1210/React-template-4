import { styled, css } from "styled-components";
import {
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
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
  color: ${brand.secondaryMain};
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

export const StyledTableCell = styled(TableCell) <{ isHeading?: boolean; clickable?: boolean; centerAlign?:boolean }>`
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
      background: ${brand.secondaryMain};
    `}
`;

export const StyledTableBody = styled(TableBody)`
    & tr:last-child {
        td {
            border-bottom : 0 !important;
        }
      }

`
export const StyledCellContainer = styled.div`
    display: flex;
    column-gap: 8px;
`
export const StyledLoadmoreContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
`
export const StyledLoadmoreCta = styled(Typography)`
    font-size : ${fontSize.b3};
    color : ${brand.primaryMain};
    cursor:pointer;
`
export const StyledActionListContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;

`
export const StyledActionItem = styled.div`
    color : ${brand.secondaryMain} !important; 
    cursor : pointer;
`
export const StyledNoDataInfoContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 120px;
`

export const StyledNoDataInfo = styled(Typography)`

`
export const StyledPaginationContainer = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
`
export const StyledPaginationLimitContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
`
export const StyledInfo = styled(Typography)`
    color : ${colors.grey100};
`

export const StyledSelectPage = styled(Select)`
      & .MuiSelect-select {
        padding: 8px 16px;
        padding-right: 40px !important;
        color : ${brand.secondaryMain} !important;
      }

      & .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${colors.grey25} !important;
      }

      & .MuiSvgIcon-root{
        color : ${brand.secondaryMain} !important;
      }
`
export const StyledPagesContainer = styled.div`
    display: flex;
    gap: 4px;
`
export const StyledPageContainer = styled.div<{active?:boolean;}>`
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 24px;
    cursor : pointer;
    background: ${colors.grey10};
    color : ${colors.grey100};
    ${({active})=>active&&css`
    background: linear-gradient(46deg, ${brand.primaryMain} 0%, ${brand.secondaryMain} 100%);
        color : ${colors.grey10};
    `}
`