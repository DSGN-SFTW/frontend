import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "@material-ui/core";
import api from "../services/api";
import axios from "axios";
import { Redirect } from "react-router-dom";

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

async function handleSumbit(email, password) {
  console.log("handle user", email);
  console.log("handle pass", password);
  Number(password);
  await axios({
    method: "post",
    url: api.LINK_LOGIN,
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      email,
      password
    }
  });
}

// handle;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Form>
        <FormTitle>Login - </FormTitle>
        <Label htmlFor="email">Usuario:</Label>
        <Input
          type="text"
          placeholder="Digite seu email"
          onChange={event => {
            setEmail(event.target.value);
          }}
        ></Input>
        <br />
        <br />
        <Label htmlFor="password">
          Senha:
          <Input
            type="text"
            placeholder="Digite sua senha"
            onChange={event => setPassword(event.target.value)}
            margin="dense"
          />
        </Label>
        <br />
        <Input
          type="button"
          value="Login"
          onClick={() => {
            handleSumbit(email, password);
          }}
        />
      </Form>
    </>
  );
}

export default Login;
