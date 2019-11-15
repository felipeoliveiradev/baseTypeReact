import {Facebook, Instagram, LogoYellow, Twitter, Youtube} from "assets/images";
import React from "react";
import { Container, Icon, Image, Inner } from "./style";
import { IFooter } from "./types";

export const Footer = (props: IFooter) => {
  return (
    <Container>
      <Inner>
      <div className="left">

      <div className="topo">
        <img src={LogoYellow} alt="logo" />
        <p>Somos a emDia, uma plataforma que oferece a melhor experiência de renegociação de dívidas para quem precisa. Estamos aqui para facilitar a sua vida.</p>
      </div></div>

      <div className="right">
      <div className="middle">
        <Icon
          href="https://www.facebook.com/euemdia"
          target="_blank"
          id="Footerfacebook"
        >
          <Image icone={Facebook} />
        </Icon>
        <Icon
          href="https://twitter.com/euemdia"
          target="_blank"
          id="Footertwitter"
        >
          <Image icone={Twitter} />
        </Icon>
        <Icon
          href="https://www.instagram.com/euemdia/"
          target="_blank"
          id="Footerinstagram"
        >
          <Image icone={Instagram} />
        </Icon>
        <Icon
          href="https://www.youtube.com/channel/UCRcydajqfzcVh02mp5iKqTw"
          target="_blank"
          id="Footeryoutube"
        >
          <Image icone={Youtube} />
        </Icon>
      </div>
      <div className="bottom">
        <hr />
        <span>CNPJ: 17.253.589/001-32.</span>
        <span>©2019 Atual | emDia. Todos os direitos reservados.</span>
      </div>
      </div>
      </Inner>
    </Container>
  );
};
