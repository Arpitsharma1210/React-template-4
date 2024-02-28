import { styled, css } from "styled-components";
import { Autocomplete } from "@mui/material";
import { brand, colors } from "../../../theme/style.palette";
import { fontSize, fontWeight } from "../../../theme/style.typography";

export const StyledAutoComplete = styled(Autocomplete)<{
  formatfor: "table" | "form";
}>`
  ${({ formatfor }) =>
    (formatfor === "table" &&
      css`
        width: 280px;
        background: ${colors.white25};
        border-radius: 10px !important;

        & .MuiInputBase-root {
          padding: 0px 38px 0px 9px !important;
        }

        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${colors.grey25};
          border-radius: 10px !important;
        }
      `) ||
    (formatfor === "form" &&
      css`
        width: 100%;
        min-width: 368px !important;
        & .MuiInputBase-input {
          padding: 14px 19px;
          height: 30px;
        }
        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${colors.grey100};
          border-radius: 6px !important;
        }
      `)}
`;
export const StyledChipContainer = styled.div`
    display: flex;
    padding: 2px 5px 2px 10px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 60px;
    background: ${brand.primaryMain};
    margin-right : 5px;
`

export const StyledChipLabel = styled.span`
    color : ${brand.primaryMain};
    font-size : ${fontSize.b2};
    font-weight : ${fontWeight.medium};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 72px;

`

export const StyledChipCloseContainer = styled.div`
    cursor : pointer;
    display : flex;
`