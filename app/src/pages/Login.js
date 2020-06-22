import React from "react";
import styled from "styled-components";

const Form = styled.form`
  text-align: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px;
`;

const Label = styled.label`
  font-size: 20px;
`;

function Login() {
  return (
    <>
      <Form>
        <Label for="username">Nome de Usuario:</Label>
        <br />
        <input type="text" placeholder="Digite seu usuario" />
        <br />
        <Label for="password">Senha:</Label>
        <br />
        <input type="text" placeholder="Digite sua senha" />
        <br />
        <input type="submit" value="Login" />
      </Form>
    </>
  );
}

export default Login;
