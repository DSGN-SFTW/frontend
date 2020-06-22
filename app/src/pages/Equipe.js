import React from "react";
import styled from "styled-components";
import { FaUserCircle, FaLinkedin, FaGithub } from "react-icons/fa";

const EquipeContainer = styled.div`
  text-align: center;
  margin-top: 10%;
  justify-content: center;
  width: 20%;
  height: 70%;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px;
  border-radius: 10px;
  background-color: 
  margin-top: 20px;
`;

const IntegerName = styled.h1`
  font-size: 20px;
`;

const IntegerInfos = styled.ul`
  font-size: 15px;
`;

const ItemList = styled.li`
  list-style: none;
`;

const SocialMenu = styled.ul`
  font-size: 15px;
  margin: 5px 0;
`;

const SocialItem = styled.li`
  list-style: none;
  display: inline;
  margin: 5%;
`;

const Linkedin = styled.a`
  color: #2867b2;
  font-size: 30px;
`;
const Github = styled.a`
  color: #333;
  font-size: 30px;
`;
function Equipe() {
  return (
    <>
      <EquipeContainer>
        <FaUserCircle size="50px" />
        <IntegerName>Arthur Carneiro da Rocha</IntegerName>
        <IntegerInfos>
          <b>
            <ItemList>Habilidades</ItemList>
          </b>
          <ItemList>C - Estruturacao de Dados</ItemList>
          <ItemList>Algoritmos</ItemList>
          <ItemList>NodeJS</ItemList>
          <ItemList>ReactJS</ItemList>
          <ItemList>React Native</ItemList>
          <ItemList>Serverless</ItemList>
        </IntegerInfos>
        <SocialMenu>
          <SocialItem>
            <b>
              <Linkedin href="https://www.linkedin.com/in/Linkrthur-carneiro-153a9b169/">
                <FaLinkedin />
              </Linkedin>
            </b>
          </SocialItem>
          <SocialItem>
            <b>
              <Github href="https://github.com/NtkArt">
                <FaGithub />
              </Github>
            </b>
          </SocialItem>
        </SocialMenu>
      </EquipeContainer>
      <EquipeContainer>
        <FaUserCircle size="50px" />
        <IntegerName>Douglas Nadim Younes</IntegerName>
        <IntegerInfos>
          <b>
            <ItemList>Habilidades</ItemList>
          </b>
          <ItemList>C - Estruturacao de Dados</ItemList>
          <ItemList>Algoritmos</ItemList>
        </IntegerInfos>
        <SocialMenu>
          <SocialItem>
            <Linkedin href="https://www.linkedin.com/in/Linkrthur-carneiro-153a9b169/">
              <FaLinkedin />
            </Linkedin>
          </SocialItem>
          <SocialItem>
            <Github href="https://www.linkedin.com/in/Linkrthur-carneiro-153a9b169/">
              <FaGithub />
            </Github>
          </SocialItem>
        </SocialMenu>
      </EquipeContainer>
    </>
  );
}

export default Equipe;
