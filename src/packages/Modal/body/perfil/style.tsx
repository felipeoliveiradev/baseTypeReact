import { Pencil } from "assets/icons";
import { pxToRem } from "helper";
import styled from "styled-components";

export const ModalInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.white.w100};

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
export const InfoCompany = styled.div`
  background-color: ${(props) => props.theme.color.white.w100};
  margin-bottom: ${pxToRem(9)};

  ul {
    list-style: none;
    padding: 0;
    flex: 1;
    margin: 0;
    li {
      display: flex;
      border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.color.white.w200};
      padding-top: ${pxToRem(10.5)};
      padding-bottom: ${pxToRem(12.5)};
      padding-left: ${pxToRem(13)};
      padding-right: ${pxToRem(13)};

      &:nth-child(1) {
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          &:nth-child(1) {
            background: ${(props) => props.theme.color.yellow.y200};
            width: ${pxToRem(36)};
            height: ${pxToRem(36)};
            border-radius: 50%;
            color: ${(props) => props.theme.color.purple.p100};
            font-weight: 700;
            font-size: ${pxToRem(16)};
          }
          &:nth-child(2) {
            padding-left: ${pxToRem(8)};
            color: ${(props) => props.theme.color.grey.p200};
            font-weight: 400;
            font-size: ${pxToRem(16)};
          }
        }
      }
      &:nth-child(n + 2) {
        div {
          &:nth-child(1) {
            width: auto;
            color: ${(props) => props.theme.color.grey.p200};
            font-size: ${pxToRem(12)};
          }
          &:nth-child(2) {
            flex: 1;
            color: ${(props) => props.theme.color.grey.p200};
            text-align: right;
            font-size: ${pxToRem(14)};
          }
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export const ContactCompany = styled.div`
background-color: ${(props) => props.theme.color.white.w100};
margin-bottom: ${pxToRem(9)};
ul{
  list-style: none;
  padding: 0;
  flex:1;
  margin: 0;
  li{
    display: flex;
    border-bottom: ${pxToRem(1)} solid #e4e4e4;
    padding-top: ${pxToRem(12.5)};
    padding-bottom: ${pxToRem(14.5)};
    padding-left: ${pxToRem(13)};
    padding-right: ${pxToRem(13)};
    &:nth-child(1){
      padding-top: ${pxToRem(5)};
      padding-bottom: ${pxToRem(5.5)};
      div{
          display: flex;
          justify-content: center;
          align-items: center;
        &:nth-child(1){
          img{
            width: ${pxToRem(24)};
            height: ${pxToRem(24)};
            outline: none;
            border:none;
          }
        }
        &:nth-child(2){
          padding-left: ${pxToRem(8)};
          color:${(props) => props.theme.color.grey.p200};
          font-weight: 700;
          font-size:${pxToRem(12)};

        }
      }
    }
    &:nth-child(n + 2){
      div{
        display: flex;
        align-items: center;
        &:nth-child(1){
            width: ${pxToRem(85)};
            color: ${(props) => props.theme.color.grey.p200};
            flex-wrap: wrap;
            font-size: ${pxToRem(12)};
            font-weight: 400;
            line-height: ${pxToRem(12)};
          }
        &:nth-child(2){
            flex:1;
            padding-left: ${pxToRem(0)};
            padding-left: ${pxToRem(15)};
            color: ${(props) => props.theme.color.grey.g300};
            text-align: right;
            font-size: ${pxToRem(12)};
            font-weight: 400;
            line-height: ${pxToRem(12)};
            width: 100px;
            word-break: break-all;
            justify-content: flex-end;
            span{
              background-color: ${(props) => props.theme.color.grey.g300};
              margin-left: ${pxToRem(8)};
              width: ${pxToRem(16)};
              height: ${pxToRem(16)};
              mask-image: url(${Pencil});
              mask-repeat: no-repeat;
              mask-size: contain;
              mask-position: center;
            }
        }
      }
    }
    &:nth-child(3){
      div{
        &:nth-child(2){
          span{
            width: ${pxToRem(20)};
            height: ${pxToRem(20)};
          }
        }
      }
    }
    &:last-child{
      border-bottom: none;
    }
  }
}

`;
export const ContactFinancial = styled.div`
background-color: ${(props) => props.theme.color.white.w100};
margin-bottom: ${pxToRem(9)};
ul{
  list-style: none;
  padding: 0;
  flex:1;
  margin: 0;
  li{
    display: flex;
    border-bottom: ${pxToRem(1)} solid #e4e4e4;
    padding-top: ${pxToRem(12.5)};
    padding-bottom: ${pxToRem(14.5)};
    padding-left: ${pxToRem(13)};
    padding-right: ${pxToRem(13)};
    &:nth-child(1){
      padding-top: ${pxToRem(5)};
      padding-bottom: ${pxToRem(5.5)};
      div{
          display: flex;
          justify-content: center;
          align-items: center;
        &:nth-child(1){
          img{
            width: ${pxToRem(24)};
            height: ${pxToRem(24)};
            outline: none;
            border:none;
          }
        }
        &:nth-child(2){
          padding-left: ${pxToRem(8)};
          color:${(props) => props.theme.color.grey.p200};
          font-weight: 700;
          font-size:${pxToRem(12)};

        }
      }
    }
    &:nth-child(n + 2){
      div{
        display: flex;
        align-items: center;
        &:nth-child(1){
            width: ${pxToRem(85)};
            color: ${(props) => props.theme.color.grey.p200};
            flex-wrap: wrap;
            font-size: ${pxToRem(12)};
            font-weight: 400;
            line-height: ${pxToRem(12)};
          }
        &:nth-child(2){
            flex:1;
            padding-left: ${pxToRem(20)};
            color: ${(props) => props.theme.color.grey.g300};
            text-align: right;
            font-size: ${pxToRem(12)};
            font-weight: 400;
            line-height: ${pxToRem(12)};
            width: 100px;
            word-break: break-all;
            justify-content: flex-end;
            span{
              background-color: ${(props) => props.theme.color.grey.g300};
              margin-left: ${pxToRem(8)};
              width: ${pxToRem(16)};
              height: ${pxToRem(16)};
              mask-image: url(${Pencil});
              mask-repeat: no-repeat;
              mask-size: contain;
              mask-position: center;
            }
        }
      }
    }
    &:last-child{
      border-bottom: none;
    }
  }
}

`;
