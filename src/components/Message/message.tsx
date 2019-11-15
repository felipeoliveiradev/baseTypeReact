import React from "react";

import { Container } from "./style";
import { IMessage } from "./types";
export const Message = (props: IMessage) => {
  const { image, title, subtitle } = props;
  return (
    <Container>
      <img src={image} alt="imagem" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </Container>
  );
};
