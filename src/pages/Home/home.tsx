import React from "react";
import { Container } from "./style";
import { IHome } from "./type";
export const Home = (props: IHome) => {
  return (
    <>
      <Container>
        <h1>Hello Word!</h1>
        <h3>O Sistema ja foi instalado, agora só usar </h3>
      </Container>
    </>
  );
};
