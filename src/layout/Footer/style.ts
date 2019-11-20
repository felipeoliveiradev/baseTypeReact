import { grid, pxToRem } from "helper";
import styled from "styled-components";
import { ITheme } from "styles/themes/type";
export const Container = styled.div`
  background: ${(props: ITheme) => props.theme.normal.black};
  padding: ${pxToRem(12)} ${pxToRem(15)};
`;

export const Inner = styled.div`
  ${grid()};
  display: flex;
  flex-direction: row;
  height: ${pxToRem(100)};
  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    p {
      text-align: left;
      color: ${(props: ITheme) => props.theme.normal.white};
      font-weight: 300;
      font-size: ${pxToRem(14)};
      text-align: center;
    }
  }
`;
