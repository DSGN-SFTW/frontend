import React from "react";
import styled from "styled-components";

const SobreContainer = styled.div`
  text-align: center;
  margin-top: 20%;
  justify-content: center;
  position: relative;
  width 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px;
  border-radius: 10px;
  background-color: 
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;

`;

const Title = styled.h1`
  font-size: 50px;
`;

const Text = styled.p`
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
`;
function Sobre() {
  return (
    <>
      <SobreContainer>
        <Title>Sobre</Title>
        <Text>
          O projeto 4code tem como missão ensinar adultos e idosos a Logica de
          programação e como maior foco a inserção destes no meio tecnológico.
        </Text>
        <br />
        <Text>
          Trabalhamos para despertar a vontade de estudar a área de tecnologia
          da informação em milhares de pessoas, porque acreditamos que a
          educação tem um impacto imediato capaz de reduzir a desigualdade e
          melhorar a vida dos brasileiros.
        </Text>
        <br />
        <Text>
          Começamos em 2020 como um projeto, da universidade da católica de
          Brasília, de educação online ajudando estudantes de forma simples e
          autoexplicativa a inserção na comunicação tecnológica.
        </Text>
        <br />
        <Text>
          Nossa plataforma é realmente simples de usar. Fazemos de tudo para que
          o ensino seja nosso foco principal e motivando sempre o aluno a
          entender seu progresso de ensino, mostrar que estamos Juntos nessa
          caminhada de aprendizado, também somos divertidos quando nos
          comunicamos.
        </Text>
        <br />
        <Text>
          Queremos que nossos alunos sintam prazer em aprender com a gente. Mas
          nem de longe usamos um tom de superioridade na nossa mensagem, somos
          amigos dos nossos alunos, onde eles tem sempre a abertura total pra se
          comunicar com nossa equipe de professores e até de programadores da
          plataforma, a fim de compartilharmos nossos conhecimentos sempre.
        </Text>
        <br />
      </SobreContainer>
    </>
  );
}

export default Sobre;
