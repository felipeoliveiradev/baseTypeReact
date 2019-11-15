import pxToRem from "helper/scales/scales";
import styled from "styled-components";
import { IImagem } from "./type";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  &.error {
    label {
      color: red;
    }
    .bodyInput {

      border-bottom-color: red;
      input {
        color: red;

      }
    }
    span{
      color: red;
    }
  }
  label {
    color: #898989;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(19)};
    font-weight: 600;
    letter-spacing: 0;
    text-align: center;
    vertical-align: center;
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 1.733125rem;
    transition: all 0.3s linear;
    z-index: 0;
    top: 0;
    &.up {
      top: -${pxToRem(26.5)};
      font-size: ${pxToRem(12)};
      transition: all 0.3s linear;
    }
  }
  .bodyInput {
    display: flex;
    z-index: 1;
    border-bottom: ${pxToRem(1)} solid #898989;
    span {
      width: ${pxToRem(27.73)};
      height: ${pxToRem(27.73)};
      display: flex;
      align-items: center;
    }
    input {
      border: none;
      width: 100%;
      position: relative;
      outline: none;
      font-size: ${pxToRem(16)};
      line-height: ${pxToRem(19)};
      font-weight: 600;
      letter-spacing: 0;
      z-index: 9;
      color: #4b4b4b;
      background-color: transparent;
      flex: 1;
      margin-bottom: -${pxToRem(5)};
      &::placeholder {
        color: #898989;
      }
    }
  }
  span {
    font-size: ${pxToRem(10)};
    line-height: ${pxToRem(30)};
    min-height: ${pxToRem(40)};
  }
`;
export const Icone = styled.div`
  width: ${pxToRem(16)};
  height: ${pxToRem(30)};
  line-height: ${pxToRem(19)};
  border: none;
  outline: none;
  background-color: ${(props: IImagem) => (!props.erro ? "#898989" : "red")};
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-image: url(${(props: IImagem) => (!props.image ? "" : props.image)});
`;
