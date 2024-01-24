import React from "react";
import {
  StyledTableNavigation,
  StyledNavigationControl,
  StyledNavButton,
} from "./styles";
import messages from "../../messages";

const TablePaginaton = () => {
  return (
    <StyledTableNavigation>
      <p>{messages?.pagination?.showingView} 1 to 8 of 256</p>
      <StyledNavigationControl>
        <StyledNavButton>&lt;</StyledNavButton>
        <StyledNavButton selected>1</StyledNavButton>
        <StyledNavButton>&gt;</StyledNavButton>
      </StyledNavigationControl>
    </StyledTableNavigation>
  );
};

export default TablePaginaton;
