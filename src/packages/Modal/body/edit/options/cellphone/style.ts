import { pxToRem } from "helper";
import styled from "styled-components";

export const ModalInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 ${pxToRem(15)};
  h3 {
    font-size: ${pxToRem(10)};
    font-weight: 400;
    color: ${(props) => props.theme.color.purple.p100};
  }
  .inside {
    flex:1;
  }
  button{
    height: ${pxToRem(48)};
    background: ${(props) => props.theme.color.yellow.y100};
    text-align:center;
    vertical-align: middle;
    color: ${(props) => props.theme.color.white.w100};
    font-size: ${pxToRem(16)};
    outline: none;
    border: none;
    border-radius: ${pxToRem(8)};
    margin-bottom: ${pxToRem(8)};
  }
`;
export const Input = styled.input`
  font-weight: 200;
  color: ${(props) => props.theme.color.grey.g200};
  font-size:${pxToRem(24)};
  outline: none;
  border: none;
  overflow-y: auto;
`;