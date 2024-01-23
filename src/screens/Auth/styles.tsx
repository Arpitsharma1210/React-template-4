import styled, { keyframes } from "styled-components";
import { brand } from "../../theme/style.palette";
import {
  baseFontFamily,
  fontSize,
  fontWeight,
  secondaryFontFamily,
} from "../../theme/style.typography";
import { Avatar } from "@mui/material";
import { respondTo } from "../../theme/style.layout";
import { colors } from "../../theme/style.palette";

export const containerStyles = {
  minHeight: "100vh",
  padding: "10px",
};

export const headerStyles = {
  display: "flex",
  gap: "10px",
  paddingLeft: "45px",
  marginBottom: "40px",
};

export const imgStyles = {
  width: "60px",
};

export const headerTextStyles = {
  color: brand.secondaryMain,
  fontWeight: fontWeight.bold,
  fontFamily: secondaryFontFamily,
  fontSize: "40px",
  display: "flex",
  alignItems: "center",
  lineHeight: "normal",
};

export const componentStyles = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap" as "wrap",
  marginBottom: "60px",
};

export const titleStyles = {
  color: brand.secondaryMain,
  fontFamily: secondaryFontFamily,
  fontWeight: fontWeight.bold,
  fontSize: "130px",
  textAlign: "center",
  lineHeight: "normal",
  marginBottom: "30px",
};

export const titleModStyles = {
  fontWeight: 300,
  WebkitTextStroke: "1px",
  WebkitTextFillColor: "transparent",
  paddingRight: "30px",
};

export const bannerContainerStyles = {
  height: "auto",
  margin: "0 auto",
};

export const bannerImgStyles = {
  display: "block",
  width: "100%",
  height: "100%",
};

export const StyledCard = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const StyledLogo = styled.img`
  vertical-align: bottom;
  position: absolute;
  left: 0;
  margin-left: 50px;

  ${respondTo.lgDown} {
    display: none;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-grow: 1;
  flex-direction: column;

  ${respondTo.mdDown} {
    padding: 20px;
  }
`;

export const StyledFormHeader = styled.div`
  font-family: ${secondaryFontFamily};
  font-size: ${fontSize.h2};
  font-weight: ${fontWeight.medium};
  margin-bottom: 20px;

  ${respondTo.mdDown} {
    font-size: 30px;
  }
  ${respondTo.smOnly} {
    font-size: 24px;
    margin-bottom: 25px;
  }
`;

export const StyledInstruction = styled.div`
  font-family: ${baseFontFamily};
  font-size: ${fontSize.b2};
  font-weight: ${fontWeight.regular};
  margin: 15px 0px 20px 0px;
`;

export const StyledFormItems = styled.div`
  display: flex;
  gap: 30px;

  ${respondTo.mdDown} {
    flex-direction: column;
  }
`;

export const StyledButton = styled.div`
  margin-top: 50px;
`;

export const StyledImageContainer = styled.div`
  width: 700px;

  ${respondTo.lgDown} {
    display: none;
  }
`;

export const StyledRegisterContainer = styled.div`
  display: flex;
`;
export const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    height: 200px;
    width: 200px;
    border: 2px solid ${colors.black};
    border-style: dashed;
    color: ${colors.black10};
    background-color: ${colors.yellow50};

    ${respondTo.mdDown} {
      height: 150px;
      width: 150px;
    }
    ${respondTo.smOnly} {
      height: 120px;
      width: 120px;
    }
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const StyledLeftImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const LevitateAnimation = keyframes`
0% {
  top: -5px
}
25% {
  top: 0px
}
50% {
  top: 5px;
}
75% {
  top: 0px;
}
100% {
  top: -5px;
}
`;

export const HoverAnimationWrapper = styled.div`
  position: relative;
  animation: ${LevitateAnimation} 2.5s linear infinite;
`;
