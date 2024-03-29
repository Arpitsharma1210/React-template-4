import styled from "styled-components";
import { Alert, Grid } from "@mui/material"
import { colors, brand } from "../../theme/style.palette";
import {
  fontSize,
  fontWeight,
  secondaryFontFamily,
} from "../../theme/style.typography";

export const StyledCandidateHeader = styled.h3`
  color: ${brand.secondaryMain};
  font-family: ${secondaryFontFamily};
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.medium};
  line-height: 50px;
  margin: 0 0 36px 0;
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  font-size: 16px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${colors.yellow30};
  background: ${brand.primaryMain};

  & i {
    margin-right: 18px;
  }

  & input {
    opacity: 0;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

export const StyledForm = styled.form`
display: grid;
gap: 15px;

& .MuiGrid-root { 
  padding:  5px;
}
`

export const StyledFormRow = styled(Grid)`
`
export const StyledFormRowItem = styled(Grid)`
    display : flex;
    flex : 1;
`

export const StyledFormError = styled(Alert)`
    width: 100% !important
`