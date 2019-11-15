import grid from "helper/grid/grid";
import pxToRem from "helper/scales/scales";
import styled from "styled-components";
export const Container = styled.div`
  background: #fff;
  height: ${pxToRem(90)};
  position: fixed;
  top:0;
  z-index:2;
  width: 100%;
`;

export const Inner = styled.div`
  ${grid()};
  flex: 1;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 0.905625rem;
  .left {
    display: flex;
    justify-content: flex-start;
    width: ${pxToRem(130)};
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    nav {
      flex: 1;
      justify-content: flex-start;
      list-style: none;
      height: 100%;
      display: flex;
      li {
        width: fit-content;
        height: ${pxToRem(15.97)};
        height: 100%;
        display: flex;
        align-items: center;
        border-top: 3px solid #fff;
        padding-left: ${pxToRem(14)};
        padding-right: ${pxToRem(14)};
        a {
          text-decoration: none;
          font-size: ${pxToRem(14)};
          color: #5e347c;
          text-transform: uppercase;
          &:target{
            color: #ffb300;
          }
        }
        &:hover {
          border-top: 3px solid #ffb300;
          transition: all 0.5s linear;
          a {
            color: #ffb300;
            &:target {
              color: #ffb300;
            }
          }
        }
      }
      @media (max-width: 767px) {
        display: none;
      }
    }

    button {
      border: none;
      box-shadow: none;
      background: transparent;
      text-align: center;
      justify-content: center;
      align-items: center;
      label {
        font-size: ${pxToRem(10)};
        color: #6a317f;
      }
      &.icon{
        display:none;
      }
      &:last-child{
       background: #ffb300;
       width: ${pxToRem(200)};
       height: ${pxToRem(50)};
       border-radius: ${pxToRem(8)};
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: ${pxToRem(14)};
       font-weight: 700;
       line-height: ${pxToRem(22)};
       letter-spacing: ${pxToRem(0.32)};
      color:#5E347C;
      outline: none;
      }
      @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        &.icon{
          display: flex;
        }
        &:last-child{
          display:none;
        }
      }
      &.logado {
        width: auto;
        display: flex;
        flex-direction: column;
        background: transparent;
        margin-right: 0;
      }
    }
  }
`;
