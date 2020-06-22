import React, { useState } from "react";
import styled from "styled-components";
import { Input, Select, MenuItem } from "@material-ui/core";
import api from "../services/api";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = styled.form`
  text-align: center;
  justify-content: center;
  width: 35%;
  height: 58%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px;
  background-color: 
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 25px;
  align-items: center;
`;

const FormTitle = styled.h3`
  font-size: 20px;
  padding-top: 10%;
  padding-bottom: 20%;
`;

async function handleSumbit(email, password, name, user_group) {
  console.log("handle user", email);
  console.log("handle pass", password);
  console.log("handle name", name);
  console.log("handle ug", user_group);
  Number(password);
  const response = await axios({
    method: "post",
    url: api.LINK_CADASTRO,
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      email,
      password,
      name,
      user_group
    }
  });
  return response;
}

function Cadastro() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user_group, setUserGroup] = useState("");

  const handleChanger = event => {
    setUserGroup(event.target.value);
    console.log("user group", user_group);
  };

  return (
    <>
      <Form>
        <FormTitle>Cadastro - 4code</FormTitle>
        <Label htmlFor="email">Email: </Label>
        <Input
          type="text"
          placeholder="Digite seu email"
          onChange={event => {
            setEmail(event.target.value);
          }}
        ></Input>
        <Label htmlFor="password">Senha:</Label>
        <Input
          type="text"
          placeholder="Digite sua senha"
          onChange={event => setPassword(event.target.value)}
          margin="dense"
        />
        <br />
        <br />
        <Label htmlFor="name">Nome: </Label>
        <Input
          type="text"
          placeholder="Confirmar email"
          onChange={event => {
            setName(event.target.value);
          }}
          margin="dense"
        />
        <Label>
          Grupo de Usuario:
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={user_group}
            onChange={handleChanger}
          >
            <MenuItem value={"aluno"}>ALUNO</MenuItem>
            <MenuItem value={"professor"}>PROFESSOR</MenuItem>
          </Select>
        </Label>
        <br />
        <br />
        <Input
          type="button"
          value="Enviar"
          onClick={event => {
            if (handleSumbit(email, password, name, user_group)) {
              event.preventDefault();
              return <Link to="/aulas"></Link>;
            }
          }}
        />
      </Form>
    </>
  );
}

export default Cadastro;
