import React from "react";
import { Container, Inner } from "./style";
import { IFooter } from "./types";

export const Footer = (props: IFooter) => {
  return (
    <Container>
      <Inner>
        <div>
          <p>Flup é uma ferramenta feita para você.</p>
        </div>
      </Inner>
    </Container>
  );
};
