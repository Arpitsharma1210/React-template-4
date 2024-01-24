import { styled, css } from "styled-components";
import { colors } from "../../theme/style.palette";

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
