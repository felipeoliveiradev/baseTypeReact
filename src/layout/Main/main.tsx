import React from "react";
import { Container } from "./style";
import { IMain } from "./types";

export const Main = (props: IMain) => {
  const {children} = props;
  return (
    <Container>
      {children}
    </Container>
  );
};
