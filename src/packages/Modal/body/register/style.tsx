import { pxToRem } from "helper";
import styled from "styled-components";

export const ModalInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  h3 {
    height: ${pxToRem(84)};
    padding: 0 ${pxToRem(15)};
    width: ${pxToRem(250)};
    font-size: ${pxToRem(24)};
    color: ${(props) => props.theme.color.purple.p100};
    line-height: ${pxToRem(30)};
    font-weight: 400;
    margin-bottom: ${pxToRem(27)};
  }
`;
export const Form = styled.form`
  flex: 1;
  width: auto;
  overflow-y: auto;
  padding: 0 ${pxToRem(15)} ${pxToRem(26)} ${pxToRem(15)};
  display: block;

  height: 300px;
  .middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: ${pxToRem(20)};
  }
  .bottom {
    height: ${pxToRem(37)};
  }
`;

export const InputGroup = styled.input``;
export const Button = styled.button`
  height: ${pxToRem(37)};
  width: 100%;
  background: ${(props) => props.theme.color.yellow.y200};
  border-radius: ${pxToRem(8)};
  border: none;
  outline: none;
  font-weight: 400;
  font-size: ${pxToRem(16)};
  text-transform: uppercase;
  color: ${(props) => props.theme.color.white.w100};
  font-family: "Nunito", sans-serif;

  &:disabled {
    background-color: ${(props) => props.theme.color.white.w200};
    color: ${(props) => props.theme.color.grey.g400};
  }
`;
