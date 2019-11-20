import { pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: flex-end;
    padding: ${pxToRem(10)} ${pxToRem(0)} ${pxToRem(0)} 0;
    align-items: center;
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
    button {
      border: none;
      outline: none;
      background: transparent;
      img {
        width: ${pxToRem(35)};
        height: ${pxToRem(35)};
      }
    }

`;
