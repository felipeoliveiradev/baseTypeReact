import { pxToRem } from "helper";
import styled from "styled-components";
import { ITheme } from "styles/themes/type";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  text-align: center;
  background-color: ${(props: ITheme) => props.theme.normal.white};
  z-index: 1;
  align-items: center;
  font-size: ${pxToRem(50)};
  justify-content: center;
  flex: 1;
  flex-direction: column;
  h1 {
    border-bottom: ${pxToRem(2)} dashed
      ${(props: ITheme) => props.theme.normal.black};
    font-weight: 300;
    margin:-${pxToRem(20)} auto 0 auto;
    @media (max-width: 767px){
      font-size: ${pxToRem(20)};
    }
  }
  h3{
    font-weight: 300;
    font-size: ${pxToRem(20)};
    @media (max-width: 767px){
      font-size: ${pxToRem(15)};
      padding: 0 ${pxToRem(10)};
    }
  }
`;
