import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/reducers";
import { StyledLoaderContainer } from "./styles";
import NoahLogo from "../../assets/images/noah_logo.svg";

const Loader = () => {
  const loaderState = useSelector((state: ReduxState) => state.loader);
  return (
    loaderState.visibility && (
      <StyledLoaderContainer data-testid="loader-container">
        <picture>
          <img src={NoahLogo} alt="noah logo loader" />
        </picture>
      </StyledLoaderContainer>
    )
  );
};

export default Loader;
