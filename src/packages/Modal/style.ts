import { pxToRem } from "helper";
import styled, { css, keyframes } from "styled-components";
import { ITheme } from "styles/themes/type";
import { IModalStyled } from "./type";

export const Container = styled.div`
  position: fixed;
  transform: ${(props: IModalStyled) => props.stateMoments === false ? "translateX(100%)" : "translateX(0%)"};
  background: ${(props: ITheme) => props.theme.normal.white};
  width: 100%;
  max-width: ${pxToRem(320)};
  right: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: none;
  z-index: 10;
  top: 0;
  display: flex !important;
  flex-direction: column;
  transition: all 0.5s linear;

  .bottom {
    height: calc(100% - ${pxToRem(52)});
    overflow: auto;
    display: flex !important;
  }
  @media (max-width: 414px) {
    max-width: 100%;
  }
`;
const rotate = keyframes`
 0%{
   opacity: 0;
   position: fixed;
 }
  50% {
    opacity: 0;
    filter: blur(0);
  }
  100% {
    opacity: 0.8;
  }
`;
export const ContainerBackground = styled.div`
  position: fixed;
  /* position: none; */
  display: ${(props: IModalStyled) =>
    props.stateMoments === false ? "none" : "flex"};
  background: ${(props: ITheme) => props.theme.normal.black};
  opacity: 0;
  ${(props: IModalStyled) =>
    props.stateMoments === false
      ? css``
      : css`
          animation: ${rotate} 0.8s forwards;
        `};
  width: 100%;
  right: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: none;
  z-index: 3;
  top: 0;
  flex-direction: column;
  transition: all 0.5s linear;
`;
