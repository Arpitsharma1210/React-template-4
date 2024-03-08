import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "styled-components";
import { Typography } from '@mui/material';
import { colors } from "../../theme/style.palette";


export const StyledDatePicker = styled(DatePicker)<{fullWidth?:boolean; }>`

    .MuiInputBase-input{
        width : 100%;
        min-width: 344px;
    }
`
export const StyledInputContainer = styled.div`
    width : 100%;
    min-width: 344px;
`

export const StyledError = styled(Typography)`
    color : ${colors.danger};
    margin-top:8px !important;
`