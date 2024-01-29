import { Typography } from '@mui/material';
import { css, styled } from 'styled-components';
import { brand, colors } from '../../theme/style.palette';
import { baseFontFamily, fontSize, fontWeight } from '../../theme/style.typography';



export const StyledContainer = styled.div`

`
export const StyledLabel = styled.label<{readOnly?:boolean; required?:boolean}>`
    display: block;
    margin-bottom : ${({readOnly})=>readOnly? 16 : 8}px;
    font-size: ${fontSize.b3};
    font-weight: ${fontWeight.medium};
    color : ${brand.textColour};

    ${({ required }) => required && css`
        &::after {
            content: '*';
            color: ${colors.red25}; 
            margin-left: 2px; 
        }
    `}

`
export const StyledInputContainer = styled.div`

`

export const StyledInput = styled.input<{ error?: boolean }>`
    width:100%;
    max-width : 384px;
    outline:none;
    border: 1px solid ${brand.textColour};
    background-color: ${brand.textColour};
    border-radius:6px;
    padding:10px 16px;
    font-size: ${fontSize.b2};
    font-weight: ${fontWeight.regular};
    font-family: ${baseFontFamily};
    color: ${brand.textColour};
    &:hover {
        border-color: ${brand.textColour};
    }
    &:focus {
        border-color: ${brand.textColour};
        background-color: ${colors.white};
        color: ${brand.textColour};
    }

    ${({ error }) => error && css`
        background-color: ${colors.red50};
        &:hover {
            border-color: ${colors.red50};
        }
        &:focus {
            border-color: ${colors.red50};
        }
    `}
    
`

export const StyledInputText = styled(Typography)<{disabled?:boolean}>`
    color : ${brand.textColour};
    cursor : pointer;
    ${({disabled})=>disabled&&css`
        color : ${brand.textColour};
        cursor : inherit;
    `}
`

export const StyledError = styled(Typography)`
    color : ${colors.red50};
    margin-top:8px !important;
 `