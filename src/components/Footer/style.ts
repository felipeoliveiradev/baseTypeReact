import { grid, pxToRem } from "helper";
import styled from "styled-components";
import { IStyleFooter } from "./types";
export const Container = styled.div`
  background: #5e347c;
  padding: ${pxToRem(12)} ${pxToRem(15)};
`;

export const Icon = styled.a`
  width: ${pxToRem(35)};
  height: ${pxToRem(35)};
  background: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${pxToRem(1)} solid #fff;
  color: #fff;
  transition: all 0.5s linear;
  &:hover {
    border-color: #ffb300;
    div {
      background-color: #ffb300;
    }
  }
`;

export const Image = styled.div`
  background-color: #fff;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  mask: url(${(props: IStyleFooter) => props.icone});
  mask-repeat: no-repeat;
  mask-size: auto;
  mask-position: center;
  transition: all 0.5s linear;
`;

export const Inner = styled.div`
  ${grid()};
  display: flex;
  flex-direction: row;
  height: ${pxToRem(200)};
  justify-content: center;
  align-items: center;
  .left {
    max-width: 300px;
    .topo {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      height: 100%;
      img {
        width: fit-content;
        margin-bottom: ${pxToRem(30)};
      }
      p {
        text-align: left;
        color: #fff;
        font-weight: 300;
        font-size: ${pxToRem(14)};
      }
      @media (max-width: 767px) {
      }
    }
    @media (max-width: 767px) {
      .topo {
        align-items: center;
        img {
          margin-top: ${pxToRem(30)};
        }
        p {
          text-align: center;
        }
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    .middle {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      padding-bottom: ${pxToRem(35.5)};
    }
    .bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: ${pxToRem(35.5)};
      text-transform: center;
      hr {
        width: 100%;
        display: none;
        border: none;
        background: #8554e0;
        height: ${pxToRem(1)};
        @media (max-width: 767px) {
          display: block;
        }
      }

      span {
        color: #fff;
        font-weight: 400;
        font-size: ${pxToRem(12)};

        @media (max-width: 767px) {
          font-size: ${pxToRem(9.5)};
        }
      }
    }
    @media (max-width: 767px) {
      flex-direction: column;
      .bottom {
        hr {
          margin-bottom: ${pxToRem(40)};
        }
      }
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }
`;
