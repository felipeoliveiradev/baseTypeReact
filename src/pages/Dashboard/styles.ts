import grid from "helper/grid/grid";
import pxToRem from "helper/scales/scales";
import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  margin-top: ${pxToRem(90)};
  padding-top: ${pxToRem(5)};
  text-align: center;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #f9f9f9;
  align-items: flex-start;
`;
export const Inner = styled.div`
  flex: 1;
  background: #ffffff;
  header {
    ${grid()};
    flex: 1;
    height: ${pxToRem(83)};
    padding: ${pxToRem(15)};
    p {
      font-size: ${pxToRem(14)};
      color: #595c5e;
      text-align: left;
    }
  }
`;
