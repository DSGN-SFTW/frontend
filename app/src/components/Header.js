import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 1.5em;
  margin-top: 10px;
  color: #d3d0cb;
`;

const MenuItem = styled.li`
  display: inline;
  font-size: 20px;
  margin-left: 10px;
  text-decoration: none;
  float: right;
  margin-right: 50px;
`;

const Menu = styled.ul`
  margin-bottom: 10px;
`;

const NavBar = styled.div`
  background-color: #2e5266;
  padding: 20px;
  width: auto;
  height: auto;
`;

export default function Footer({ title }) {
  return (
    <header>
      <NavBar>
        <Title>{title}</Title>
        <Menu>
          <MenuItem>
            <Link to="/login">LOGIN</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cadastro">CADASTRO</Link>
          </MenuItem>
        </Menu>
      </NavBar>
    </header>
  );
}
