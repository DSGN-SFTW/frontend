import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 1.5em;
`;

const List = styled.li`
  display: inline;
  font-size: 20px;
  margin-left: 10px;
  text-decoration: none;
`;

export default function Header({ title }) {
  return (
    <header>
      <div className="header">
        <Title>{title}</Title>
        <ul className="nav-menu">
          <List>
            <Link to="/aulas">Aulas</Link>
            <Link to="/exercicios">Exercicios</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/equipe">Equipe</Link>
            <Link to="/contato">Contato</Link>
          </List>
        </ul>
      </div>
    </header>
  );
}
