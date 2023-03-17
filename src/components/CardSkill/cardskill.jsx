import React from "react";
import { Container, Content, Image } from "./styled";

export function CardSkill() {


  return (
    <Container>
      <Content>
        <Image
          src="https://imagepng.org/wp-content/uploads/2018/02/escudo-flamengo-1.png"
          alt="imagem skill"
        />
        <h2>Java</h2>
      </Content>
      <h4>Nível de conhecimento 10/10</h4>
    </Container>
  );
}
