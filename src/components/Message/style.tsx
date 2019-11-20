import { pxToRem } from "helper";
import styled from "styled-components";
export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s linear;
  img {
    width: ${pxToRem(110)};
    height: ${pxToRem(106)};
    margin-left: auto;
    margin-right: auto;
    outline: none;
    border: none;
    transition: all 0.5s linear;
  }
  h3 {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: auto !important;
    font-size: ${pxToRem(24)};
    font-weight: 400;
    color: #5e347c;
    margin-bottom: 0 !important;
    max-width: ${pxToRem(290)};
    line-height: ${pxToRem(32)};
    transition: all 0.5s linear;
  }
  p {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: ${pxToRem(24)};
    font-weight: 400;
    color: #5e347c;
    margin-top: 0 !important;
    max-width: ${pxToRem(290)};
    line-height: ${pxToRem(32)};
    transition: all 0.5s linear;
  }
`;
