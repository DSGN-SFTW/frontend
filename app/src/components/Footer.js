import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const MenuItem = styled.li`
  display: inline;
  font-size: 20px;
  margin-left: 10px;
  text-decoration: none;
  float: left;
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

const SocialMenu = styled.div`
  font-size: 25px;
  width: auto;
  float: right;
  display: grid;
  grid-auto-flow: column
  grid-column-gap: 20px;
`;

const MainFooter = styled.footer`
  background-color: #2e5266;
  padding-top: 3em;
  bottom: 0;
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
`;

export default function Footer() {
  return (
    <MainFooter>
      <script
        src="https://kit.fontawesome.com/5a41c871a8.js"
        crossOrigin="anonymous"
      ></script>

      <NavBar>
        <Menu>
          <MenuItem>
            <Link to="/aulas">AULAS</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/exercicios">EXERCICIOS</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/sobre">SOBRE</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contato">CONTATO</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/equipe">EQUIPE</Link>
          </MenuItem>
          <SocialMenu>
            <FaFacebook />
            <FaGoogle />
          </SocialMenu>
        </Menu>
      </NavBar>
    </MainFooter>
  );
}
