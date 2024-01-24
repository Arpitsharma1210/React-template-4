import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
 50% {
    transform: rotate(180deg) scale(1.5);
 }
 100% {
    transform: rotate(360deg);
 }
`;

export const StyledLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
  font-size: 100px;

  & > picture {
    position: absolute;
    height: 100px;
    width: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > img {
      display: block;
      height: 100%;
      width: 100%;
      animation: ${LoadingAnimation} 2s ease-in-out infinite;
      animation-delay: 0.8s;
    }
  }
`;
