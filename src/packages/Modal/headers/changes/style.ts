import { pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    padding: ${pxToRem(10)} ${pxToRem(0)} ${pxToRem(10)} 0;
    align-items: center;
    box-shadow: 0px -1px 12px 9px rgba(106,49,127,0.1);
    margin-bottom: ${pxToRem(30)};
    div{
      flex:1;
    }
    h3{
      flex:1;
      font-weight: 700;
      font-size: ${pxToRem(16)};
      text-transform: uppercase;
      margin: 0;
      padding:0;
      color:${(props) => props.theme.color.purple.p100};
    }
    span{
      align-items: center;
      justify-content: center;
      display: flex;
      color: ${(props) => props.theme.color.purple.p100};
      font-weight: 400;
      font-size: ${pxToRem(14)};
      margin-right: ${pxToRem(15)};
    }
    button {
      border: none;
      outline: none;
      background: transparent;
      img {
        width: ${pxToRem(35)};
        height: ${pxToRem(35)};
        transform: rotate(90deg);
      }
    }

`;
