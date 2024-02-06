import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ChipSize, StyledChipContainer, StyledChipContainerProps, StyledChipText } from "./styles";



interface Props extends StyledChipContainerProps{
    text : string;
    iconCtaClick ? :()=>void;
    chipSize?:ChipSize;
}

const Chip:React.FC<Props> = ({
    text, iconCtaClick,
    bgColor, textColor,
    chipSize
})=>{

    return (
        <StyledChipContainer bgColor={bgColor} textColor={textColor} data-testid="chip-container">
            <StyledChipText chipSize={chipSize}>
               {text}
            </StyledChipText>
            {iconCtaClick && <CloseRoundedIcon data-testid="close-icon"
                fontSize="small"
                style={{ cursor: 'pointer' }}
                onClick={iconCtaClick}
            />}
        </StyledChipContainer>
    )
}

export default Chip;