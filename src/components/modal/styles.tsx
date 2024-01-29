import { styled, css } from "styled-components";
import { colors } from "../../theme/style.palette";
import { fontWeight } from "../../theme/style.typography";
import { Typography } from "@mui/material";

const CommonModalStyles = () => css`
  min-height: 300px;
  min-width: 300px;
  padding: 30px;
  background-color: ${colors.white};
  outline: none;
`;

const isEdgy = (edgy: boolean) => {
  if (edgy) {
    return css`
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    `;
  } else {
    return css`
      border-radius: 50px;
    `;
  }
};

export const StyledModalContentBox = styled.div<{
  $edgy?: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${CommonModalStyles()}
  ${({ $edgy }) => isEdgy($edgy)}
`;

export const StyledSliderModalContentBox = styled.div<{
  $edgy?: boolean;
}>`
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
  transform: translateX(100%);
  transition: transform 500ms ease;
  ${CommonModalStyles()}
  ${({ $edgy }) => isEdgy($edgy)}
`;

export const closeIconContainerStyles = {
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "11px",
};

export const StyledCloseIcon = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledContainer = styled.div<{ fitContent?: boolean }>`
  width: ${({ fitContent }) => (fitContent ? "fit-content" : "70%")};
  min-width: auto;
  margin: 0 auto;
  margin-top: 128px;
  ${({ fitContent }) =>
    fitContent &&
    css`
      max-width: auto;
    `}
`;
export const StyledHeaderContainer = styled.div`
  padding: 10px 20px;
`;
export const StyledHeading = styled(Typography)`
  color: ${colors.grey100};
`;
export const StyledSubHeading = styled(Typography)`
  color: ${colors.grey100};
  font-weight: ${fontWeight.medium} !important;
`;
export const StyledCloseContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.grey10};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const StyledHeadingImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledHeadingImg = styled.img`
  width: 72px;
`;
