import styled from "styled-components";
import pxToRem from "helper/scales/scales";

export const ModalInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  h3 {
    height: ${pxToRem(84)};
    padding: 0 ${pxToRem(15)};
    width: ${pxToRem(250)};
    font-size: ${pxToRem(24)};
    color: #5e347c;
    line-height: ${pxToRem(30)};
    font-weight: 400;
    margin-bottom: ${pxToRem(27)};
  }
`;