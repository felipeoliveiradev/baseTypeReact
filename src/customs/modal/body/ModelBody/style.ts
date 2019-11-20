import { pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.div`
  flex :1 ;
  overflow: auto;
  display: block;
  p{
    font-weight: 300;
    font-size: ${pxToRem(15)};
    padding: 0 ${pxToRem(10)};
  }
`;
